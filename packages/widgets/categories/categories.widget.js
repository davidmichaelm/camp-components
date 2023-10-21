import React from "react";
import { createRoot } from "react-dom/client";
import { CategoryApiContainer } from "./CategoryApiContainer";

const container = document.getElementById("camp-categories");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <CategoryApiContainer />
    </React.StrictMode>
);
