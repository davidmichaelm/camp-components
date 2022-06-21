import styles from "./banner.module.css";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export const LoadingBanner = () => {
    return (
        <div className={styles.banner} style={{ display: 'block' }}><Skeleton height={"100%"} width={"100%"} /></div>
    )
};
