import { CategoryLink, CategoryLinkProps } from "./CategoryLink";
import styles from "./CategoryContainer.module.css";

export interface CategoryContainerProps {
    categories: CategoryLinkProps[];
}

export const CategoryContainer = ({ categories }: CategoryContainerProps) => {
    return (
        <div>
            <div className={styles["categoryContainerHeader"]}>
                <h1>
                    Explore <span>Camp Phillip</span>
                </h1>
            </div>
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
                            />
                        );
                    })}
            </div>
        </div>
    );
};
