import React from "react";
import { Event } from "@campphillip/api";
import { EventCard } from "./EventCard";
import styles from "./EventContainer.module.css";

export interface EventContainerProps {
    events: Event[] | null;
    loading?: boolean;
    className?: string;
    title?: string;
    headerActions?: React.ReactNode;
    groupSummerCampEvents?: boolean;
}

export const EventContainer = ({
    events,
    loading,
    className,
    title = "What's going on at Camp?",
    headerActions,
    groupSummerCampEvents = false,
}: EventContainerProps) => {
    const groupedEvents = React.useMemo(() => {
        if (!events) return [];

        // If grouping is disabled, just wrap each event individually
        if (!groupSummerCampEvents) {
            return events.map((e, i) => ({ isSummerCamp: false, events: [e], startIndex: i }));
        }

        const allSummerEvents = events.filter(e => e.isSummerCampEvent);
        const firstSummerIndex = events.findIndex(e => e.isSummerCampEvent);

        // If no summer events, just wrap each event individually
        if (allSummerEvents.length === 0) {
            return events.map((e, i) => ({ isSummerCamp: false, events: [e], startIndex: i }));
        }

        // Single pass: insert summer group at first summer event position, skip others
        let summerInserted = false;
        return events.flatMap((event, index) => {
            if (event.isSummerCampEvent) {
                if (!summerInserted) {
                    summerInserted = true;
                    return [{ isSummerCamp: true, events: allSummerEvents, startIndex: firstSummerIndex }];
                }
                return []; // Skip subsequent summer events
            }
            return [{ isSummerCamp: false, events: [event], startIndex: index }];
        });
    }, [events, groupSummerCampEvents]);

    const firstSummerGroupIndex = groupedEvents.findIndex(g => g.isSummerCamp);

    return (
        <div className={`${styles.eventsContainer} ${className || ''}`}>
            {(title || headerActions) && (
                <div className={styles.eventsHeader}>
                    {title && <h1>{title}</h1>}
                    {headerActions}
                </div>
            )}
            <div className={styles.eventsList}>
                {loading
                    ? (
                        <>
                            <EventCard loading={loading} key="loading-1" />
                            <EventCard loading={loading} key="loading-2" />
                            <EventCard loading={loading} key="loading-3" />
                        </>
                    )
                    : groupedEvents.length > 0
                        ? (
                            groupedEvents.map((group, groupIndex) => {
                                const isFirstSummerGroup = groupIndex === firstSummerGroupIndex;

                                if (group.isSummerCamp) {
                                    return (
                                        <div
                                            key={`group-${groupIndex}`}
                                            className={styles.summerCampGroup}
                                            id={isFirstSummerGroup ? "summer-camp" : undefined}
                                        >
                                            <h2 className={styles.summerCampTitle}>🏕️ Summer Camp</h2>
                                            {group.events.map((event, eventIndex) => (
                                                <EventCard
                                                    {...event}
                                                    key={`${groupIndex}-${eventIndex}`}
                                                    loading={loading}
                                                />
                                            ))}
                                        </div>
                                    );
                                } else {
                                    return group.events.map((event, eventIndex) => (
                                        <div key={`${groupIndex}-${eventIndex}`} className={styles.eventWrapper}>
                                            <EventCard
                                                {...event}
                                                loading={loading}
                                            />
                                        </div>
                                    ));
                                }
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
