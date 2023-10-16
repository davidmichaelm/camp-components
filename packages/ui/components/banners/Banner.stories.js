import { Banner } from "./Banner";

export default {
    title: "Components/Banner",
    component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: {
        _type: "image",
        asset: {
            _ref: "image-61d800ce39470adb0ad066941dce06b3987fe831-800x450-webp",
            _type: "reference",
        },
    },
    text: [
        {
            _key: "5451e95b3783",
            _type: "block",
            children: [
                {
                    _key: "8dbefa62db52",
                    _type: "span",
                    marks: ["e76220fe9a87"],
                    text: "Summer Camp Registration",
                },
            ],
            markDefs: [
                {
                    _key: "e76220fe9a87",
                    _type: "color",
                    alpha: 1,
                    hex: "#fed136",
                    hsl: {
                        _type: "hslaColor",
                        a: 1,
                        h: 46.49999999999999,
                        l: 0.6039215686274509,
                        s: 0.9900990099009901,
                    },
                    hsv: {
                        _type: "hsvaColor",
                        a: 1,
                        h: 46.49999999999999,
                        s: 0.7874015748031495,
                        v: 0.996078431372549,
                    },
                    rgb: {
                        _type: "rgbaColor",
                        a: 1,
                        b: 54,
                        g: 209,
                        r: 254,
                    },
                },
            ],
            style: "normal",
        },
        {
            _key: "36445b59b516",
            _type: "block",
            children: [
                {
                    _key: "9d176adabe7a",
                    _type: "span",
                    marks: [],
                    text: "Coming February 2022",
                },
            ],
            markDefs: [
                {
                    _key: "9bb85041a4b5",
                    _type: "color",
                    alpha: 1,
                    hex: "#fed136",
                    hsl: {
                        _type: "hslaColor",
                        a: 1,
                        h: 46.49999999999999,
                        l: 0.6039215686274509,
                        s: 0.9900990099009901,
                    },
                    hsv: {
                        _type: "hsvaColor",
                        a: 1,
                        h: 46.49999999999999,
                        s: 0.7874015748031495,
                        v: 0.996078431372549,
                    },
                    rgb: {
                        _type: "rgbaColor",
                        a: 1,
                        b: 54,
                        g: 209,
                        r: 254,
                    },
                },
            ],
            style: "normal",
        },
    ],
    startDate: "2021-10-01T12:00:00.000Z",
};
