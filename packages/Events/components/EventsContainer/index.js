import React, {useEffect, useState} from "react";
import * as styles from "../EventCard/eventCard.module.css";
import EventCard from "../EventCard";
import {isSafari} from 'react-device-detect';

const EventContainer = () => {
    const [events, setEvents] = useState([null, null, null]);
    const [loading, setLoading] = useState(true);

    const containerStyles = styles.eventsContainer + (isSafari
        ? ' ' + styles.eventsContainerSafari
        : '');

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
                    <a className={styles.calendarButton} href="/calendar">
                        Check out our calendar
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="feather feather-calendar">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </a>
                </div>
                <div className={containerStyles}>
                    {
                        events.map((event, index) => {
                            return <EventCard
                                {...event}
                                key={index}
                                loading={loading}
                            />;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default EventContainer;
