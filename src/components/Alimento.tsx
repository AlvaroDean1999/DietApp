import { useParams } from "react-router-dom";
import { alimentos } from "../data/alimentos";
import { useEffect, useState } from "react";


interface Alimento {
    id: number;
    nombre: string;
    categoria: string;
    proteinas: number;
    grasas: number;
    carbohidratos: number;
    calorias: number;
    ingredientes: string[];
}

const Alimento = () => {

    const [alimento, setAlimento] = useState<Alimento | null>(null);
    const params = useParams();

    useEffect(() => {
        const foundAlimento = alimentos.filter(alimentoSelect => alimentoSelect.nombre === params.nombre);
        setAlimento(foundAlimento[0] || null);
    }, [params.nombre]);

    if (!alimento) {
        return <p>No se encontró el alimento.</p>;
    }


    return (
        <div>
            <h3 className="recipe__title">{alimento.nombre}</h3>
            <section className="recipe__item">
                <img src={`/img/${alimento.id}.jpg`} alt={alimento.nombre} className="recipe__img" />

                <article className="recipe__ingredients">
                    <h3 className="ingredients__title">Ingredientes</h3>
                    <ul className="ingredients__list">
                        {alimento.ingredientes.map((ingrediente, index) => (
                            <li key={index}>{ingrediente}</li>
                        ))}
                    </ul>


                    <article className="recipe__information">
                            <div className="recipe__itemInformation">
                                <p>Proteinas</p>
                                <h4>{alimento.proteinas}</h4>
                            </div>
                            <div className="recipe__itemInformation">
                                <p>Grasas</p>
                                <h4>{alimento.grasas}</h4>
                            </div>
                            <div className="recipe__itemInformation">
                                <p>Carbohidratos</p>
                                <h4>{alimento.carbohidratos}</h4>
                            </div>
                            <div className="recipe__itemInformation">
                                <p>Calorias</p>
                                <h4>{alimento.calorias}</h4>
                            </div>
                    </article>
                </article>
            </section>
        </div>
    )
}

export default Alimento; 