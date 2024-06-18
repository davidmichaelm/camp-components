import { CalendarIcon } from "@sanity/icons";
import { StructureBuilder } from "sanity/desk";

// Custom list view to:
// - Group by city
// - Provide an "Add New" button that prepopulates the city
export const members = (S: StructureBuilder) =>
    S.listItem()
        .title("Congregational Members")
        .schemaType("member")
        .icon(CalendarIcon)
        .child(
            S.documentTypeList("city")
                .id("member_city")
                .title("Members by City")
                .child((cityId) =>
                    S.documentList()
                        .title("Congregational Members")
                        .params({ cityId })
                        .filter('_type == "member" && $cityId == city._ref')
                        .params({ cityId })
                        .initialValueTemplates([
                            S.initialValueTemplateItem("member-by-city", {
                                cityId,
                            }),
                        ])
                )
        );
