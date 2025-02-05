import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center mb-8 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="prose prose-invert max-w-none">
          <h1>Projects</h1>
        </div>
      </main>
    </div>
  );
}
