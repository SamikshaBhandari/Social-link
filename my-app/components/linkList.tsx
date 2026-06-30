'use client'

import { deleteLinkAction, trackClickAction } from "../action/linkAction";
import { TypeSocialLink } from "../types/type.link";
import { Trash2, ExternalLink, Globe, Eye } from "lucide-react";
import { FaGithub, FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const getPlatformStyles = (platform: string) => {
    switch (platform.toLowerCase()) {
        case "github": return { icon: <FaGithub size={18} />, bg: "bg-gray-900 text-white" };
        case "youtube": return { icon: <FaYoutube size={18} />, bg: "bg-red-600 text-white" };
        case "facebook": return { icon: <FaFacebook size={18} />, bg: "bg-blue-600 text-white" };
        case "instagram": return { icon: <FaInstagram size={18} />, bg: "bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white" };
        case "linkedin": return { icon: <FaLinkedin size={18} />, bg: "bg-blue-700 text-white" };
        default: return { icon: <Globe size={18} />, bg: "bg-purple-600 text-white" };
    }
};

export default function LinkList({ links }: { links: TypeSocialLink[] }) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Your Active Content Links</h2>
            {links.length === 0 ? (
                <p className="text-gray-400 text-sm text-center py-8">No links added yet. Add some links above!</p>
            ) : (
                <div className="flex flex-col gap-3">
                    {links.map((link) => {
                        const style = getPlatformStyles(link.platform_name);
                        return (
                            <div key={link.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-purple-200 transition bg-gray-50/50">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2.5 rounded-xl ${style.bg}`}>
                                        {style.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm md:text-base">{link.title}</h4>
                                        <p className="text-xs text-gray-400 max-w-xs md:max-w-md truncate">{link.url}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="text-xs bg-gray-200/60 text-gray-600 px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5">
                                        <Eye size={14} className="text-gray-500" /> {link.clicks} clicks
                                    </span>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        onClick={async () => link.id && await trackClickAction(link.id)}
                                        className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                    <button
                                        onClick={async () => link.id && confirm("Are you sure you want to delete this link?") && await deleteLinkAction(link.id)}
                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}