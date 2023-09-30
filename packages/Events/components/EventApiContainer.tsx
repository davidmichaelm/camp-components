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
            fetchEvents()
                .then((events) => setEvents(events))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
        }

        fetchData();
    }, []);

    return (
        <div className={styles.appContainer}>
            <EventContainer events={events} loading={loading} />
        </div>
    );
};
