import Link from "next/link";

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gray-300">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full"
        >
          ← Back to Home
        </Link>

        <div className="prose prose-invert max-w-none">
          <h1 className="justify-center text-center text-xl text-black">NextFlow ReadMe</h1>
          <div>
            <a href="https://babeljs.io/" target="_blank" rel="noreferrer" className="children">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
                alt="babel"
                width="40"
                height="40"
              />{" "}
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
              className="children"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>
            <a href="https://d3js.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg"
                alt="d3js"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="children">
              {" "}
              <img
                src="https://global.discourse-cdn.com/auth0/optimized/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9_2_556x500.png"
                alt="next.js"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>{" "}
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className="children">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>{" "}
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" className="children">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
              className="children"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>{" "}
            <a href="https://jestjs.io" target="_blank" rel="noreferrer" className="children">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                alt="jest"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>{" "}
            {" "}
            <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="children">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>{" "}
          
            {" "}
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="children">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>{" "}
              {" "}
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="children">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>{" "}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
              className="children"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>{" "}
            <a href="https://webpack.js.org" target="_blank" rel="noreferrer" className="children">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                alt="webpack"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>
          </div>
          </div>
          <div className="text-black"></div>
          <div className="max-w-none max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-xl text-black">
          <h2><strong>🚀 Features</strong></h2>
<p>Flow Diagram: Visualize middleware execution across different routes.<br></br>

Performance Metric Panel: <br></br>

VS Code Integration: View middleware behavior directly in the editor.<br></br>
</p>
<br></br>
<h2><strong>📦 Installation</strong></h2>

<h3><em>Clone this repository:</em></h3>

-bash<br></br>
git clone https://github.com/oslabs-beta/NextFlow<br></br>
cd nextflow
<br></br>
<h3><em>Install dependencies:</em></h3>
-bash<br></br>
npm install
<br></br>
<h3><em>Build the extension:</em></h3>
-bash<br></br>
npm run build
<br></br>
<h3><em>Load it into VS Code:</em></h3>
-bash<br></br>
Open VS Code. <br></br>
Go to Extensions (Ctrl + Shift + X).<br></br>
Click on Load Extension and select the dist folder.<br></br><br></br>
<h2><strong>🛠 Usage</strong></h2>
<p>
1. Open your Next.js project in VS Code.<br></br>
2. Run the middleware visualization command (nextFlow: Start Visualization).<br></br>
3. Inspect middleware execution flow in the visual panel.<br></br>
4. Check the performance panel for CPU & RAM usage.<br></br>
</p>
<br></br>
<h2><strong>🤝 Contributing</strong></h2>
<h3><em>*How to contribute*</em></h3>
<p>We welcome contributions! Feel free to submit issues and pull requests.

-Fork the project<br></br>
-Create your feature branch (git checkout -b feature/AmazingFeature)<br></br>
-Commit your changes (git commit -m "Add some AmazingFeature")<br></br>
-Push to the branch (git push origin feature/AmazingFeature)<br></br>
-Open a pull request (from feature/AmazingFeature to dev)<br></br>
-Create a new issue on GitHub<br></br>
</p>
<br></br>
<h2><strong>Contributors</strong></h2>
<h4>Jun Inton - <a href="https://github.com/JunInton" className="underline text-blue-700">Github</a></h4>
<h4>Anthony Noyola - <a href="https://github.com/antwonasn" className="underline text-blue-700">Github</a></h4>
<h4>Sung Jung - <a href="https://github.com/sungguk85" className="underline text-blue-700">Github</a></h4>
<h4>Carolina Robinson - <a href="https://github.com/CaroSaFe" className="underline text-blue-700">Github</a></h4>
<h4>Brendan Hoskins - <a href="https://github.com/BrendanHoskins" className="underline text-blue-700">Github</a></h4>
<br></br>
<h2><strong>📬 Contact</strong></h2>

For questions or suggestions, open an issue or reach out to 
<br></br>
<br></br>
<h2><strong>📄 License</strong></h2>

MIT License. See LICENSE for details.
          </div>
          </main>
          </div>
          
  );
}
