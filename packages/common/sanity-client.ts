import sClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanityClient = sClient({
    projectId: "m5ik5me8",
    dataset: "production",
    apiVersion: "2021-10-26", // use current UTC date - see "specifying API version"!
    token: "", // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
};
