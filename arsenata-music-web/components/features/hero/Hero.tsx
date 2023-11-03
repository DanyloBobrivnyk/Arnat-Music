"use client"

import React from "react";
import {NextPage} from "next";
import {PrimaryButton} from "@/components/shared";
import Image from "next/image";

interface Props {
    banner: string;
}

const Hero: NextPage<Props> = ({banner} : Props) => {
    if (!banner) {
        throw new Error("Model is undefined");
    }

    const handleScroll = () => {

    };

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    {banner}
                </h1>

                <p className="hero__subtitle">
                    Discover the mesmerizing world of Arsenata, where musical harmony comes alive.
                </p>

                <PrimaryButton
                    title="About us"
                    containerStyles="bg-primary-blue
                    text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
        </div>
    )
}

export default Hero;
// export const getStaticProps: GetStaticProps = async () => {
//     // const contentful = require('contentful');
//     // const client = contentful.createClient({
//     //     space: process.env.CONTENTFUL_SPACE_ID,
//     //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//     // });
//
//     const banner = await ContentService.instance
//         .client.getEntry<TypeHeroBannerSkeleton>('5118BTS5PARX45YWlExgAN');
//
//     return {
//         props: {
//             banner: banner
//         }
//     };
// };
