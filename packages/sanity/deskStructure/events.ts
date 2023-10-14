import { EventCard } from "@campphillip/ui";
import "@campphillip/ui/dist/index.css?raw";
import { CalendarIcon, EditIcon, EyeOpenIcon } from "@sanity/icons";
import { StructureBuilder } from "sanity/desk";
import ComponentPreview from "../components/previews/component/ComponentPreview";

export default (S: StructureBuilder) =>
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
