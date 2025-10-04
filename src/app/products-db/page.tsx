type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

import { getProducts } from "@/prisma-db";

export default async function ProductsPage() {
    const products: Product[] = await getProducts();

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>${(product.price / 100).toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
}
