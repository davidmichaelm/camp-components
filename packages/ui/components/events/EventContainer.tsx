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
}

export const EventContainer = ({
    events,
    loading,
    className,
    title = "What's going on at Camp?",
    headerActions,
}: EventContainerProps) => {
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
                    : events && events.length > 0
                        ? (
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
