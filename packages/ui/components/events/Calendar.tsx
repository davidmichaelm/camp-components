import { Event } from "@campphillip/api";
import { EventContainer } from "./EventContainer";
import styles from "./Calendar.module.css";

export interface CalendarProps {
    events: Event[] | null;
    loading?: boolean;
}

export const Calendar = ({
    events,
    loading,
}: CalendarProps) => {
    const hasSummerEvents = events?.some(event => event.isSummerCampEvent);

    const headerActions = hasSummerEvents ? (
        <a
            className={styles.summerEventsButton}
            href="#summer-camp"
        >
          <span>🏕️</span> Jump to Summer Camp
        </a>
    ) : null;

    return (
        <EventContainer
            events={events}
            loading={loading}
            title={"Camp Calendar"}
            headerActions={headerActions}
            groupSummerCampEvents={true}
        />
    );
};
