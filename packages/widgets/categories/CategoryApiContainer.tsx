import { fetchCategories } from "@campphillip/api";
import {
    CategoryContainer,
    CategoryLinkProps,
    mapCategoryApiToLinkProps,
} from "@campphillip/ui";
import { useEffect, useState } from "react";
import * as styles from "./CategoryApiContainer.module.css";

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
        <div className={styles["appContainer"]}>
            <CategoryContainer categories={categories} />
        </div>
    );
};
