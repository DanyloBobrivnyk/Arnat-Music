import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHeroBannerFields {
    title: EntryFieldTypes.Symbol;
}

export type TypeHeroBannerSkeleton = EntrySkeletonType<TypeHeroBannerFields, "heroBanner">;
export type TypeHeroBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeroBannerSkeleton, Modifiers, Locales>;
