import { RateGroup } from "../RateGroup";
import { RateRow } from "../RateRow";
import { RateTableType } from "../types";
import styles from "./RateTable.module.css";

export interface RateTableProps {
    rateTable: RateTableType[];
}

export const RateTable = (props: RateTableProps) => {
    const { rateTable } = props;

    const hasGroup = rateTable.some((r) => r._type === "rateGroup");
    const hasDetail = rateTable.some((r) => {
        return r._type === "rate" && r.detail;
    });

    const rows = rateTable.map((rate: RateTableType) => {
        if (rate._type === "rate") {
            if (hasDetail)
                rate = {
                    detail: rate.detail ?? " ",
                    ...rate,
                };

            return (
                <RateRow
                    name={rate.name}
                    detail={rate.detail}
                    value={rate.cost}
                    className={hasGroup ? styles["group-title"] : ""}
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
