import React from "react";
import Link from "next/link";
import Picture from "@/public/musician.png";
import Image from "next/image";
import {twMerge} from "tailwind-merge";
import Container from "@/components/shared/container/Container";
import Label from "@/components/shared/Label";

interface ArticleTileProps {
    image: string | null | undefined,
    tag: string | null | undefined,
    title: string | null | undefined,
}

const ArticleTile = ({ ...props }: ArticleTileProps) => {
    const { title, tag, image } = props;
    // const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });

    return (
        <Container className="!pt-0">
            <div
                className={twMerge(
                    " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
                )}>
                <Link
                    className={twMerge(
                        "relative block",
                        "aspect-square"
                    )}
                    href={`albums/${title}`}>
                    {
                        <Image
                            src={Picture}
                            alt={"Thumbnail"}
                            className="object-cover transition-all"
                            fill
                            sizes="(max-width: 768px) 30vw, 33vw"
                        />
                    }
                </Link>
            </div>
            <div className="mx-auto max-w-screen-md ">
                <div className="flex justify-left">
                    <div className="flex gap-3">
                        <Link href={'#'}>
                            <Label content={'LIFESTYLE'}/>
                        </Link>
                    </div>
                </div>

                <h1 className="text-brand-primary mb-3 mt-2 text-left text-1xl font-semibold tracking-tight lg:text-2xl lg:leading-snug">
                    { title }
                </h1>

                <div className="mt-3 flex justify-left space-x-3 text-gray-500 ">
                    <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 flex-shrink-0">
                            {
                                <Link href={'#'}>
                                    <Image
                                        src={Picture}
                                        alt={'article'}
                                        className="rounded-full object-cover"
                                        fill
                                        sizes="40px"
                                    />
                                </Link>
                            }
                        </div>
                        <div>
                            <p className="text-gray-800 dark:text-gray-400">
                                <Link href={`/author/`}>
                                    {'post.author.name'}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ArticleTile;
