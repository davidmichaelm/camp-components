import styles from "./CategoryLink.module.css";

export interface CategoryLinkProps {
    title: string;
    subtitle: string;
    href: string;
    imageLink: string;
}

export const CategoryLink = ({ title, subtitle, href }: CategoryLinkProps) => {
    return (
        <a href={href} className={styles["contentButton"]}>
            <div className={styles["buttonTitle"]}>{title}</div>
            <div className={styles["buttonSubtitle"]}>{subtitle}</div>
        </a>
    );
};
