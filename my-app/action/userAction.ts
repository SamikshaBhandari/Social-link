'use server'

import { createUserInDB, getUserByEmail } from "../services/userServices";
import { TypeUser } from "@/types/type.user";

export async function registerUser(data: FormData) {
    const username = data.get('username')?.toString();
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();

    if (!username || !email || !password) {
        throw new Error('Missing required fields');
    }

    await createUserInDB({ username, email, password } as TypeUser);
    return { success: true, message: 'User registered successfully' };
}

export async function loginUser(data: FormData) {
    try {
        const email = data.get('email')?.toString();
        const password = data.get('password')?.toString();

        if (!email || !password) {
            return { success: false, message: 'Missing required fields' };
        }

        const validuser = await getUserByEmail({ email, password });

        if (!validuser) {
            return { success: false, message: 'User not found!' };
        }

        const dbUser = validuser;

        if (dbUser.password !== password) {
            return { success: false, message: 'Invalid password!' };
        }

        return {
            success: true,
            message: 'Login successful',
            user: { id: dbUser.id, username: dbUser.username, email: dbUser.email }
        };

    } catch (error: any) {
        return { success: false, message: error.message || "Login failed" };
    }
}