import React from "react";
import * as styles from "./eventCard.module.css";
import BlockContent from "@sanity/block-content-to-react";
import {isSameDay, isSameMonth, format} from "date-fns";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import {urlFor} from "@campphillip/common";

const EventCard = ({name, image, startDate, endDate, shortDescription, buttons, loading, containerStyle}) => {
    const dates = getDates(startDate, endDate);

    return (
        <SkeletonTheme color={"#dcdcdc"}>
            <div className={styles.eventCard} style={{...containerStyle}}>
                {image ?
                    <img src={urlFor(image).height(230).url()} className={styles.image} crossOrigin={"anonymous"} alt={""}/>
                    : <Skeleton height={230}/>
                }

                <div className={styles.eventCardHeader}>
                    <h3 className={styles.eventCardTitle}>{name || <Skeleton/>}</h3>
                    <div className={styles.eventCardDate}>{dates || <Skeleton/>}</div>
                </div>

                <div className={styles.eventCardBody}>
                    {shortDescription ?
                        <BlockContent blocks={shortDescription}/>
                        : <Skeleton count={7}/>
                    }
                </div>

                <div className={styles.eventButtons}>
                    {buttons ?
                        (buttons.map(({url, text}, i) => {
                            return (
                                <a href={url} key={i} className={styles.eventButton}>
                                    <div>{text}</div>
                                </a>
                            )
                        }))
                        : loading ?
                            <Skeleton className={styles.eventButton}/>
                            : <></>
                    }
                </div>
            </div>
        </SkeletonTheme>
    );
};

function getDates(startDate, endDate) {
    if (!startDate || !endDate) return null;

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    if (isSameDay(startDate, endDate)) {
        return format(startDate, "MMMM d");
    } else {
        if (isSameMonth(startDate, endDate)) {
            return format(startDate, "MMMM d") + " – " + format(endDate, "d");
        } else {
            return format(startDate, "MMMM d") + " – " + format(endDate, "MMMM d");
        }
    }
}

export default EventCard;
