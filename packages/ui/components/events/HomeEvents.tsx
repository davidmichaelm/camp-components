import { Event } from "@campphillip/api";
import { CalendarIcon } from "./CalendarIcon";
import { EventContainer } from "./EventContainer";
import styles from "./HomeEvents.module.css";

export interface HomeEventsProps {
    events: Event[] | null;
    loading?: boolean;
}

export const HomeEvents = ({
    events,
    loading,
}: HomeEventsProps) => {
    const headerActions = (
        <a className={styles.calendarButton} href="/calendar">
            <CalendarIcon />
            Check out our calendar
        </a>
    );

    return (
        <EventContainer
            events={events}
            loading={loading}
            title={"What's going on at Camp?"}
            headerActions={headerActions}
        />
    );
};
