import { sanityClient } from "@campphillip/common";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "@portabletext/types";

export interface Event {
    name?: string;
    image?: SanityImageSource;
    startDate?: string;
    endDate?: string;
    shortDescription?: PortableTextBlock;
    buttons?: EventButton[];
}

export interface EventButton {
    text: string;
    url: string;
    _key: string;
}

export const fetchEvents = async (): Promise<Event[]> => {
    const groq = `*[_type == 'event']  | order(startDate asc)
    {
        name,
        image,
        startDate,
        endDate,
        shortDescription,
        buttons
    }`;

    return await sanityClient.fetch(groq);
};
