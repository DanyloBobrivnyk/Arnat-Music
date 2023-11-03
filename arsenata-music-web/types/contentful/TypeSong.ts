import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSongFields {
    name: EntryFieldTypes.Symbol;
    duration?: EntryFieldTypes.Object;
}

export type TypeSongSkeleton = EntrySkeletonType<TypeSongFields, "song">;
export type TypeSong<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSongSkeleton, Modifiers, Locales>;
