import { db } from "@/db";
import { TypeUser } from "@/types/type.user";

export async function createUserInDB(newUser: TypeUser) {
    try {
        await db.query(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            [newUser.username, newUser.email, newUser.password]
        );
    } catch (error) {
        console.error("Insert Error:", error);
        throw error;
    }
}

export async function getUserByEmail(email: string): Promise<TypeUser | null> {
    try {
        const [rows]: any = await db.query("SELECT * FROM users WHERE email = ?", [email]);
        return rows.length > 0 ? (rows[0] as TypeUser) : null;
    } catch (error) {
        return null;
    }
}

export async function getUserById(id: number): Promise<TypeUser | null> {
    try {
        const [rows]: any = await db.query("SELECT * FROM users WHERE id = ?", [id]);
        return rows.length > 0 ? (rows[0] as TypeUser) : null;
    } catch (error) {
        return null;
    }
}