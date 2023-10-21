import { ApiRateCategory, fetchRates } from "@campphillip/api";
import { RateCard } from "@campphillip/ui";
import { useEffect, useState } from "react";

export const RatesApiContainer = () => {
    const [rates, setRates] = useState<ApiRateCategory[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRates()
            .then((rates) => setRates(rates))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return rates.map((category) => {
        return (
            <RateCard
                heading={category.name}
                rates={category.rates}
                key={category.name}
            />
        );
    });
};
