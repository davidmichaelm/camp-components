import { ApiCategory, fetchCategories } from "@/api/sanity";
import { CategoryContainer } from "@/components/Categories";
import { BannerContainer, fetchBanners } from "@campphillip/banners";
import { urlFor } from "@campphillip/common";
import { EventContainer, fetchEvents } from "@campphillip/events";
import styles from "./HomePage.module.css";
import { Banner } from "./ClientBanner";

export default async function HomePage() {
    const banners = await fetchBanners();
    const events = await fetchEvents();
    const categories = await fetchCategories();

    return (
        <div className={styles["home-container"]}>
            <div className={styles["home-content"]}>
                <BannerContainer>
                    {banners.map((banner) => (
                        <Banner {...banner} loading={false} key={banner._id} />
                    ))}
                </BannerContainer>
                <EventContainer events={events} loading={false} />
                <CategoryContainer categories={mapCategoryApi(categories)} />
            </div>
        </div>
    );
}

const mapCategoryApi = (apiCategories: ApiCategory[]) => {
    return apiCategories.map((apiCategory) => ({
        ...apiCategory,
        imageUrl: urlFor(apiCategory.image).width(800).url(),
    }));
};
