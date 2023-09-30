import React from "react";
import { createRoot } from "react-dom/client";
import { EventApiContainer } from "./components";

const container = document.getElementById("camp-events");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <EventApiContainer />
    </React.StrictMode>
);
