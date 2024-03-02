import { Member } from "@campphillip/api";
import { useState } from "react";

type MembersGroupedByCity = Record<string, Array<string>>;
type CitiesGroupedByFirstLetter = Record<string, Array<string>>;

export const useMemberFilter = (members: Member[]) => {
  const [filter, setFilter] = useState("");

  const membersByCity = members.sort().reduce((cityGroups, member) => {
    const filterMatch =
      member.churchName.toUpperCase().includes(filter) ||
      member.city.toUpperCase().includes(filter);

    if (!filterMatch) return cityGroups;

    if (!cityGroups[member.city]) {
      cityGroups[member.city] = [];
    }

    cityGroups[member.city].push(member.churchName);

    return cityGroups;
  }, {} as MembersGroupedByCity);

  const citiesByFirstLetter = Object.keys(membersByCity)
    .sort()
    .reduce((letters, city) => {
      const letter = city.slice(0, 1).toUpperCase();

      if (!letters[letter]) {
        letters[letter] = [];
      }

      letters[letter].push(city);

      return letters;
    }, {} as CitiesGroupedByFirstLetter);

  return { membersByCity, citiesByFirstLetter, setFilter };
};
