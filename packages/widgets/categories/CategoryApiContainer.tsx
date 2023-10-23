import { fetchCategories } from "@campphillip/api";
import {
    CategoryContainer,
    CategoryLinkProps,
    mapCategoryApiToLinkProps,
} from "@campphillip/ui";
import { useEffect, useState } from "react";

export const CategoryApiContainer = () => {
    const [categories, setCategories] = useState<CategoryLinkProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategories()
            .then((categories) =>
                setCategories(mapCategoryApiToLinkProps(categories))
            )
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <CategoryContainer categories={categories} />
    );
};
