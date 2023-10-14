import { useEffect, useState } from "react";
import { Event, fetchBoardEvents } from "../api/fetchEvents";
import { EventContainer } from "./EventContainer";
import styles from "./EventContainer.module.css";

export const BoardEventApiContainer = () => {
    const [events, setEvents] = useState<Array<Event | null>>([
        null,
        null,
        null,
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            fetchBoardEvents()
                .then((events) => setEvents(events))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
        }

        fetchData();
    }, []);

    return (
        <div className={styles.appContainer}>
            <EventContainer
                events={events}
                loading={loading}
                showCalendar={false}
                title={"Upcoming Board Events"}
            />
        </div>
    );
};
