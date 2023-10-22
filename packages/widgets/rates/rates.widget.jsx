import React from "react";
import { createRoot } from "react-dom/client";
import { RatesApiContainer } from "./RatesApiContainer";

const container = document.getElementById("camp-rates");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <RatesApiContainer />
    </React.StrictMode>
);
