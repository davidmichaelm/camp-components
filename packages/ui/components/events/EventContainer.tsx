import { Event } from "@campphillip/api";
import { CalendarIcon } from "./CalendarIcon";
import { EventCard } from "./EventCard";
import styles from "./EventContainer.module.css";

export interface EventContainerProps {
    events: Array<Event | null>;
    loading?: boolean;
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
                {events.length > 0 ? (
                    events.map((event, index) => {
                        return (
                            <EventCard
                                {...event}
                                key={index}
                                loading={loading}
                            />
                        );
                    })
                ) : (
                    <div className={styles["empty"]}>
                        <img src="https://d2114hmso7dut1.cloudfront.net/customers/096355b6-1a03-11eb-a9c3-0614187498c1/sites/096f9d4e-1a03-11eb-b2dd-0614187498c1/files/67900ba0-5f83-11eb-9222-e3d4d8baf1a9/original/file.png?t=1611630366" />
                        No upcoming events. Check back later!
                    </div>
                )}
            </div>
        </div>
    );
};
