import { Event, fetchEvents } from "@campphillip/api";
import { Calendar } from "@campphillip/ui";
import { useEffect, useState } from "react";

export interface CalendarApiContainerProps {
    className?: string;
}

export const CalendarApiContainer = ({ className }: CalendarApiContainerProps) => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const events = await fetchEvents();
                setEvents(events);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <Calendar
            events={events}
            loading={loading}
        />
    );
};
