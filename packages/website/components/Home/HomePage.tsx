import { ApiCategory, fetchCategories } from "@/api/sanity";
import { CategoryContainer } from "@/components/Categories";
import { urlFor } from "@campphillip/common";
import styles from "./HomePage.module.css";

export default async function HomePage() {
    const categories = await fetchCategories();

    return (
        <div className={styles["home-container"]}>
            <div className={styles["home-content"]}>
                <CategoryContainer categories={mapCategoryApi(categories)} />
            </div>
        </div>
    );
}

const mapCategoryApi = (apiCategories: ApiCategory[]) => {
    return apiCategories.map((apiCategory) => ({
        ...apiCategory,
        imageUrl: urlFor(apiCategory.image).width(800).url(),
    }));
};
