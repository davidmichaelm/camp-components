import { RateRow } from "../RateRow";
import { RateGroupType as RateGroupType } from "../types";
import styles from "./RateGroup.module.css";

export interface RateGroupProps {
    rateGroup: RateGroupType;
}

export const RateGroup = ({ rateGroup }: RateGroupProps) => {
    console.log(rateGroup);
    return (
        <>
            <RateRow name={rateGroup.name} className={styles["group-title"]} />
            {rateGroup.childRates.map((r) => (
                <RateRow
                    name={r.name}
                    value={r.cost}
                    className={styles["rate-group-child"]}
                    key={r.name}
                />
            ))}
        </>
    );
};
