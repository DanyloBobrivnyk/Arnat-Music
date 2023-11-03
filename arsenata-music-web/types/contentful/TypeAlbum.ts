import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSongSkeleton } from "./TypeSong";

export interface TypeAlbumFields {
    title: EntryFieldTypes.Symbol;
    coverImage: EntryFieldTypes.AssetLink;
    slug?: EntryFieldTypes.Symbol;
    excerpt: EntryFieldTypes.Text;
    songs?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSongSkeleton>>;
}

export type TypeAlbumSkeleton = EntrySkeletonType<TypeAlbumFields, "album">;
export type TypeAlbum<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAlbumSkeleton, Modifiers, Locales>;
