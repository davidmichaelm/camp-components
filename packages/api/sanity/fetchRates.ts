import { sanityClient } from "./sanityClient";

export interface ApiRateCategory {
  name: string;
  rates: (RateType | RateGroupType | RateDescriptionType)[];
}

export interface RateType {
  _type: "rate";
  name: string;
  detail?: string;
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

export const fetchRates = async () => {
  const groq = `*[_type == 'rateCategory']|order(orderRank)`;
  return sanityClient.fetch<ApiRateCategory[]>(groq);
};
