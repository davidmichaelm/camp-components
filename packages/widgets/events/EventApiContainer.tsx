import { Event, fetchBoardEvents, fetchEvents } from "@campphillip/api";
import { EventContainer } from "@campphillip/ui";
import { useEffect, useState } from "react";

export interface EventApiContainerProps {
    type: "events" | "board-events";
}

export const EventApiContainer = ({ type }: EventApiContainerProps) => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const fetchEventOfType =
                type === "events" ? fetchEvents : fetchBoardEvents;
            fetchEventOfType()
                .then((events) => setEvents(events))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
        }

        fetchData();
    }, [type]);

    return (
        <EventContainer
            events={events}
            loading={loading}
            showCalendar={type === "events"}
            title={
                type === "events"
                    ? "What's going on at Camp?"
                    : "Upcoming Board Events"
            }
        />
    );
};
