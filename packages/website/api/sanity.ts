import { sanityClient } from "@campphillip/api";
import {
    RateType,
    RateDescriptionType,
    RateGroupType,
} from "@/components/Rates";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface ApiRateCategory {
    name: string;
    rates: (RateType | RateGroupType | RateDescriptionType)[];
}

export interface ApiCategory {
    title: string;
    subtitle: string;
    image: SanityImageSource;
    url: string;
}

export const fetchRates = async () => {
    const groq = `*[_type == 'rateCategory']|order(orderRank)`;
    return sanityClient.fetch<ApiRateCategory[]>(groq);
};

export const fetchCategories = async () => {
    const groq = `*[_type == 'category']|order(orderRank)`;
    return sanityClient.fetch<ApiCategory[]>(groq);
};
