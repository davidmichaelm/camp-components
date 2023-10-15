import React from "react";
import { createRoot } from "react-dom/client";
import { EventApiContainer } from "./EventApiContainer";

const eventsContainer = document.getElementById("camp-events");
const root = createRoot(eventsContainer);
root.render(
    <React.StrictMode>
        <EventApiContainer type={'events'} />
    </React.StrictMode>
);
