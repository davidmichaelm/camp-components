import { Event, fetchEvents } from "@campphillip/api";
import { HomeEvents, BoardEvents } from "@campphillip/ui";
import { useEffect, useState } from "react";

export interface EventApiContainerProps {
    type: "events" | "board-events";
}

export const EventApiContainer = ({ type }: EventApiContainerProps) => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const events = await fetchEvents({
                    eventType: type === "events" ? "event" : "board-event",
                    limit: 3
                });
                setEvents(events);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [type]);

    return type === "events" ? (
        <HomeEvents events={events} loading={loading} />
    ) : (
        <BoardEvents events={events} loading={loading} />
    );
};
