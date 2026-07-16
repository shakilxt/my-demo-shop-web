import { z } from "zod";

export const productSchema = z.object({
    name: z.string().trim()
        .min(1, "Name is required"),
    price: z.coerce
        .number({ invalid_type_error: 'Price must be a valid number.' })
        .positive("Price must be a positive number"),
    imageUrl: z.string().trim()
        .min(1, "Image URL is required")
        .pipe(z.url('Image URL must be a valid URL')),
    description: z.string().trim()
        .min(1, "Description is required"),
});