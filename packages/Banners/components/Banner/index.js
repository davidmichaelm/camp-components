import React from 'react';
import {urlFor} from "@campphillip/common";
import BlockContent from "@sanity/block-content-to-react";
import * as styles from "./banner.module.css";

const color = (props) => {
    return <span style={{color: props.mark.hex}}>{props.children}</span>
}

const Banner = ({image, text}) => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(
                                rgba(0, 0, 0, 0.2),
                                rgba(0, 0, 0, 0.2)
                              ), url("${urlFor(image).height(375).url()}")`
        }}
             className={styles.banner}>
            <BlockContent blocks={text} serializers={{marks: {color}}}/>
        </div>
    );
};

export default Banner;
