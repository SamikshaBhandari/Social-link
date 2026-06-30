'use client'

import { addLinkAction } from "../action/linkAction";
import { useState } from "react";
import { PlusCircle, Type } from "lucide-react";
import { FaGlobe, FaLink } from "react-icons/fa";

export default function LinkForm({ userId }: { userId: number }) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        await addLinkAction(formData, userId);
        (event.target as HTMLFormElement).reset();
        setLoading(false);
    }

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <PlusCircle size={20} className="text-purple-600" /> Add New Social Link
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1 flex items-center gap-1">
                        <FaGlobe size={12} /> Platform
                    </label>
                    <select name="platform_name" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm bg-white" required>
                        <option value="GitHub">GitHub</option>
                        <option value="YouTube">YouTube</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Portfolio">My Portfolio / Web</option>
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1 flex items-center gap-1">
                        <Type size={12} /> Title
                    </label>
                    <input type="text" name="title" placeholder="e.g., Follow my GitHub" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm" required />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1 flex items-center gap-1">
                        <FaLink size={12} /> URL Link
                    </label>
                    <input type="url" name="url" placeholder="https://..." className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm" required />
                </div>

                <div className="md:col-span-3 flex justify-end mt-2">
                    <button type="submit" disabled={loading} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition text-sm disabled:bg-gray-300 shadow-sm">
                        {loading ? "Adding..." : "Add Link"}
                    </button>
                </div>
            </form>
        </div>
    );
}