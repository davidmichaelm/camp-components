import { Event } from "@campphillip/api";
import { CalendarIcon } from "./CalendarIcon";
import { EventContainer } from "./EventContainer";
import styles from "./HomeEvents.module.css";

export interface HomeEventsProps {
    events: Event[] | null;
    loading?: boolean;
    title?: string;
    showCalendar?: boolean;
}

export const HomeEvents = ({
    events,
    loading,
    title = "What's going on at Camp?",
    showCalendar = true,
}: HomeEventsProps) => {
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
            <div className={styles.eventsWrapper}>
                <EventContainer
                    events={events}
                    loading={loading}
                />
            </div>
        </div>
    );
};
