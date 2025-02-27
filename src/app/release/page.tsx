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

export default function Release() {
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
        <div className="text-black">
          <section>
            <br></br>
            <p className="font-bold text-lg underline">
              All notable changes to the NextVis extension will be documented
              in this file.
            </p>
            <br />

            <p className="font-bold">[1.0.2] - February 25, 2025</p>
            <span />
            <p>Added user feedback for files with no middleware</p>
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
  </div>
  );
}
