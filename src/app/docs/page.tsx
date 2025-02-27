'use client'

import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Team', href: '/#team', current: false },
  { name: 'Release Notes', href: '/release', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Documentation() {
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800 fixed w-full top-0 left-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between position:fixed top-0">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
            <Link href="https://marketplace.visualstudio.com/items?itemName=NextVis.NextVis">
            <Image
              src="/icon.png"
              alt="NextVis Logo"
              width={42}
              height={42}
              className="rounded-full"
              priority // Ensures fast loading for crucial assets
          
            />
            </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-800 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
            </button> */}
            {/* <button onClick={toggleTheme} className="flex justify-center items-center m-auto text-lg w-fit text-foreground dark:text-foreground hover:opacity-90 transition-color duration-200 ease-in-out rounded-lg font-semibold py-[5px] px-2"></button> */}
              <a href="/docs"
              className="px-3 py-2 border border-white bg-[#001A2F] text-white rounded-full text-sm hover:bg-foreground/5"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>


    <div className="min-h-screen bg-gray-300">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="prose prose-invert max-w-none pt-8">
          <h1 className="text-4xl font-bold text-black justify-center text-center">Documentation</h1>
          {/* <div>
            <a href="https://babeljs.io/" target="_blank" rel="noreferrer" className="children">
              {" "}
              <Image
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
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>
            <a href="https://d3js.org/" target="_blank" rel="noreferrer">
              {" "}
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg"
                alt="d3js"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="children">
              {" "}
              <Image
                src="https://global.discourse-cdn.com/auth0/optimized/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9_2_556x500.png"
                alt="next.js"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>{" "}
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className="children">
              {" "}
              <Image
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>{" "}
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" className="children">
              {" "}
              <Image
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
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>{" "}
            <a href="https://jestjs.io" target="_blank" rel="noreferrer" className="children">
              {" "}
              <Image
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
              <Image
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
              <Image
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
              <Image
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
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>{" "}
            <a href="https://webpack.js.org" target="_blank" rel="noreferrer" className="children">
              {" "}
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                alt="webpack"
                width="40"
                height="40"
                className="children"
              />{" "}
            </a>
          </div> */}
        </div>
        <div className="text-black">
        {/* <div className="max-w-none max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-xl text-black"> */}
        <div className="max-w-none max-w-6xl mx-auto px-4 pt-6 pb-2 text-2xl text-black">
          <h2><strong>Overview</strong></h2>
        </div>
          <p>This VS Code extension provides an interactive visualization of the middleware flow in Next.js
            applications. It helps developers understand middleware execution order, relationships, and performance
            metrics.
          </p>
        <div className="max-w-none max-w-6xl mx-auto px-4 pt-6 pb-2 text-2xl">
          <h2><strong>Getting Started</strong></h2>
        </div>
        <div className="max-w-none max-w-6xl mx-auto px-2 py-3 text-xl">
          <h3 className="text-lg font-semibold">Installation</h3>
        </div>
        <p>
          1. Open VS Code.<br></br>
          2. Go to the Extensions Marketplace.<br></br>
          3. Search for <span className="bg-slate-500 p-0.5 text-white">NextVis</span>.<br></br>
          4. Click Install.
        </p>
        <div className="max-w-none max-w-6xl mx-auto px-2 py-3 text-xl text-black">
          <h3 className="text-lg font-semibold">Usage</h3>
        </div>
        <p>
          1. Open the command palette<br></br>
          2. Run <span className="bg-slate-500 p-0.5 text-white">NextVis: Display middleware dendrogram</span>.<br></br>
          3. Click on <span className="bg-slate-500 p-0.5 text-white">Load Middleware File</span> and provide the path to your middleware file.<br></br>
          4. View the interactive middleware diagram in the webview panel.
        </p>
        <div className="max-w-none max-w-6xl mx-auto px-4 pt-6 pb-4 text-2xl text-black">
          <h2><strong>Requirements</strong></h2>
        </div>
        <ul className="list-disc list-inside">
          <li>VS Code version <span className="bg-slate-500 p-0.5 text-white">1.97.0</span></li>
          <li>A Next.js project with middleware files</li>
        </ul>
        <div className="max-w-none max-w-6xl mx-auto px-4 pt-6 pb-4 text-2xl">
          <h2><strong>Features</strong></h2>
        </div>
        <ul className="list-disc list-inside">
          <li><strong>Middleware Hierarchy Visualization</strong>: Displays middleware execution order and relationships.</li>
          <li><strong>Interactive Graph</strong>: Clickable nodes for expanding/collapsing details.</li>
          <li>*<strong>Metrics Panel</strong>: Provides details for performance of the extension</li>
        </ul>
        <p className="text-xs p-4">
          *Metrics currently pertain to the extension itself. Planning to measure middleware performance in the future.
        </p>
        <div className="max-w-none max-w-6xl mx-auto px-4 pt-6 pb-4 text-2xl">
          <h2 ><strong>Troubleshooting</strong></h2>
        </div>
        <ul className="list-none list-inside">
          <li><strong>No visualization appears?</strong> Ensure the provided middleware filepath is correct.</li>
        </ul>
        <div className="max-w-none max-w-6xl mx-auto px-4 pt-6 pb-4 text-2xl">
          <h2><strong>Contributing</strong></h2>
        </div>
        <p>Contributions are welcome! Submit issues or pull requests on <a href="https://github.com/oslabs-beta/NextVis" className="text-blue-600 underline hover:text-blue-800">GitHub</a>.</p>
      </div>
      </main>
    </div>
  </div>
          
  );
}
