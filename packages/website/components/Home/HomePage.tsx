import { ApiCategory, fetchCategories } from "@/api/sanity";
import { CategoryContainer } from "@/components/Categories";
import { urlFor } from "@campphillip/common";
import { BannerContainer, EventContainer, fetchBanners, fetchEvents } from "@campphillip/ui";
import { Banner } from "./ClientBanner";
import styles from "./HomePage.module.css";

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
