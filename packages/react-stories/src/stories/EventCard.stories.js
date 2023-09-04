import { EventCard } from "@campphillip/events";

export default {
    title: "EventCard",
    component: EventCard,
};

const Template = (args) => <EventCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    _createdAt: "2021-09-19T13:14:48Z",
    _id: "9c4aa16d-7bad-47b8-8581-d6f1efa475d5",
    _rev: "7dkOKJtWoyCn0kHUhDiPzs",
    _type: "event",
    _updatedAt: "2021-09-19T13:14:48Z",
    active: true,
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
    name: "Fall Women's Retreat",
    shortDescription: [
        {
            _key: "d405e1b547b6",
            _type: "block",
            children: [
                {
                    _key: "eca17ccbef70",
                    _type: "span",
                    marks: [],
                    text: "Ladies! It’s that time of year again: our Fall Women’s Retreat is coming up from October 1-3! Tell your friends. Tell your friends’ friends. Invite them to come for a weekend full of Bible study, relaxation in creation, laughs, friendships, and so much more! Click the link below to register before it’s too late!",
                },
            ],
            markDefs: [],
            style: "normal",
        },
    ],
    startDate: "2021-10-01T12:00:00.000Z",
};
