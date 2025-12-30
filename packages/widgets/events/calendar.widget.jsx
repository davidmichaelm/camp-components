import React from "react";
import { createRoot } from "react-dom/client";
import { CalendarApiContainer } from "./CalendarApiContainer";

const calendarContainer = document.getElementById("camp-calendar");

if (calendarContainer) {
  const root = createRoot(calendarContainer);
  root.render(
    <React.StrictMode>
      <CalendarApiContainer />
    </React.StrictMode>
  );
}
