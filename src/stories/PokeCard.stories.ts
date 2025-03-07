import type { Meta, StoryObj } from "@storybook/react";

import { PokeCard } from "../components/poke-card/PokeCard";

const meta = {
    title: "Example/PokeCard",
    component: PokeCard,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
} satisfies Meta<typeof PokeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};