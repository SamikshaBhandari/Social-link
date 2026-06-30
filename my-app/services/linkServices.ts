import { db } from "@/db";
import { TypeSocialLink } from "@/types/type.link";

export async function getAllLinks(userId: number): Promise<TypeSocialLink[]> {
    try {
        const [rows] = await db.execute(
            "SELECT * FROM social_links WHERE user_id = ? ORDER BY id DESC",
            [userId]
        );
        return rows as TypeSocialLink[];
    } catch (error) {
        throw error;
    }
}

export async function createLinkInDB(link: TypeSocialLink): Promise<void> {
    try {
        await db.execute(
            "INSERT INTO social_links (user_id, platform_name, title, url) VALUES (?, ?, ?, ?)",
            [link.user_id, link.platform_name, link.title, link.url]
        );
    } catch (error) {
        throw error;
    }
}

export async function deleteLinkFromDB(id: number): Promise<void> {
    try {
        await db.execute("DELETE FROM social_links WHERE id = ?", [id]);
    } catch (error) {
        throw error;
    }
}

export async function incrementClickInDB(id: number): Promise<void> {
    try {
        await db.execute("UPDATE social_links SET clicks = clicks + 1 WHERE id = ?", [id]);
    } catch (error) {
        throw error;
    }
}