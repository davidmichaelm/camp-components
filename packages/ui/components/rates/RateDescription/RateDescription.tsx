import { RateDescriptionType } from "@campphillip/api";
import styles from "./RateDescription.module.css";

export interface RateDescriptionProps {
    rateDescription: RateDescriptionType;
}

export const RateDescription = ({ rateDescription }: RateDescriptionProps) => {
    const { title, text } = rateDescription || {};
    return (
        <div className={styles.description}>
            {title && <h4>{title}</h4>}
            {text && <span>{text}</span>}
        </div>
    );
};
