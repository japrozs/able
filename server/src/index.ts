import "reflect-metadata";
import "dotenv-safe/config";
import { __prod__, COOKIE_NAME } from "./constants";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user";
import { ProductResolver } from "./resolvers/product";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { createConnection } from "typeorm";
import { User } from "./entities/User";
import { Product } from "./entities/Product";
import path from "path";
import { Key } from "./entities/Key";
import { KeyResolver } from "./resolvers/key";
import apiRouter from "./routes/index";

const main = async () => {
    const conn = await createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: true,
        migrations: [path.join(__dirname, "./migrations/*")],
        entities: [User, Product, Key],
    });
    await conn.runMigrations();

    const app = express();
    app.use(express.json());

    const RedisStore = connectRedis(session);
    const redis = new Redis(process.env.REDIS_URL);
    app.set("trust proxy", 1);
    app.use(
        cors({
            origin: process.env.CORS_ORIGIN,
            credentials: true,
        })
    );
    app.use(
        session({
            name: COOKIE_NAME,
            store: new RedisStore({
                client: redis,
                disableTouch: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true,
                sameSite: "lax",
                secure: __prod__,
                domain: __prod__ ? ".japrozsaini.me" : undefined,
            },
            saveUninitialized: false,
            secret: process.env.SESSION_SECRET,
            resave: false,
        })
    );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver, ProductResolver, KeyResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({
            req,
            res,
            redis,
        }),
    });

    apolloServer.applyMiddleware({
        app,
        cors: false,
    });

    app.use("/api", apiRouter);

    app.listen(parseInt(process.env.PORT), () => {
        console.log(`🚀 Server started on localhost:${process.env.PORT}`);
    });
};

main().catch((err) => {
    console.error(err);
});
