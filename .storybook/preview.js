import * as NextImage from "next/image";
import "../src/styles/globals.css";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\\.s(a|c)ss$/,
      include: path.resolve(__dirname, "../"),
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true,
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
        },
        "sass-loader",
      ],
    });
    return config;
  },
};
