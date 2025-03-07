import type { Meta, StoryObj } from "@storybook/react";

import { PokeCard } from "../components/poke-card/PokeCard";

import fetchPokemon from "../utils/cardGetter";

const pokemonData =  await fetchPokemon(25).then((data) => {
        return data;
    }); 

console.log(pokemonData);


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

export const Default: Story = {args: {
    id: pokemonData.id,
    name: pokemonData.name,
    imageUrl: pokemonData.sprites.other["official-artwork"].front_default,
    stats: pokemonData.stats,
    type: pokemonData.types[0].type.name
}};