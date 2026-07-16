'use server';

import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { createSession, deleteSession } from '@/lib/auth/admin-session';
import { createAdmin, getAdminByEmail } from '@/lib/services/admin-services';
import { adminSignupSchema, adminLoginSchema } from '@/lib/validation/auth-schema';

export async function signupAdmin(prevState, formData) {

    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    };

    const result = adminSignupSchema.safeParse(rawData);

    if (!result.success) {
        return {
            error: result.error.issues[0].message,
            fields: rawData
        };
    }

    const { name, email, password } = result.data;

    try {
        const existingAdmin = await getAdminByEmail(email);
        if (existingAdmin) return {
            error: 'An account with this email already exists',
            fields: rawData
        };

        const passwordHash = await bcrypt.hash(password, 12);
        const adminId = await createAdmin({ name, email, passwordHash });

        if (!adminId) return {
            error: 'Failed to create admin account',
            fields: rawData
        };
    } catch (error) {
        console.error('Signup Error:', error);
        return {
            error: 'Could not create admin account',
            fields: rawData
        };
    }

    redirect('/admin/login?registered=true');
}

export async function loginAdmin(prevState, formData) {

    const rawData = {
        email: formData.get('email'),
        password: formData.get('password'),
    };

    const result = adminLoginSchema.safeParse(rawData);

    if (!result.success) {
        return {
            error: result.error.issues[0].message,
            fields: rawData
        };
    }

    const { email, password } = result.data;

    try {
        const admin = await getAdminByEmail(email);
        if (!admin) return {
            error: 'Invalid email or password',
            fields: rawData
        };

        const isValid = await bcrypt.compare(password, admin.password_hash);
        if (!isValid) return {
            error: 'Invalid email or password',
            fields: rawData
        };

        await createSession(admin);
    } catch (error) {
        console.error('Login Error:', error);
        return {
            error: 'Could not log in. Please try again.',
            fields: rawData
        };
    }

    redirect('/admin/dashboard');
}

export async function logoutAdmin() {
    await deleteSession();
    redirect('/admin/login');
}