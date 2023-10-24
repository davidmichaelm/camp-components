import { BannerModel, urlFor } from "@campphillip/api";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Banner.module.css";

const components: PortableTextComponents = {
    marks: {
        color: ({ value, children }) => {
            return (
                <span
                    style={{
                        color: value.hex,
                    }}
                >
                    {children}
                </span>
            );
        },
    },
};

export interface BannerProps extends BannerModel {
    loading: boolean;
}

export const Banner = ({ image, text, url, loading }: BannerProps) => {
    const onBannerClick = () => {
        if (!url) return;
        window.location.href = url;
    };

    if (loading)
        return (
            <div className={styles["banner"]} style={{ display: "block" }}>
                <Skeleton height={"100%"} width={"100%"} />
            </div>
        );

    return (
        <span
            onClick={onBannerClick}
            style={{
                cursor: url ? "pointer" : "",
                backgroundImage: `linear-gradient(
                                    rgba(0, 0, 0, 0.2),
                                    rgba(0, 0, 0, 0.2)
                                  ), url("${urlFor(image).width(1440).url()}")`,
            }}
            className={styles["banner"]}
        >
            <PortableText value={text} components={components} />
        </span>
    );
};
