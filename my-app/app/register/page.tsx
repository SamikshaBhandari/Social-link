'use client'

import { registerAction } from "@/action/authAction";
import { useActionState } from 'react';
import Link from "next/link";

export default function RegisterPage() {
    const [state, action] = useActionState(registerAction, null);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
            <div className="w-full max-w-sm">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
                    <p className="text-slate-500 text-sm mt-1">Join LinkFlow to start sharing.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">

                    {state?.message && (
                        <div className={`mb-4 p-3 rounded-lg text-sm text-center ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                            {state.message}
                        </div>
                    )}

                    <form action={action} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                            <input name="username" type="text" placeholder="samiksha" required
                                className="w-full p-2.5 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
                        </div>
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
                        <button type="submit" className="w-full bg-purple-600 text-white p-2.5 rounded-lg font-semibold hover:bg-purple-700 transition">
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-5 pt-4 border-t border-slate-100 text-center">
                        <p className="text-xs text-slate-500">
                            Already have an account?{" "}
                            <Link href="/login" className="text-slate-900 font-bold hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}