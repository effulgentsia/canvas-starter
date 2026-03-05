import Button from "@/components/button";

import { getComponentExamples } from "./lib/get-examples";

const exampleButtonArgs = await getComponentExamples("button");

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = {
  args: exampleButtonArgs[0],
};

export const Teal = {
  args: {
    ...exampleButtonArgs[0],
    variant: "teal",
  },
};

export const Surface = {
  args: {
    ...exampleButtonArgs[0],
    variant: "surface",
  },
};

export const FullWidth = {
  args: {
    ...exampleButtonArgs[0],
    width: "full",
  },
};
