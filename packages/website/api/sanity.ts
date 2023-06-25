import { sanityClient } from "@campphillip/common";
import {
    RateType,
    RateDescriptionType,
    RateGroupType,
} from "@/components/Rates";

interface ApiRateCategory {
    name: string;
    rates: (RateType | RateGroupType | RateDescriptionType)[];
}

export const fetchRates = async () => {
    const groq = `*[_type == 'rateCategory']|order(orderRank)`;
    return sanityClient.fetch<ApiRateCategory[]>(groq);
};
