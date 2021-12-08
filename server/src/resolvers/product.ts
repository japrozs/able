import { Product } from "../entities/Product";
import { Arg, Ctx, Mutation, UseMiddleware, Query, Int } from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { Context } from "../types";

export class ProductResolver {
    @UseMiddleware(isAuth)
    @Mutation(() => Boolean)
    async createProduct(@Arg("name") name: string, @Ctx() { req }: Context) {
        await Product.create({
            creatorId: req.session.userId,
            name,
            description: "",
        }).save();
        return true;
    }

    @UseMiddleware(isAuth)
    @Query(() => Product)
    async getProduct(
        @Arg("id", () => Int) id: number,
        @Ctx() { req }: Context
    ) {
        return Product.findOne({
            where: {
                id,
                creatorId: req.session.userId,
            },
            relations : ["keys"]
        });
    }
}
