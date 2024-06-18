import { TagIcon, ThLargeIcon } from "@sanity/icons";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { ConfigContext } from "sanity";
import { ListItemBuilder, StructureBuilder } from "sanity/desk";
import banners from "./banners";
import { boardEvents, events } from "./events";
import { members } from "./members";

// Hide document types that we already have a structure definition for
const hiddenDocTypes = (listItem: ListItemBuilder) =>
    ![
        "event",
        "board-event",
        "banner",
        "rateCategory",
        "category",
        "city",
        "member",
    ].includes(listItem.getId() ?? "");

export default (S: StructureBuilder, context: ConfigContext) =>
    S.list()
        .title("Base")
        .items([
            events(S),
            boardEvents(S),
            banners(S),
            orderableDocumentListDeskItem({
                type: "rateCategory",
                title: "Rates",
                icon: TagIcon,
                S,
                context,
            }),
            orderableDocumentListDeskItem({
                type: "category",
                title: "Categories",
                icon: ThLargeIcon,
                S,
                context,
            }),
            members(S),
            ...S.documentTypeListItems().filter(hiddenDocTypes),
        ]);
