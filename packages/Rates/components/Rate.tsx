import React from "react";
import { Rate as RateType } from "../types";
import { RateRow } from "./RateRow";

export interface RateProps {
    rate: RateType;
    className: string;
}

export const Rate = ({ rate, className }: RateProps) => {
    return (
        <RateRow name={rate.name} value={rate.value} className={className} />
    );
};
