import { Field, ObjectType } from "type-graphql";
import {
    CreateDateColumn,
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    Column,
} from "typeorm";
import { Product } from "./Product";

@ObjectType()
@Entity()
export class Key extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    value: string;

    @Field()
    @Column()
    productId: number;

    @Field(() => Product)
    @ManyToOne(() => Product, (product) => product.keys)
    product: Product;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
