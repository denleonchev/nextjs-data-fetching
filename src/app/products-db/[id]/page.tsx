import { getProduct } from "@/prisma-db";
import EditProductForm from "./edit-product-form";
import { notFound } from "next/navigation";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <EditProductForm id={Number(product.id)} title={product.title} price={product.price} description={product.description || ''} />;
}