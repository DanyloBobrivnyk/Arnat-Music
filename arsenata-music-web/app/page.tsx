import React from "react";
import ContentService from "@/lib/contentful/contentful-service";
import {TypeHeroBannerSkeleton} from "@/types/contentful";
import {Hero} from "@/components/features";

export default async function Home() {
    const data = await getData();
    return (
        <main
            className="overflow-hidden"
        >
            <Hero banner={data.fields.title}/>

        </main>
    )
}

const getData = async () => {
    const banner = await ContentService.instance
        .client.getEntry<TypeHeroBannerSkeleton>('5118BTS5PARX45YWlExgAN');

    return banner;
};
