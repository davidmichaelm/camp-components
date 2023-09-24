import { useEffect, useState } from "react";
import { Event, fetchEvents } from "../api/fetchEvents";
import { EventContainer } from "./EventContainer";
import styles from "./EventContainer.module.css";

export const EventApiContainer = () => {
    const [events, setEvents] = useState<Array<Event | null>>([
        null,
        null,
        null,
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const events = await fetchEvents();
            setEvents(events);
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <div className={styles.appContainer}>
            <EventContainer events={events} loading={loading} />
        </div>
    );
};
