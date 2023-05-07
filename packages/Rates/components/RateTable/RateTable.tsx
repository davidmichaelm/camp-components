import React from "react";
import { Rate, RateGroup, RateTableType } from "../../types";
import styles from "./RateTable.module.css";

export interface RateTableProps {
    rateTable: RateTableType;
}

export const RateTable = (props: RateTableProps) => {
    const { rateTable } = props;
    return (
        <table className={styles["rate-table"]}>
            <tbody>
                {rateTable.map((rate: Rate | RateGroup) => {
                    let rateEl = <></>;
                    let key;

                    if (rate.type === "rate") {
                        key = rate.name;
                        rateEl = (
                            <RateRow name={rate.name} value={rate.value} />
                        );
                    } else if (rate.type === "rateGroup") {
                        key = rate.title;
                        rateEl = (
                            <>
                                <td>{rate.title}</td>
                                {rate.rates.map((r) => (
                                    <RateRow name={r.name} value={r.value} />
                                ))}
                            </>
                        );
                    }

                    return <tr key={key}>{rateEl}</tr>;
                })}
            </tbody>
        </table>
    );
};

export interface RateRowProps {
    name: string;
    value: string;
}

const RateRow = (props: RateRowProps) => {
    const { name, value } = props;
    return (
        <>
            <td>{name}</td>
            <td>{value}</td>
        </>
    );
};
