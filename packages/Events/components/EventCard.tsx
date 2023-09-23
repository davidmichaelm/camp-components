// @ts-ignore
import { urlFor } from "@campphillip/common";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { format, isSameDay, isSameMonth } from "date-fns";
import { CSSProperties } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./EventCard.module.css";

export interface EventCardProps {
    name?: string;
    image?: SanityImageSource;
    startDate?: string;
    endDate?: string;
    shortDescription?: PortableTextBlock;
    buttons?: EventButton[];
    loading: boolean;
    containerStyle?: CSSProperties;
}

export interface EventButton {
    text: string;
    url: string;
    _key: string;
}

export const EventCard = ({
    name,
    image,
    startDate,
    endDate,
    shortDescription,
    buttons,
    loading,
    containerStyle,
}: EventCardProps) => {
    const dates = getDates(startDate, endDate);

    return (
        <SkeletonTheme baseColor={"#dcdcdc"}>
            <div className={styles["eventCard"]} style={{ ...containerStyle }}>
                {image ? (
                    <img
                        src={urlFor(image).height(400).url()}
                        className={styles["image"]}
                        crossOrigin={"anonymous"}
                        alt={""}
                    />
                ) : (
                    <div className={styles.image}>
                        <Skeleton height={400} />
                    </div>
                )}
                <div className={styles.eventCardBody}>
                    <div>
                        <h3 className={styles.eventCardTitle}>
                            {name || <Skeleton />}
                        </h3>
                        <div className={styles.eventCardDate}>
                            {dates || <Skeleton />}
                        </div>
                    </div>

                    <div className={styles.eventCardDescription}>
                        {shortDescription ? (
                            <PortableText value={shortDescription} />
                        ) : (
                            <Skeleton count={7} />
                        )}
                    </div>

                    <div className={styles.eventButtons}>
                        {buttons
                            ? buttons.map(({ url, text, _key }) => {
                                  return (
                                      <a
                                          href={url}
                                          key={_key}
                                          className={styles.eventButton}
                                      >
                                          <div>{text}</div>
                                      </a>
                                  );
                              })
                            : loading && (
                                  <Skeleton className={styles.eventButton} />
                              )}
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
};

function getDates(startDateIn?: string, endDateIn?: string) {
    if (!startDateIn || !endDateIn) return null;

    const startDate = new Date(startDateIn);
    const endDate = new Date(endDateIn);

    if (isSameDay(startDate, endDate)) {
        return format(startDate, "MMMM d");
    } else {
        if (isSameMonth(startDate, endDate)) {
            return format(startDate, "MMMM d") + " – " + format(endDate, "d");
        } else {
            return (
                format(startDate, "MMMM d") + " – " + format(endDate, "MMMM d")
            );
        }
    }
}
