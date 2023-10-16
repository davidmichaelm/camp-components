import { PropsWithChildren } from "react";
import styles from "./BannerContainer.module.css";

export const BannerContainer = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles["bannerContainer"]}>
            <div className={styles["bannerApp"]}>{children}</div>
        </div>
    );
};
