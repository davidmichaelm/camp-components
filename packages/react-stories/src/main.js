import { dirname, join } from "path";
module.exports = {
    stories: [
        "./stories/**/*.stories.mdx",
        "./stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("storybook-css-modules-preset"),
    ],
    framework: {
        name: getAbsolutePath("@storybook/react-webpack5"),
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

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, "package.json")));
}
