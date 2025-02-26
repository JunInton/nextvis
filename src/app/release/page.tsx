import Link from "next/link";

// const navigation = [
//   { name: 'Main', href: '#', current: true },
//   { name: 'Team', href: '#team', current: false },
//   // { name: 'Projects', href: '/projects', current: false },
//   { name: 'Release Notes', href: '/release', current: false },
//   { name: 'Article', href:"", current: false},
// ]

// const toggleTheme = () => {
//   document.documentElement.classList.toggle('dark')
// }

export default function Release() {
  return (
    
    <div className="min-h-screen bg-gray-300">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full"
        >
          ← Back to Home
        </Link>
        <div className="text-black">
          <section>
            <br></br>
            <p className="font-bold text-lg underline">
              All notable changes to the NextVis extension will be documented
              in this file.
            </p>
            <br />

            <p className="font-bold">[1.0.0] - February 8, 2025</p>
            <span />
            <p>Initial release</p>
            <br />

            <p className="font-bold">[0.7.0] - February 6, 2025</p>
            <span />
            <p>Changed branding</p>
            <br />

            <p className="font-bold">[0.6.1] - February 5, 2025</p>
            <span />
            <p>Implemented testing with Jest</p>
            <br />

            <p className="font-bold">[0.6.0] - February 1, 2025</p>
            <span />
            <p>Improved efficiency of parsing script</p>
            <br />

            <p className="font-bold">[0.5.0] - January 18, 2025</p>
            <span />
            <p>Made parsing script more robust</p>
            <p>Added mouseover event to nodes</p>
            <br />

            <p className="font-bold">[0.4.1] - December 11, 2024</p>
            <span />
            <p>
              Fixed formatting issues and receiving issues, extension MVP is
              working as intended
            </p>
            <br />

            <p className="font-bold">[0.4.0] - December 11, 2024</p>
            <span />
            <p>Added the parsing script to the extension.ts file</p>
            <p>Refactored with TypeScript</p>
            <br />

            <p className="font-bold">[0.3.0] - December 7, 2024</p>
            <span />
            <p>Bundled D3 with extension rather than using CDN</p>
            <br />

            <p className="font-bold">[0.2.0] - December 5, 2024</p>
            <span />
            <p>Switched to VS Code extension configuration</p>
            <br />

            <p className="font-bold">[0.1.1] - November 29, 2024</p>
            <span />
            <p>D3 Tree Hierarchy updates (element, text and etc)</p>
            <br />

            <p className="font-bold">[0.1.0] - November 27, 2024</p>
            <span />
            <p>Switched to webpack configuration</p>
            <br />

            <p className="font-bold">[0.0.1] - November, 2024</p>
            <span />
            <p>Initial commits</p>
            <br />
          </section>
        </div>
      </main>
    </div>
  );
}
