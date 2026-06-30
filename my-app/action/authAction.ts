'use server'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createUserInDB, getUserByEmail } from '@/services/userServices';

export async function loginAction(prevState: any, formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const user = await getUserByEmail(email);

    if (!user) {
        return { success: false, message: "User not found" };
    }

    if (user.password !== password) {
        return { success: false, message: "Invalid email or password" };
    }

    const cookieStore = await cookies();
    cookieStore.set('userId', String(user.id), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24
    });

    redirect('/dashboard');
}

export async function registerAction(prevState: any, formData: FormData) {
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        await createUserInDB({ username, email, password } as any);
    } catch (error) {
        console.error("Register Error:", error);
        return { success: false, message: "Registration failed, try again!" };
    }

    redirect('/login');
}

export async function logoutAction() {
    const cookieStore = await cookies();
    cookieStore.delete('userId');
    redirect('/login');
}