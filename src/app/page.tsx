
'use client'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { MdDarkMode } from "react-icons/md";

import Image from "next/image";

const navigation = [
  { name: 'Main', href: '#', current: true },
  { name: 'Team', href: '#team', current: false },
  // { name: 'Projects', href: '/projects', current: false },
  { name: 'Release Notes', href: '/release', current: false },
  { name: 'Article', href:"", current: false},
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}



const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')
}

export default function Home() {
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
            <Image
              src="/icon.png"
              alt="NextVis Logo"
              width={32}
              height={32}
              className="rounded-full"
              priority // Ensures fast loading for crucial assets
            />
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
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
            </button>
            <button onClick={toggleTheme} className="flex justify-center items-center m-auto text-lg w-fit text-background dark:text-background hover:opacity-90 transition-color duration-200 ease-in-out rounded-lg font-semibold py-[5px] px-2"><MdDarkMode/></button>
              <a href="/docs"
              className="px-3 py-2 border border-background dark:border-foreground bg-cyan-300 dark:bg-cyan-300 text-foreground rounded-full text-sm hover:bg-foreground/5"
            >
              Get Started
            </a>
              {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                {/* <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <Image
                    alt="Your Profile"
                    src="/blank-profile.png"
                    width={32}
                    height={32}
                    className="rounded-full"
                    loading="lazy"
                  />
                </MenuButton> */}
              </div>
              
              {/* <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems> */}
            </Menu>
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
    <div className="min-h-screen bg-foreground dark:bg-background"> {/* bg-[image:url(/icon.png)] */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 mt-16">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold tracking-tight mb-6 text-background dark:text-foreground">
            NextVis
          </h1>
          <p className="text-xl text-background dark:text-foreground mb-8 max-w-3xl mx-auto">
            Manage complex middleware chains in your
            next.js codebase
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/oslabs-beta/NextVis"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-background dark:bg-foreground text-foreground dark:text-background rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
            {/* <a
              href="/docs"
              className="px-6 py-3 border border-background dark:border-foreground bg-foreground dark:bg-background text-background dark:text-foreground rounded-lg font-medium hover:bg-foreground/5 transition-colors"
            >
              Documentation
            </a> */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Middleware Visualization",
              description:
                "Specify your top level middleware and nextflow will find the rest",
              icon: "⚡️",
            },
            {
              title: "Performance Metrics",
              description:
                "Identify problem middleware quickly and effectively",
              icon: "🛠️",
            },
            {
              title: "Reduce Learning Curve",
              description:
                "Understand complex middleware relationships with a glance",
              icon: "🚀",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-background dark:border-foreground hover:shadow-lg transition-shadow bg-foreground dark:bg-background text-background dark:text-foreground"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-background dark:text-foreground">
                {feature.title}
              </h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
          </div>
        <div className="mb-12">
          <h2 id ="howTo" className="text-3xl font-bold text-center mb-12 text-background dark:text-foreground">
            How to...
          </h2>
            <Image src="/fullscreen-demo-gif.gif" width={1280} height={300} className='rounded-xl border border-background dark:border-foreground' alt="fullscreen-demo"/>
        </div>
        <div className="mb-20">
          <h2 id ="team" className="text-3xl font-bold text-center mb-12 text-background dark:text-foreground">
            Meet the Team
          </h2>
          <svg className="size-6 animate-bounce">

          </svg>
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                firstName: "Jun",
                lastName: "Inton",
                image: "/jun.jpg",
                github: "https://github.com/JunInton",
              },
              {
                firstName: "Anthony",
                lastName: "Noyola",
                image: "/anthony.jpg",
                github: "https://github.com/antwonasn",
              },
              {
                firstName: "Sung",
                lastName: "Jung",
                image: "/sung.jpg",
                github: "https://github.com/sungguk85",
              },
              {
                firstName: "Carolina",
                lastName: "Robson",
                image: "/carolina.jpg",
                github: "https://github.com/CaroSaFe",
              },
              {
                firstName: "Brendan",
                lastName: "Hoskins",
                image: "/brendan.jpeg",
                github: "https://github.com/BrendanHoskins",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 rounded-xl border border-background hover:scale-110 transition-shadow bg-foreground dark:bg-background dark:border-foreground"
              >
                <div className="w-32 h-32 relative rounded-full overflow-hidden mb-6 bg-foreground/5">
                  <Image
                    src={member.image}
                    alt={member.firstName}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 128px, 160px"
                    style={{
                      objectPosition:
                        member.firstName === "Brendan"
                          ? "center -10px"
                          : "center",
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-background dark:text-foreground text-center">
                  {member.firstName}
                </h3>
                <h3 className="text-xl font-semibold text-background dark:text-foreground text-center">
                  {member.lastName}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background dark:text-foreground hover:text-foreground transition-colors"
                    aria-label={`${member.firstName}'s GitHub`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="text-center text-background dark:text-foreground">
          <p>Built with ❤️ by the oslabs community</p>
        </footer>
      </main>
    </div>
    </div>
  );
}
