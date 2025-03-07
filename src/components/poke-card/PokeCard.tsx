interface PokeCardProps {
    id: string;
    name: string;
    imageUrl: string;
    stats: {
        base_stat:number,
        stat:{name:string}
    }[];
}

export const PokeCard = ({
    id,
    name,
    imageUrl,
    stats

}: PokeCardProps) => {

    const pokemonName = name[0].toUpperCase() + name.substring(1);
    return (
        <div className="poke-card">
            <div className="poke-card__top">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="poke-card__bottom">
                <h3 className="poke-card__name">{id}: {pokemonName}</h3>
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
    );
}