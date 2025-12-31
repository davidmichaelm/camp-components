import { Event, fetchEvents } from "@campphillip/api";
import { Calendar } from "@campphillip/ui";
import { useEffect, useState } from "react";

export const CalendarApiContainer = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const events = await fetchEvents({
                  includePassedEvents: true
                });
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
