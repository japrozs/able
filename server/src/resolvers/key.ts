import { Key } from "../entities/Key";
import { Product } from "../entities/Product";
import { isAuth } from "../middleware/isAuth";
import { Context } from "../types";
import { Arg, Ctx, Int, Mutation, Query, UseMiddleware } from "type-graphql";

export class KeyResolver {
    @UseMiddleware(isAuth)
    @Mutation(() => Boolean)
    async createKey(
        @Arg("productId", () => Int) productId: number,
        @Arg("key") key: string,
        @Arg("value") value: string,
        @Ctx() { req }: Context
    ) {
        const product = await Product.findOne(productId, {
            relations: ["creator"],
        });
        if (product?.creator.id != req.session.userId) {
            return false;
        }
        await Key.create({
            name: key,
            value,
            productId,
        }).save();
        return true;
    }
}
