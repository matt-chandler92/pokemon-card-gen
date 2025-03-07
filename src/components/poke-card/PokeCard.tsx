import React from "react";

export const PokeCard: React.FC = () => {
    return (
        <div className="poke-card">
            <div className="poke-card__top">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" />
            </div>
            <div className="poke-card__bottom">
                <h3 className="poke-card__name">Pikachu</h3>
                <div className="poke-card__stats">
                    <table>
                        <tr>
                            <td>HP</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>Attack</td>
                            <td>55</td>
                        </tr>
                        <tr>
                            <td>Defense</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Special Attack</td>
                            <td>50</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}