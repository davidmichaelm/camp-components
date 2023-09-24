import { Event } from "../api/fetchEvents";
import { CalendarIcon } from "./CalendarIcon";
import { EventCard } from "./EventCard";
import styles from "./EventContainer.module.css";

export interface EventContainerProps {
    events: Array<Event | null>;
    loading: boolean;
}

export const EventContainer = ({ events, loading }: EventContainerProps) => {
    return (
        <div className={styles.campEventsApp}>
            <div className={styles.eventsHeader}>
                <h1>What's going on at Camp?</h1>
                <a className={styles.calendarButton} href="/calendar">
                    Check out our calendar
                    <CalendarIcon />
                </a>
            </div>
            <div className={styles.eventsContainer}>
                {events.map((event, index) => {
                    return (
                        <EventCard {...event} key={index} loading={loading} />
                    );
                })}
            </div>
        </div>
    );
};
