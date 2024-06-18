import { sanityClient } from "./sanityClient";

export interface Member {
    city: string;
    churchName: string;
}

interface MemberApiResponse {
    city: {
        cityName: string;
    };
    churchName: string;
}

function flattenMembers(apiResponse: MemberApiResponse[]) {
    return apiResponse.map((r) => ({
        city: r.city.cityName,
        churchName: r.churchName,
    }));
}

export const fetchMembers = async () => {
    const groq = `*[_type == 'member']
    {
        city->,
        churchName
    }`;
    const response = await sanityClient.fetch<MemberApiResponse[]>(groq);
    return flattenMembers(response);
};
