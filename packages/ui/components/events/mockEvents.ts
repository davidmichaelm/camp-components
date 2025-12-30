import type { Event } from "@campphillip/api";

const baseEvent: Event = {
    buttons: [
        {
            _key: "0b9c57f616df",
            _type: "button",
            text: "Register",
            url: "https://campphillip.campintouch.com/ui/forms/application/person/App",
        },
    ],
    endDate: "2021-10-03T16:00:00.000Z",
    image: {
        _type: "image",
        asset: {
            _ref: "image-10f3f7d41ce4548ba73006fb6f5edc5ed7dd84c1-5184x3456-jpg",
            _type: "reference",
        },
    },
    name: "Sample Event",
    shortDescription: [
        {
            _key: "d405e1b547b6",
            _type: "block",
            children: [
                {
                    _key: "eca17ccbef70",
                    _type: "span",
                    marks: [],
                    text: "This is a sample event description with all the standard content and formatting.",
                },
            ],
            markDefs: [],
            style: "normal",
        },
    ],
    startDate: "2021-10-01T12:00:00.000Z",
};

export function createMockEvent(overrides: Partial<Event> = {}): Event {
    return {
        ...baseEvent,
        ...overrides,
        // Handle nested objects that need proper merging
        buttons: overrides.buttons || baseEvent.buttons,
        image: overrides.image || baseEvent.image,
        shortDescription: overrides.shortDescription || baseEvent.shortDescription,
    };
}

export function createMockEvents(eventOverrides: Partial<Event>[]): Event[] {
    return eventOverrides.map(override => createMockEvent(override));
}
