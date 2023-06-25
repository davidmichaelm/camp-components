import { RateDescriptionType as RateDescriptionType } from "../types";
import styles from "./RateDescription.module.css";
import { montserrat } from "@/app/fonts";

export interface RateDescriptionProps {
    rateDescription: RateDescriptionType;
}

export const RateDescription = ({ rateDescription }: RateDescriptionProps) => {
    const { title, text } = rateDescription || {};
    return (
        <div className={styles.description}>
            {title && <h4 className={montserrat.className}>{title}</h4>}
            {text && <span>{text}</span>}
        </div>
    );
};
