'use server'

import { createLinkInDB, deleteLinkFromDB, incrementClickInDB } from "../services/linkServices";
import { revalidatePath } from "next/cache";

export async function addLinkAction(data: FormData, userId: number) {
    try {
        const platform_name = data.get('platform_name')?.toString();
        const title = data.get('title')?.toString();
        const url = data.get('url')?.toString();

        if (!platform_name || !title || !url || !userId) {
            return { success: false, message: "Required fields are missing!" };
        }

        await createLinkInDB({ user_id: userId, platform_name, title, url });
        revalidatePath("/dashboard");
        return { success: true, message: "Link added successfully!" };
    } catch (error: any) {
        return { success: false, message: error.message || "Something went wrong" };
    }
}

export async function deleteLinkAction(id: number) {
    try {
        await deleteLinkFromDB(id);
        revalidatePath("/dashboard");
        return { success: true, message: "Link deleted successfully!" };
    } catch (error: any) {
        return { success: false, message: error.message };
    }
}

export async function trackClickAction(id: number) {
    try {
        await incrementClickInDB(id);
        revalidatePath("/dashboard");
        return { success: true };
    } catch (error) {
        return { success: false };
    }
}