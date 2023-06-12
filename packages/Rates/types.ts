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

export interface RateDescription {
    type: "rateDescription";
    title?: string;
    text: string;
}

export type RateTableType = Rate | RateGroup | RateDescription;
