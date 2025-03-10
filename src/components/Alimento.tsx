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
            <img  src={`/img/${alimento.id}.png`} alt={alimento.nombre} />
            <h3>Receta: {alimento.nombre}</h3>
            <p>Categoria: {alimento.categoria}</p>
            <p>Proteinas: {alimento.proteinas}</p>
            <p>Grasas: {alimento.grasas}</p>
            <p>Carbohidratos: {alimento.carbohidratos}</p>
            <p>Calorias: {alimento.calorias}</p>
        </div>
    )
}

export default Alimento; 