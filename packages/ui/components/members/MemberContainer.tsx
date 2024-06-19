import { Member as MemberType } from "@campphillip/api";
import { MemberFilter } from "./MemberFilter";
import { useMemberFilter } from "./hooks/useMemberFilter";
import styles from "./Members.module.css";
import { Fragment } from "react";

export interface MemberContainerProps {
    members: MemberType[];
}

export const MemberContainer = ({ members }: MemberContainerProps) => {
    const { membersByCity, citiesByFirstLetter, setFilter } =
        useMemberFilter(members);

    return (
        <div className={styles["member-container"]}>
            <h2>Active Corporation Congregations</h2>
            <MemberFilter onChange={setFilter} />
            <div className={styles["member-list"]}>
                {Object.keys(citiesByFirstLetter).map((letter) => {
                    const cities = citiesByFirstLetter[letter];

                    return (
                        <Fragment key={letter}>
                            <div className={styles["letter-header"]}>
                                {letter}
                            </div>
                            {cities.map((city) => {
                                const cityChurches = membersByCity[city];

                                return (
                                    <Fragment key={city}>
                                        <strong>{city}</strong>
                                        {cityChurches.map((churchName) => {
                                            return (
                                                <div key={churchName}>
                                                    {churchName}
                                                </div>
                                            );
                                        })}
                                    </Fragment>
                                );
                            })}
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};
