import React, {HTMLProps} from "react";
import {twMerge} from "tailwind-merge";
import AlbumTile from "@/components/features/album/AlbumTile";

interface ArticleTileGridProps extends HTMLProps<HTMLDivElement> {
    articles?: Array<string | null>;
}

const AlbumTileGrid = ({articles, className, ...props} : ArticleTileGridProps) => {
    return articles && articles.length > 0 ? (
        <div
            className={twMerge(
                'grid cursor-pointer gap-6 md:grid-cols-2 md:gap-10 xl:grid-cols-3',
                className,
            )}
            {...props}
        >
            {articles.map((article, index) => {
                return article ? <AlbumTile title={article} /> : null;
            })}
        </div>
    ) : null;
}

export default AlbumTileGrid;
