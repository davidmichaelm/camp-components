import { Member as MemberType } from "@campphillip/api";
import { Fragment } from "react";
import { MemberFilter } from "./MemberFilter";
import { useMemberFilter } from "./hooks/useMemberFilter";
import styles from "./Members.module.css";

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
            <div className={styles["member-letter-group"]} key={letter}>
              <div className={styles["letter-header"]}>{letter}</div>
              {cities.map((city) => {
                const cityChurches = membersByCity[city];

                return (
                  <div key={city}>
                    <strong>{city}</strong>
                    {cityChurches.map((churchName) => {
                      return <div key={churchName}>{churchName}</div>;
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
