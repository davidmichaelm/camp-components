import React, { useEffect, useState } from 'react';
import { sanityClient } from "@campphillip/common";
import Banner from "../Banner";
import * as styles from "./banner-container.module.css";
import { LoadingBanner } from "../Banner/LoadingBanner.js";

const BannerContainer = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = "*[_type == 'banner' && active == true]";
        sanityClient.fetch(query)
            .then(banners => {
                setBanners(banners);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerApp}>
                {loading
                    ? <LoadingBanner />
                    : banners.map(banner => <Banner {...banner} />)
                }
            </div>
        </div>
    );
};

export default BannerContainer;
