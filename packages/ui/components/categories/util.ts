import { ApiCategory, urlFor } from "@campphillip/api";
import { CategoryLinkProps } from "./CategoryLink";

export const mapCategoryApiToLinkProps = (
    apiCategories: ApiCategory[]
): CategoryLinkProps[] => {
    return apiCategories.map((apiCategory) => ({
        ...apiCategory,
        imageUrl: urlFor(apiCategory.image).width(800).url(),
    }));
};
