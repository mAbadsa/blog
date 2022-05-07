import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  color: "primary",
  variant: "outlined",
  children: "Add",
  size: "large",
};

export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  color: "primary",
  variant: "contained",
  children: "Add",
};

export const TextPrimay = Template.bind({});
TextPrimay.args = {
  color: "primary",
  variant: "text",
  children: "Save",
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  color: "secondary",
  variant: "text",
  children: "Save Draft",
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  color: "secondary",
  variant: "outlined",
  children: "Save Draft",
};
