module.exports = {
    stories: [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-css-modules-preset",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: true,
    },
    babel: async (options) => {
        options.plugins.push("@babel/plugin-syntax-flow");
        options.presets.push("@babel/preset-typescript");
        return options;
    },
};
