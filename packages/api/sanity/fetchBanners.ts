import { PortableTextBlock } from "@portabletext/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "./sanityClient";

export interface BannerModel {
    _id: string;
    image: SanityImageSource;
    text: PortableTextBlock[];
    url: string;
}

export const fetchBanners = async (): Promise<BannerModel[]> => {
    const query = "*[_type == 'banner']";
    return await sanityClient.fetch(query);
};
