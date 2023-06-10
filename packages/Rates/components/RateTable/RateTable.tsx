import React from "react";
import { Rate, RateGroup, RateTableType } from "../../types";
import styles from "./RateTable.module.css";

export interface RateTableProps {
    rateTable: RateTableType;
}

export const RateTable = (props: RateTableProps) => {
    const { rateTable } = props;

    const rows = rateTable.map((rate: Rate | RateGroup) => {
        if (rate.type === "rate") {
            return (
                <RateRow
                    name={rate.name}
                    value={rate.value}
                    firstCellClassName={
                        rateTable.some((r) => r.type === "rateGroup")
                            ? styles["group-title"]
                            : null
                    }
                    key={rate.name}
                />
            );
        } else if (rate.type === "rateGroup") {
            // key = rate.title;
            return (
                <React.Fragment key={rate.title}>
                    <RateRow
                        name={rate.title}
                        firstCellClassName={styles["group-title"]}
                    />
                    {rate.rates.map((r) => (
                        <RateRow
                            name={r.name}
                            value={r.value}
                            firstCellClassName={styles["rate-group-child"]}
                            key={r.name}
                        />
                    ))}
                </React.Fragment>
            );
        }
    });

    return (
        <table className={styles["rate-table"]}>
            <tbody>{rows}</tbody>
        </table>
    );
};

export interface RateRowProps {
    name: string;
    value?: string;
    firstCellClassName?: string;
}

const RateRow = ({ name, value, firstCellClassName }: RateRowProps) => {
    return (
        <tr>
            <td className={firstCellClassName}>{name}</td>
            <td>{value}</td>
        </tr>
    );
};
