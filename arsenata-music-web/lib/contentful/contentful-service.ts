import {createClient, EntrySkeletonType} from "contentful";
import { config } from "dotenv";

/*
 * We tell TypeScript that those environment variables are always defined.
 * If you want to learn more about this madness, read:
 * https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 */
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CONTENTFUL_SPACE_ID: string;
            CONTENTFUL_ACCESS_TOKEN: string;
        }
    }
}

config();

export default class ContentService {
    static get instance() {
        return new ContentService();
    }

    client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });



    async getEntryById<T extends EntrySkeletonType>(id: string){
        const item = await this.client.getEntry<T>(id);
        console.log(item);
        return (
            item
        );
    }

    async getEntriesByType<T extends EntrySkeletonType>(type: string) {
        return (
            await this.client.getEntries<T>({
                content_type: type,
            })
        ).items;
    }
}
