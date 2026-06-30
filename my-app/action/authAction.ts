'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export async function loginAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const cookieStore = await cookies();
    cookieStore.set('userId', '1', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24
    });

    redirect('/dashboard');
}


export async function registerAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;


    redirect('/login');
}


export async function logoutAction() {
    const cookieStore = await cookies();
    cookieStore.delete('userId');
    redirect('/login');
}