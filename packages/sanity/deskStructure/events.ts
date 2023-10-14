import { EventCard } from "@campphillip/ui";
import "@campphillip/ui/dist/index.css?raw";
import {
    CalendarIcon,
    EditIcon,
    EyeOpenIcon,
    PresentationIcon,
} from "@sanity/icons";
import { StructureBuilder } from "sanity/desk";
import ComponentPreview from "../components/previews/component/ComponentPreview";

export const events = (S: StructureBuilder) =>
    S.listItem()
        .title("Events")
        .schemaType("event")
        .icon(CalendarIcon)
        .child(
            S.documentTypeList("event")
                .title("Events")
                .child((documentId) =>
                    S.document()
                        .documentId(documentId)
                        .schemaType("event")
                        .views([
                            S.view.form().icon(EditIcon),
                            S.view
                                .component(ComponentPreview)
                                .options({ Component: EventCard })
                                .icon(EyeOpenIcon)
                                .title("Preview"),
                        ])
                )
        );

export const boardEvents = (S: StructureBuilder) =>
    S.listItem()
        .title("Board Events")
        .schemaType("board-event")
        .icon(PresentationIcon)
        .child(
            S.documentTypeList("board-event")
                .title("Board Events")
                .child((documentId) =>
                    S.document()
                        .documentId(documentId)
                        .schemaType("board-event")
                        .views([
                            S.view.form().icon(EditIcon),
                            S.view
                                .component(ComponentPreview)
                                .options({ Component: EventCard })
                                .icon(EyeOpenIcon)
                                .title("Preview"),
                        ])
                )
        );
