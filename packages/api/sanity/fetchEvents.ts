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

export const fetchEvents = async (options?: {
    eventType?: 'event' | 'board-event';
    limit?: number;
    includePassedEvents?: boolean;
}): Promise<Event[]> => {
    const { eventType = 'event', limit, includePassedEvents = false } = options || {};

    const dateFilter = includePassedEvents ? '' : `&& endDate >= now()`;
    const limitClause = limit ? `[0...${limit}]` : '';

    const groq = `*[_type == '${eventType}' ${dateFilter}] | order(startDate asc) ${limitClause}
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
