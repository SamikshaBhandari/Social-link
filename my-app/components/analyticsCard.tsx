import { Link2, MousePointerClick } from "lucide-react";

type AnalyticsProps = {
    totalLinks: number;
    totalClicks: number;
};

export default function AnalyticsCard({ totalLinks, totalClicks }: AnalyticsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">Total Links Created</p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-1">{totalLinks}</h3>
                </div>
                <div className="p-4 bg-indigo-50 text-indigo-600 rounded-xl">
                    <Link2 size={24} />
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">Total Traffic / Clicks</p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-1">{totalClicks}</h3>
                </div>
                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-xl">
                    <MousePointerClick size={24} />
                </div>
            </div>
        </div>
    );
}