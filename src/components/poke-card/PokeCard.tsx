import "./pokeCard.css"

interface PokeCardProps {
    id: string;
    name: string;
    imageUrl: string;
    stats: {
        base_stat:number,
        stat:{name:string}
    }[];
    type: string;
}

export const PokeCard = ({
    id,
    name,
    imageUrl,
    stats,
    type

}: PokeCardProps) => {

    const pokemonName = name[0].toUpperCase() + name.substring(1);
    return (
        <div className={`poke-card ${type ? `poke-card--${type}`: ''} `}>
                <span className="poke-card__id">{id}</span>
            <div>
                <h3 className="poke-card__name">{pokemonName}</h3>
                <div className="poke-card__top">
                    <img src={imageUrl} alt={name} />
                </div>
                <div className="poke-card__bottom">
                    <div className="poke-card__stats">
                        <table>
                            <tbody>
                                {stats && stats.map((stat) => (
                                    <tr key={stat.stat.name}>
                                        <td>{stat.stat.name}</td>
                                        <td>{stat.base_stat}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}