type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

import { removeProduct } from "@/actions/products";
import { getProducts } from "@/prisma-db";
import ProductsList from "./products-list";

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    const { query } = await searchParams;
    const products: Product[] = await getProducts(query);

    return (
        <ProductsList products={products} removeProduct={removeProduct}/>
    );
}
