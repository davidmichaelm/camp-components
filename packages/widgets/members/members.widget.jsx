import React from "react";
import { createRoot } from "react-dom/client";
import { MemberApiContainer } from "./MembersApiContainer";

const eventsContainer = document.getElementById("active-members");
const root = createRoot(eventsContainer);
root.render(
    <React.StrictMode>
        <MemberApiContainer />
    </React.StrictMode>
);
