import { sanityClient } from "./sanityClient";

export interface Member {
  city: string;
  churchName: string;
}

export const fetchMembers = async () => {
  const groq = `*[_type == 'rateCategory']|order(orderRank)`;
  return sanityClient.fetch<Member[]>(groq);
};
