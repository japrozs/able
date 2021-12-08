import { Field, ObjectType } from "type-graphql";
import {
    CreateDateColumn,
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    Column,
    OneToMany,
} from "typeorm";
import { Key } from "./Key";
import { User } from "./User";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    description: string;

    @Field(() => [Key])
    @OneToMany(() => Key, (key) => key.product)
    keys: Key[];

    @Field()
    @Column()
    creatorId: number;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.products)
    creator: User;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
