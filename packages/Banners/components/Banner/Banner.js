import React from 'react';
import { urlFor } from "@campphillip/common";
import BlockContent from "@sanity/block-content-to-react";
import * as styles from "./banner.module.css";

const color = (props) => {
    return <span style={{ color: props.mark.hex, "&:hover": { color: props.mark.hex } }}>{props.children}</span>
}

export const Banner = ({ image, text, url, loading }) => {

    if (loading)
        return (
            <>
                <div className={styles.banner} style={{ display: 'block' }}>
                    <Skeleton height={"100%"} width={"100%"} />
                </div>
            </>
        );

    return (
        <a href={url}
            style={{
                backgroundImage: `linear-gradient(
                                    rgba(0, 0, 0, 0.2),
                                    rgba(0, 0, 0, 0.2)
                                  ), url("${urlFor(image).width(1440).url()}")`
            }}
            className={styles.banner}>
            <BlockContent blocks={text} serializers={{ marks: { color } }} />
        </a>
    );
};
