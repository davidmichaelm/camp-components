import React from "react";
import {
    RateCardType,
    RateDescription as RateDescriptionType,
    RateTableType,
} from "../../types";
import { RateTable } from "../RateTable";
import * as styles from "./RateCard.module.css";
import { RateDescription } from "../RateDescription";

export interface RateCardProps {
    heading: string;
    subheading: string;
    rates: RateCardType[];
}

export const RateCard = (props: RateCardProps) => {
    const { heading, subheading, rates } = props;

    const groupedRates = rates.reduce<
        (RateTableType[] | RateDescriptionType)[]
    >((accumulator, currentValue) => {
        if (currentValue.type === "rateDescription") {
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
                <div className={styles["rate-card-subheading"]}>
                    {subheading}
                </div>
                {groupedRates.map((g) => {
                    if (Array.isArray(g)) {
                        return <RateTable rateTable={g} />;
                    } else {
                        return <RateDescription rateDescription={g} />;
                    }
                })}
            </div>
        </div>
    );
};
