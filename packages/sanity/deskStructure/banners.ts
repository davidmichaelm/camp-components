import { Banner } from "@campphillip/ui";
import "@campphillip/ui/dist/index.css?raw";
import { EditIcon, EyeOpenIcon, ImageIcon } from "@sanity/icons";
import { StructureBuilder } from "sanity/desk";
import ComponentPreview from "../components/previews/component/ComponentPreview";

export default (S: StructureBuilder) =>
    S.listItem()
        .title("Banners")
        .schemaType("banner")
        .icon(ImageIcon)
        .child(
            S.documentTypeList("banner")
                .title("Banner")
                .child((documentId) =>
                    S.document()
                        .documentId(documentId)
                        .schemaType("banner")
                        .views([
                            S.view.form().icon(EditIcon),
                            S.view
                                .component(ComponentPreview)
                                .options({ Component: Banner })
                                .icon(EyeOpenIcon)
                                .title("Preview"),
                        ])
                )
        );
