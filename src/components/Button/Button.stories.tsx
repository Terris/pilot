import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Default = Template.bind({});

Primary.args = {
  title: "Button",
  onClick: () => alert("Button clicked"),
  primary: true,
  disabled: false,
};

Default.args = {
  title: "Button",
  onClick: () => alert("Button clicked"),
  primary: false,
  disabled: false,
};
