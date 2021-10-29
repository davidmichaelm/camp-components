import React, {useEffect, useState} from 'react';
import {sanityClient} from "@campphillip/common/sanity-client";
import Banner from "../Banner";
import * as styles from "./banner-container.module.css";

const BannerContainer = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const query = "*[_type == 'banner' && active == true]";
        sanityClient.fetch(query)
            .then(banners => {
                setBanners(banners);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerApp}>
                {banners.map(banner => <Banner {...banner} />)}
            </div>
        </div>
    );
};

export default BannerContainer;
