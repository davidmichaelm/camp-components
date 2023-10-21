import * as styles from "./CategoryLink.module.css";

export interface CategoryLinkProps {
    title: string;
    subtitle: string;
    url: string;
    imageUrl: string;
}

export const CategoryLink = ({
    title,
    subtitle,
    url,
    imageUrl,
}: CategoryLinkProps) => {
    return (
        <a href={url} className={styles["contentButton"]}>
            <img
                src={imageUrl}
                alt={title}
                className={styles["category-image"]}
            />
            <div className={styles["overlay"]}>
                <div className={styles["buttonTitle"]}>{title}</div>
                <div className={styles["buttonSubtitle"]}>{subtitle}</div>
            </div>
        </a>
    );
};
