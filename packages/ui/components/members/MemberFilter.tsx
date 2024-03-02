import { ChangeEventHandler } from "react";
import styles from "./Members.module.css";

export interface MemberFilterProps {
  onChange: (filter: string) => void;
}

export const MemberFilter = (props: MemberFilterProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    props.onChange(event.target?.value?.toUpperCase());
  };

  return (
    <input
      className={styles["member-filter"]}
      type="text"
      onChange={handleChange}
      placeholder="Filter by city or church name"
    />
  );
};
