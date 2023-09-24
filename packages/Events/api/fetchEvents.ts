import { sanityClient } from "@campphillip/common";
import { EventCardProps } from "../components";

export const fetchEvents = async (): Promise<EventCardProps[]> => {
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
