import React from "react";
import { createRoot } from "react-dom/client";
import { BoardEventApiContainer } from "@campphillip/ui";

const boardEventsContainer = document.getElementById("board-events");
const root = createRoot(boardEventsContainer);
root.render(
    <React.StrictMode>
        <BoardEventApiContainer />
    </React.StrictMode>
);
