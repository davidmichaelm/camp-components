import { useEffect, useState } from "react";
import { BannerModel, fetchBanners } from "../api/fetchBanners";
import { BannerContainer } from "./BannerContainer";
import { Banner } from "./Banner";

export const BannerApiContainer = () => {
    const [banners, setBanners] = useState<BannerModel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBanners()
            .then((banners) => setBanners(banners))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <BannerContainer>
            {banners.map((banner) => (
                <Banner {...banner} loading={loading} key={banner._id} />
            ))}
        </BannerContainer>
    );
};