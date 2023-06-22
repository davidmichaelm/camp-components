import { sanityClient } from "@campphillip/common";
import {
    RateType,
    RateDescriptionType,
    RateGroupType,
} from "@/components/rates";

interface ApiRateCategory {
    name: string;
    rates: (RateType | RateGroupType | RateDescriptionType)[];
}

export const fetchRates = async () => {
    const groq = `*[_type == 'rateCategory']`;
    return sanityClient.fetch<ApiRateCategory[]>(groq);
};
