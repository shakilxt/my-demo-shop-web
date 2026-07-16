'use server';

import { updateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { insertProduct, updateProduct, removeProduct } from '@/lib/services/product-services';
import { verifyAdmin } from '@/lib/auth/verify-admin';
import { productSchema } from '@/lib/validation/product-schema';

export async function createProduct(prevState, formData) {

    await verifyAdmin()

    const rawData = {
        name: formData.get('name'),
        price: formData.get('price'),
        imageUrl: formData.get('image_url'),
        description: formData.get('description'),
    }

    const result = productSchema.safeParse(rawData)

    if (!result.success) {
        return {
            error: result.error.issues[0].message,
            fields: rawData
        };
    }

    try {
        await insertProduct(result.data);
    } catch (error) {
        console.error('Create Product Error:', error);
        return {
            error: 'Could not create product. Please try again.',
            fields: rawData
        };
    }

    updateTag('products');
    redirect('/admin/dashboard/products');
}

export async function editProduct(id, prevState, formData) {

    await verifyAdmin();

    const rawData = {
        name: formData.get('name'),
        price: formData.get('price'),
        imageUrl: formData.get('image_url'),
        description: formData.get('description'),
    }

    const result = productSchema.safeParse(rawData)

    if (!result.success) {
        return {
            error: result.error.issues[0].message,
            fields: rawData
        };
    }

    try {
        await updateProduct(id, result.data);
    } catch (error) {
        console.error('Edit Product Error:', error);
        return {
            error: 'Could not update product. Please try again.',
            fields: rawData
        };
    }

    updateTag('products');
    updateTag(`product-${id}`);

    redirect('/admin/dashboard/products');
}

export async function deleteProduct(id, prevState, formData) {

    await verifyAdmin()

    try {
        await removeProduct(id);
    } catch (error) {
        console.error('Delete Product Error:', error);
        return { error: 'Failed to delete product. Please try again.' };
    }

    updateTag('products');
    redirect('/admin/dashboard/products');
}