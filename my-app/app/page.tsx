import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 font-sans p-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
          Welcome to <span className="text-purple-600 bg-clip-text">LinkFlow</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Organize your social media links, content, and track your audience clicks in one professional dashboard.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition"
          >
            Sign In to Dashboard
          </Link>
          <Link
            href="/register"
            className="px-6 py-3 bg-white text-purple-600 border border-purple-200 font-semibold rounded-xl shadow-sm hover:bg-purple-50 transition"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}