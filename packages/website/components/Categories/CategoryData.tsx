import { fetchCategories } from "@/api/sanity";
import { CategoryContainer } from "./CategoryContainer";

export const CategoryData = async () => {
    const categories = await fetchCategories();

    return <CategoryContainer categories={categories} />;
};
