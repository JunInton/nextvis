import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-300">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full"
        >
          ← Back to Home
        </Link>
        <div className="prose prose-invert max-w-none text-black">
          <h1>Projects</h1>
        </div>
      </main>
    </div>
  );
}
