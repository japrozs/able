import React from "react";
import { ProductCard } from "../../components/ui/cards/ProductCard";
import { Wrapper } from "../../components/ui/Wrapper";
import { useMeQuery } from "../../generated/graphql";

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
    const { data, loading } = useMeQuery();
    return (
        <Wrapper>
            <div className="p-2 px-4">
                <h1 className="text-3xl font-semibold text-gray-800">
                    🔗 Your products
                </h1>
                <div className="mt-5">
                    {data && !loading ? (
                        <>
                            {data.me?.products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </>
                    ) : (
                        <div>
                            <h1>loading...</h1>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

export default Index;
