import React from "react";
import { RateTableType } from "../../types";
import { RateRow } from "../RateRow";
import styles from "./RateTable.module.css";
import { Rate } from "../Rate";
import { RateGroup } from "../RateGroup";

export interface RateTableProps {
    rateTable: RateTableType[];
}

export const RateTable = (props: RateTableProps) => {
    const { rateTable } = props;

    const rows = rateTable.map((rate: RateTableType) => {
        if (rate.type === "rate") {
            return (
                <Rate
                    rate={rate}
                    className={
                        rateTable.some((r) => r.type === "rateGroup")
                            ? styles["group-title"]
                            : null
                    }
                    key={rate.name}
                />
            );
        } else if (rate.type === "rateGroup") {
            return <RateGroup rateGroup={rate} key={rate.title} />;
        }
    });

    return (
        <table className={styles["rate-table"]}>
            <tbody>{rows}</tbody>
        </table>
    );
};
