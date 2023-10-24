import { CategoryLink, CategoryLinkProps } from "./CategoryLink";
import styles from "./CategoryContainer.module.css";

export interface CategoryContainerProps {
    categories: CategoryLinkProps[];
    loading?: boolean;
}

export const CategoryContainer = ({
    categories,
    loading,
}: CategoryContainerProps) => {
    return (
        <div>
            <div className={styles["categoryContainer"]}>
                {categories.length > 0 &&
                    categories.map((category) => {
                        return (
                            <CategoryLink
                                title={category.title}
                                subtitle={category.subtitle}
                                url={category.url}
                                imageUrl={category.imageUrl}
                                key={category.title}
                                loading={loading}
                            />
                        );
                    })}
            </div>
        </div>
    );
};
