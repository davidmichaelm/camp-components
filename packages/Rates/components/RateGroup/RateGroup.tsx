import React from "react";
import { RateRow } from "../RateRow";
import { RateGroup as RateGroupType } from "../../types";
import * as styles from "./RateGroup.module.css";

export interface RateGroupProps {
    rateGroup: RateGroupType;
}

export const RateGroup = ({ rateGroup }: RateGroupProps) => {
    return (
        <>
            <RateRow name={rateGroup.title} className={styles["group-title"]} />
            {rateGroup.rates.map((r) => (
                <RateRow
                    name={r.name}
                    value={r.value}
                    className={styles["rate-group-child"]}
                    key={r.name}
                />
            ))}
        </>
    );
};
