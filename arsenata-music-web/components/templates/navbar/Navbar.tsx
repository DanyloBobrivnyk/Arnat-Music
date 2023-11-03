"use client";

import React from "react";

import BlogLogo from '@/public/svg/blog-logo.svg';
import Container from "@/components/shared/container/Container";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";

const Navbar = () => {

    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Contact', href: '/contact', current: false },
    ]

    const leftmenu = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "About",
            href: "/about"
        },
        {
            label: "Contact",
            href: "/contact"
        }
    ];

    const rightmenu = [
        {
            label: "Albums",
            href: "/albums"
        },
        {
            label: "Youtube",
            href: "https://youtube.com/",
            external: true,
            // badge: "new"
        },
        {
            label: "Language",
            href: "/"
        }
    ];

    const mobilemenu = [...leftmenu, ...rightmenu];
    // const { t } = useTranslation();

    // <header className="w-full absolute z-10">
    //     <nav className="max-w-[1440px] mx-auto
    //             flex justify-between items-center
    //             sm:px-16 px-6 py-4">
    //         <Link href="#" >
    //             <Image src={BlogLogo} alt="logo"/>
    //         </Link>
    //         <Link href='#'>Home</Link>
    //     </nav>
    // </header>

    return (
        <Container>
            <Disclosure as="nav">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500"
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </Container>
    )
}

function classNames(...classes : any[]) {
    return classes.filter(Boolean).join(' ')
}

export default Navbar
