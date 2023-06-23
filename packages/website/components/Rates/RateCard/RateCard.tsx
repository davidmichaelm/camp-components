import {
    RateCardType,
    RateDescriptionType as RateDescriptionType,
    RateTableType,
} from "../types";
import { RateTable } from "../RateTable";
import styles from "./RateCard.module.css";
import { RateDescription } from "../RateDescription";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export interface RateCardProps {
    heading: string;
    rates: RateCardType[];
}

export const RateCard = (props: RateCardProps) => {
    const { heading, rates } = props;

    const groupedRates = rates.reduce<
        (RateTableType[] | RateDescriptionType)[]
    >((accumulator, currentValue) => {
        if (currentValue._type === "rateDescription") {
            return [...accumulator, currentValue];
        } else {
            const lastGroup = accumulator[accumulator.length - 1];
            if (Array.isArray(lastGroup)) {
                lastGroup.push(currentValue);
                return accumulator;
            } else {
                return [...accumulator, [currentValue]];
            }
        }
    }, []);

    return (
        <div className={styles["rate-card"]}>
            <div className={styles["rate-card-heading"]}>
                <h3 className={montserrat.className}>{heading}</h3>
            </div>
            {groupedRates.map((g) => {
                if (Array.isArray(g)) {
                    return <RateTable rateTable={g} />;
                } else {
                    return <RateDescription rateDescription={g} />;
                }
            })}
        </div>
    );
};
