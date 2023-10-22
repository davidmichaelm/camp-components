import { RateDescription } from "../RateDescription";
import { RateTable } from "../RateTable";
import styles from "./RateCard.module.css";
import {
    RateCardType,
    RateDescriptionType,
    RateTableType,
} from "@campphillip/api";

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
                <h3>{heading}</h3>
            </div>
            {groupedRates.map((g, i) => {
                if (Array.isArray(g)) {
                    return <RateTable rateTable={g} key={i} />;
                } else {
                    return <RateDescription rateDescription={g} key={i} />;
                }
            })}
        </div>
    );
};
