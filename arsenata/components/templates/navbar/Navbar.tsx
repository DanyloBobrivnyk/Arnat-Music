"use client";

import React from "react";
import Logo from '@/public/logo.svg';
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {

    const rightMenu = [
        { name: 'Albums', href: '#', },
        { name: 'Youtube', href: 'https://youtube.com', badge: "new"},
        { name: 'Donate', href: '#'}
    ]

    const leftMenu = [
        { name: 'Home', href: '#'},
        { name: 'About', href: '#'},
        { name: 'Contact', href: '/contact'},
    ];

    const mobileMenu = [...leftMenu, ...rightMenu];

    // const { t } = useTranslation();

    // <header className="w-full absolute z-10">
    //     <nav className="max-w-[1440px] mx-auto
    //             flex justify-between items-center
    //             sm:px-16 px-6 py-4">
    //         <Link href="#" >
    //             <Image src={Logo} alt="logo"/>
    //         </Link>
    //         <Link href='#'>Home</Link>
    //     </nav>
    // </header>

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                                <div className="hidden sm:mr-6 sm:block">
                                    <div className="flex space-x-4">
                                        {leftMenu.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-shrink-0 items-center">
                                    <Image
                                        className="h-8 w-auto"
                                        width={50}
                                        height={50}
                                        src={Logo}
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {rightMenu.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500"
                                            >
                                                {item.name}
                                                {/*{item.badge && (*/}
                                                {/*    <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800 ">*/}
                                                {/*      {item.badge}*/}
                                                {/*    </span>*/}
                                                {/*)}*/}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {mobileMenu.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as={Link}
                                    href={item.href}
                                    className="block px-5 py-2 ml-4 text-sm font-medium text-gray-600 hover:text-blue-500"
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

function classNames(...classes : any[]) {
    return classes.filter(Boolean).join(' ')
}

export default Navbar;
