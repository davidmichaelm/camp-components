import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./CategoryLink.module.css";

export interface CategoryLinkProps {
    title: string;
    subtitle: string;
    url: string;
    imageUrl: string;
    loading?: boolean;
}

export const CategoryLink = ({
    title,
    subtitle,
    url,
    imageUrl,
    loading,
}: CategoryLinkProps) => {
    if (loading)
        return (
            <div
                className={styles["contentButton"]}
                style={{ display: "block" }}
            >
                <Skeleton
                    height={"100%"}
                    width={"100%"}
                    style={{ lineHeight: "normal" }}
                />
            </div>
        );

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
