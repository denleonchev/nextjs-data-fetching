"use client";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

import Link from "next/link";
import { useOptimistic } from "react";

export default function ProductsList({ products, removeProduct }: { products: Product[], removeProduct: (id: number) => Promise<void> }) {
    const [optimisticProducts, deleteOptimistic] = useOptimistic<Product[], number>(products, (currentState, optimisticValue) => {
        return currentState.filter(product => product.id !== optimisticValue)
    });

    const onDeleteButtonClick = (id: number) => async () => {
        deleteOptimistic(id);
        await removeProduct(id);
    }

    return (
        <div>
            {optimisticProducts.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>${(product.price / 100).toFixed(2)}</p>
                    <Link href={`/products-db/${product.id}`}>Edit</Link>
                    <form action={onDeleteButtonClick(product.id)}>
                        <button>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
}
