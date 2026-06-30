import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAllLinks } from "@/services/linkServices";
import { getUserById } from "@/services/userServices";
import AnalyticsCard from "@/components/analyticsCard";
import LinkForm from "@/components/linkForm";
import LinkList from "@/components/linkList";
import { logoutAction } from "@/action/authAction";

export default async function DashboardPage() {
    const cookieStore = await cookies();
    const userIdCookie = cookieStore.get('userId');

    if (!userIdCookie) {
        redirect('/login');
    }

    const currentUserId = parseInt(userIdCookie.value);

    const user = await getUserById(currentUserId);
    const links = await getAllLinks(currentUserId);

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p className="text-red-500 font-bold mb-4">User profile not found.</p>
                <form action={logoutAction}>
                    <button type="submit" className="text-blue-500 underline">Login again</button>
                </form>
            </div>
        );
    }

    const totalLinks = Array.isArray(links) ? links.length : 0;
    const totalClicks = Array.isArray(links)
        ? links.reduce((acc: number, link: any) => acc + (link.clicks || 0), 0)
        : 0;

    const displayName = user?.username ? user.username : "User";
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* Header */}
            <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
                    <span className="font-bold text-lg text-slate-800">LinkFlow</span>
                    <form action={logoutAction}>
                        <button type="submit" className="text-sm font-medium text-slate-500 hover:text-rose-600 transition">
                            Sign Out
                        </button>
                    </form>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-10 space-y-8">
                <h1 className="text-2xl font-bold text-slate-900">
                    Welcome back, {displayName.split(" ")[0]}
                </h1>

                <AnalyticsCard totalLinks={totalLinks} totalClicks={totalClicks} />

                <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-4">Add New Social Link</h3>
                    <LinkForm userId={currentUserId} />
                </section>

                <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-4">Your Active Content Links</h3>
                    <LinkList links={Array.isArray(links) ? links : []} />
                </section>
            </main>
        </div>
    );
}