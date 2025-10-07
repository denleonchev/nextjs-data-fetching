type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

import { removeProduct } from "@/actions/products";
import { getProducts } from "@/prisma-db";
import ProductsList from "./products-list";

export default async function ProductsPage() {
    const products: Product[] = await getProducts();

    return (
        <ProductsList products={products} removeProduct={removeProduct}/>
    );
}
