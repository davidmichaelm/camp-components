import React, {useEffect, useState} from 'react';
import {sanityClient} from "@campphillip/common/sanity-client";
import Banner from "../Banner";

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
        <div>
            {banners.map(banner => <Banner {...banner} />)}
        </div>
    );
};

export default BannerContainer;
