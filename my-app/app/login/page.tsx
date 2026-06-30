import { loginAction } from "@/action/authAction";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
            <div className="w-full max-w-sm">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-slate-900">Sign In</h1>
                    <p className="text-slate-500 text-sm mt-1">Welcome back to LinkFlow.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <form action={loginAction} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</label>
                            <input name="email" type="email" placeholder="samiksha@gmail.com" required
                                className="w-full p-2.5 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Password</label>
                            <input name="password" type="password" placeholder="••••••••" required
                                className="w-full p-2.5 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
                        </div>
                        <button type="submit" className="w-full bg-purple-600 text-white p-2.5 rounded-lg font-semibold hover:bg-slate-800 transition">
                            Sign In
                        </button>
                    </form>

                    <div className="mt-5 pt-4 border-t border-slate-100 text-center">
                        <p className="text-xs text-slate-500">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-purple-600 font-bold hover:underline">
                                Create one
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}