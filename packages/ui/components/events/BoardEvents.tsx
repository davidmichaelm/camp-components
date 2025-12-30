import { Event } from "@campphillip/api";
import { EventContainer } from "./EventContainer";

export interface BoardEventsProps {
    events: Event[] | null;
    loading?: boolean;
}

export const BoardEvents = ({
    events,
    loading,
}: BoardEventsProps) => {
    return (
        <EventContainer
            events={events}
            loading={loading}
            title={"Upcoming Board Events"}
        />
    );
};
