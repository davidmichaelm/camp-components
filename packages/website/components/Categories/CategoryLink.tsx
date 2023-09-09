import Link from "next/link";
import Image from "next/image";
import styles from "./CategoryLink.module.css";

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
        <Link href={url} className={styles["contentButton"]}>
            <Image
                src={imageUrl}
                alt={title}
                fill={true}
                className={styles["category-image"]}
            />
            <div className={styles["overlay"]}>
                <div className={styles["buttonTitle"]}>{title}</div>
                <div className={styles["buttonSubtitle"]}>{subtitle}</div>
            </div>
        </Link>
    );
};
