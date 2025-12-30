import { Event } from "@campphillip/api";
import { CalendarIcon } from "./CalendarIcon";
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

    return (
        <EventContainer
            events={events}
            loading={loading}
            title={"Camp Calendar"}
        />
    );
};
