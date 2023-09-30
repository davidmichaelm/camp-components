import React from "react";
import { createRoot } from "react-dom/client";
import { BannerApiContainer } from "./components";

const container = document.getElementById("camp-banners");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BannerApiContainer />
    </React.StrictMode>
);
