import { RateCard } from "./RateCard";
import { fetchRates } from "@/api/sanity";

export const RatePage = async () => {
    const rateCategories = await fetchRates();

    return rateCategories.map((category) => {
        return <RateCard heading={category.name} rates={category.rates} />;
    });
};
