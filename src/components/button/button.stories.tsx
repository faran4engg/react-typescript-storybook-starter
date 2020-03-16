import React from "react";
import { Button } from "./button";
import { text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
  component: Button
};

export const Usage = () => (
  <Button
    onClick={action("Button Clicked")}
    as={select("Show As", ["primary", "secondary", "ghost", "text"], "primary")}
    type={select("Type", ["button", "submit"], "button")}
  >
    {text("Text", "Primary Button")}
  </Button>
);
