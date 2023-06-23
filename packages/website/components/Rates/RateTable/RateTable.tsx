import { RateTableType } from "../types";
import styles from "./RateTable.module.css";
import { Rate } from "../Rate";
import { RateGroup } from "../RateGroup";

export interface RateTableProps {
    rateTable: RateTableType[];
}

export const RateTable = (props: RateTableProps) => {
    const { rateTable } = props;

    const rows = rateTable.map((rate: RateTableType) => {
        if (rate._type === "rate") {
            return (
                <Rate
                    rate={rate}
                    className={
                        rateTable.some((r) => r._type === "rateGroup")
                            ? styles["group-title"]
                            : ""
                    }
                    key={rate.name}
                />
            );
        } else if (rate._type === "rateGroup") {
            return <RateGroup rateGroup={rate} key={rate.name} />;
        }
    });

    return (
        <table className={styles["rate-table"]}>
            <tbody>{rows}</tbody>
        </table>
    );
};