export interface Rate {
    type: "rate";
    name: string;
    value: string;
}

export interface RateGroup {
    type: "rateGroup";
    title: string;
    rates: Rate[];
}

export type RateTableType = (Rate | RateGroup)[];
