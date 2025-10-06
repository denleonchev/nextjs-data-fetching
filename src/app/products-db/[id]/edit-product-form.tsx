"use client";

import { SubmitButton } from "@/components/submit";
import { editProduct, FormState } from "@/actions/products";
import { useActionState } from "react";

const initialState: FormState = {
    errors: {},
}

export default function EditProductForm({ id, title, price, description }: { id: number, title: string, price: number, description: string }) {
  const boundEditProduct = editProduct.bind(null, id);
  const [{ errors }, formAction, isPending] = useActionState(boundEditProduct, initialState);

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 border rounded"
          name="title"
          defaultValue={title}
        />
        {errors.title && <p className="text-red">{errors.title}</p>}
      </label>
      <label className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 border rounded"
          name="price"
          defaultValue={price}
        />
        {errors.price && <p className="text-red">{errors.price}</p>}
      </label>
      <label className="text-white">
        Description
        <textarea
          className="block w-full p-2 border rounded"
          name="description"
          defaultValue={description}
        />
        {errors.description && <p className="text-red">{errors.description}</p>}
      </label>
      <SubmitButton>Add Product</SubmitButton>
    </form>
    )
}