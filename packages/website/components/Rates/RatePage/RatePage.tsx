import { RateCard } from "../RateCard";
import { fetchRates } from "@/api/sanity";
import styles from "./RatePage.module.css";

export const RatePage = async () => {
    const rateCategories = await fetchRates();

    return (
        <div className={styles["rates-container"]}>
            {rateCategories.map((category) => {
                return (
                    <RateCard
                        heading={category.name}
                        rates={category.rates}
                        key={category.name}
                    />
                );
            })}
        </div>
    );
};
