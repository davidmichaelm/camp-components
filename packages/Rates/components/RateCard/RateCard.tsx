import React from "react";
import { Rate, RateGroup } from "../../types";
import { RateTable } from "../RateTable";
import styles from "./RateCard.module.css";

export interface RateCardProps {
    heading: string;
    subheading: string;
    rateTable: (Rate | RateGroup)[];
}

export const RateCard = (props: RateCardProps) => {
    const { heading, subheading, rateTable } = props;

    return (
        <div className={styles["rate-card"]}>
            <div className={styles["rate-card-heading"]}>
                <h3>{heading}</h3>
                <div className={styles["rate-card-subheading"]}>
                    {subheading}
                </div>
                <RateTable rateTable={rateTable} />
            </div>
        </div>
    );
};
