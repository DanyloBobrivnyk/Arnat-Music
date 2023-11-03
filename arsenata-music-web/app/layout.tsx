import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import {Footer, Navbar} from "@/components/templates";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Arsenata',
    description: 'Discover the mesmerizing world of Arsenata',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="relative">
                <Navbar/>
                {children}
                <Footer/>
            </body>
        </html>
    )
}
