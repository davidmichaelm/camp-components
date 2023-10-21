import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "./sanityClient";

export interface ApiCategory {
    title: string;
    subtitle: string;
    image: SanityImageSource;
    url: string;
}

export const fetchCategories = async () => {
    const groq = `*[_type == 'category']|order(orderRank)`;
    return sanityClient.fetch<ApiCategory[]>(groq);
};
