import Link from "next/link";

export default function Release() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center mb-8 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        📢 Release Notes – Version x.x.x (Date: Feb 4, 2025)
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
          🚀 New Features
        </h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400">
          <li>
            <strong>Dark Mode Support</strong> – Added full support for dark
            mode to enhance user experience.
          </li>
          <li>
            <strong>Performance Improvements</strong> – Optimized API calls for
            faster load times.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
          🛠️ Bug Fixes
        </h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400">
          <li>
            Fixed an issue where the login button was not responding on mobile
            devices.
          </li>
          <li>
            Resolved an error causing incorrect timestamps in activity logs.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
          🔧 Improvements
        </h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400">
          <li>Enhanced UI responsiveness for smaller screen sizes.</li>
          <li>Improved accessibility for screen reader compatibility.</li>
        </ul>
      </section>
    </div>
      </main>
    </div>
  );
}
