import { useEffect, useState } from "react";
import { fetchEvents } from "../api/fetchEvents";
import { EventCardProps } from "./EventCard";
import { EventContainer } from "./EventContainer";
import styles from "./EventContainer.module.css";

export const EventApiContainer = () => {
    const [events, setEvents] = useState<Array<EventCardProps | null>>([
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
