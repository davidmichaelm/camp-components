import React from "react";
import { createRoot } from "react-dom/client";
import { EventApiContainer } from "./EventApiContainer";

const boardEventsContainer = document.getElementById("board-events");
const root = createRoot(boardEventsContainer);
root.render(
    <React.StrictMode>
        <EventApiContainer type={'board-events'} />
    </React.StrictMode>
);
