import { z } from "zod";

export const adminSignupSchema = z
    .object({
        name: z.string().trim()
            .min(1, "Name is required"),
        email: z.string().trim().toLowerCase()
            .min(1, "Email is required")
            .pipe(z.email("Invalid email format")),
        password: z.string().min(8, "Password must be at least 8 characters long"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export const adminLoginSchema = z.object({
    email: z.string().trim().toLowerCase().min(1, "All fields are required"),
    password: z.string().min(1, "All fields are required"),
});