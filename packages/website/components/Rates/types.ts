export interface RateType {
    _type: "rate";
    name: string;
    cost: string;
}

export interface RateGroupType {
    _type: "rateGroup";
    name: string;
    childRates: RateType[];
}

export interface RateDescriptionType {
    _type: "rateDescription";
    title?: string;
    text?: string;
}

export type RateCardType = RateType | RateGroupType | RateDescriptionType;

export type RateTableType = Exclude<RateCardType, "RateDescription">;
