import { PortableTextBlock } from "@portabletext/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "./sanityClient";

export interface Event {
    name?: string;
    image?: SanityImageSource;
    imageType?: "default" | "square";
    startDate?: string;
    endDate?: string;
    shortDescription?: PortableTextBlock[];
    buttons?: EventButton[];
    isSummerCampEvent?: boolean;
}

export interface EventButton {
    text: string;
    url: string;
    _key: string;
    _type?: string;
}

export const fetchEvents = async (): Promise<Event[]> => {
    const groq = `*[_type == 'event']  | order(startDate asc)
    {
        name,
        image,
        imageType,
        startDate,
        endDate,
        shortDescription,
        buttons,
        isSummerCampEvent
    }`;

    return await sanityClient.fetch(groq);
};

export const fetchBoardEvents = async (): Promise<Event[]> => {
    const groq = `*[_type == 'board-event']  | order(startDate asc)
    {
        name,
        image,
        imageType,
        startDate,
        endDate,
        shortDescription,
        buttons,
        isSummerCampEvent
    }`;

    return await sanityClient.fetch(groq);
};
