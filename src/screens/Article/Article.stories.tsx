import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Article from "./Article";

export default {
  title: "Screen/Article",
  component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => (
  <Article {...args} />
);
