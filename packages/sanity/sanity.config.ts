import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";
import { colorInput } from "@sanity/color-input";
import deskStructure from "./deskStructure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
    title: "Camp Phillip",
    projectId: "m5ik5me8",
    dataset: "production",
    plugins: [
        deskTool({
            structure: deskStructure,
        }),
        colorInput(),
        visionTool(),
    ],
    schema: {
        types: schemas,
    },
    tools: (prev, context) => {
        const isAdmin = context?.currentUser?.roles.find(
            ({ name }) => name === "administrator"
        );
        if (isAdmin) {
            return prev;
        }
        return prev.filter((tool) => tool.name !== "vision");
    },
});
