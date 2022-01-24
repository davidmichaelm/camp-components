import React, {useEffect, useState} from "react";
import * as styles from "../EventCard/eventCard.module.css";
import EventCard from "../EventCard";

const EventContainer = () => {
    const [events, setEvents] = useState([null, null]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            const groq = `*[_type == 'event' && active == true]  | order(startDate asc)
            {
                active,
                name,
                image,
                startDate,
                endDate,
                shortDescription,
                buttons
            }`;
            const query = `?query=${encodeURIComponent(groq)}`;
            let response = await fetch(`https://m5ik5me8.api.sanity.io/v1/data/query/production${query}`);
            response = await response.json();
            setEvents(response.result)
        }

        fetchEvents().then(() => setLoading(false));
    }, []);

    return (
        <div className={styles.appContainer}>
            <div className={styles.campEventsApp}>
                <div className={styles.eventsHeader}>
                    <h1>What's going on at Camp?</h1>
                </div>

                <div className={styles.eventsContainer}>
                    {
                        events.map((event, index) => {
                            return <EventCard {...event} key={index} loading={loading} />;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default EventContainer;
