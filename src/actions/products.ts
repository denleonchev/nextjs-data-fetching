"use server";

import { addProduct, updateProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
}

const validateProductFields = (formData: FormData) => {
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    const errors: Errors = {};
    if (!title) {
        (errors as any).title = "Title is required";
    }
    if (!price) {
        (errors as any).price = "Price is required";
    }
    if (!description) {
        (errors as any).description = "Description is required";
    }

    return errors;
}

const executeAddProduct = (formData: FormData) => {
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    return addProduct(title, parseInt(price), description)
}

export async function createProduct(prevState: FormState, formData: FormData) {
    const errors = validateProductFields(formData);

    if (Object.keys(errors).length) {
        return {errors};
    }

    await executeAddProduct(formData);

    redirect('/products-db');
}

const executeUpdateProduct = (id: number, formData: FormData) => {
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    return updateProduct(id, title, parseInt(price), description)
}

export async function editProduct(id: number, prevState: FormState, formData: FormData) {
    const errors = validateProductFields(formData);

    if (Object.keys(errors).length) {
        return {errors};
    }

    await executeUpdateProduct(id, formData);

    redirect('/products-db');
}