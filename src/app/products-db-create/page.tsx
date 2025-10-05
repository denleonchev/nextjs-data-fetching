"use client";

import { SubmitButton } from "@/components/submit";
import { createProduct, FormState } from "@/actions/products";
import { useActionState } from "react";

const initialState: FormState = {
    errors: {},
}

export default function AddProductPage() {
  const [{ errors }, formAction, isPending] = useActionState(createProduct, initialState);

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 border rounded"
          name="title"
        />
        {errors.title && <p className="text-red">{errors.title}</p>}
      </label>
      <label className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 border rounded"
          name="price"
        />
        {errors.price && <p className="text-red">{errors.price}</p>}
      </label>
      <label className="text-white">
        Description
        <textarea
          className="block w-full p-2 border rounded"
          name="description"
        />
        {errors.description && <p className="text-red">{errors.description}</p>}
      </label>
      <SubmitButton>Add Product</SubmitButton>
    </form>
    )
}