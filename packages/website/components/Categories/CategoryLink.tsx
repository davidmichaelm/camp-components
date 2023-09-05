import Link from "next/link";
import Image from "next/image";
import styles from "./CategoryLink.module.css";

export interface CategoryLinkProps {
    title: string;
    subtitle: string;
    href: string;
    imageLink: string;
}

export const CategoryLink = ({
    title,
    subtitle,
    href,
    imageLink,
}: CategoryLinkProps) => {
    return (
        <Link href={href} className={styles["contentButton"]}>
            <Image
                src={imageLink}
                alt={title}
                fill={true}
                className={styles["category-image"]}
            />
            <div className={styles["buttonTitle"]}>{title}</div>
            <div className={styles["buttonSubtitle"]}>{subtitle}</div>
        </Link>
    );
};
