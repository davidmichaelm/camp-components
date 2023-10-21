import { Event } from "@campphillip/api";
import { CalendarIcon } from "./CalendarIcon";
import { EventCard } from "./EventCard";
import * as styles from "./EventContainer.module.css";

export interface EventContainerProps {
    events: Array<Event | null>;
    loading: boolean;
    title?: string;
    showCalendar?: boolean;
}

export const EventContainer = ({
    events,
    loading,
    title = "What's going on at Camp?",
    showCalendar = true,
}: EventContainerProps) => {
    return (
        <div className={styles.campEventsApp}>
            <div className={styles.eventsHeader}>
                <h1>{title}</h1>
                {showCalendar && (
                    <a className={styles.calendarButton} href="/calendar">
                        Check out our calendar
                        <CalendarIcon />
                    </a>
                )}
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
