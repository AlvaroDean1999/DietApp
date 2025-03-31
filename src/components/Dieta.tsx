import { useState, useEffect } from "react";

interface Alimento {
  id: number;
  nombre: string;
  categoria: string;
  proteinas: number;
  grasas: number;
  carbohidratos: number;
  calorias: number;
}

const Dieta = () => {
  const [recetasGuardadas, setRecetasGuardadas] = useState<Alimento[]>([]);

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recetas");
    if (storedRecipes) {
      setRecetasGuardadas(JSON.parse(storedRecipes));
    }
  }, []);

  const totalStats = recetasGuardadas.reduce(
    (acc, receta) => {
      acc.calorias += receta.calorias;
      acc.proteinas += receta.proteinas;
      acc.grasas += receta.grasas;
      acc.carbohidratos += receta.carbohidratos;
      return acc;
    },
    { calorias: 0, proteinas: 0, grasas: 0, carbohidratos: 0 }
  );

  const deleteRecipe = (id: number) => {
    const storedRecipes: Alimento[] = JSON.parse(localStorage.getItem("recetas") || "[]");
    const updatedRecipes = storedRecipes.filter((receta) => receta.id !== id);
  
    localStorage.setItem("recetas", JSON.stringify(updatedRecipes));
    setRecetasGuardadas(updatedRecipes); // ✅ Ahora actualiza correctamente el estado
  };


  return (
    <main>
      <h2 className="diet__title">Mi Dieta</h2>
      <section className="diet__section">
        {recetasGuardadas.length === 0 ? (
          <p className="diet__disclaimer">No has añadido ninguna receta.</p>
        ) : (
          <>
          <div className="diet__recipes">
            {recetasGuardadas.map((receta) => (
              <article className="diet__recipesItem">
                <img src={"img/" + receta.id + ".jpg"} alt="" className="diet__recipesImg"/>
                <div className="diet__recipesData">
                  <h4>
                    {receta.nombre}
                  </h4>
                </div>
                <div className="diet__recipesData">
                  <p>Proteinas</p>
                  <h4>
                    {receta.grasas}
                  </h4>
                </div>
                <div className="diet__recipesData">
                  <p>Grasas</p>
                  <h4>
                    {receta.grasas}
                  </h4>
                </div>
                <div className="diet__recipesData">
                  <p>Carbohidratos</p>
                  <h4>
                    {receta.carbohidratos}
                  </h4>
                </div>
                <div className="diet__recipesData">
                  <p>Kcal</p>
                  <h4>
                    {receta.calorias}
                  </h4>
                </div>
                <div className="diet__recipesData">
                <button onClick={() => deleteRecipe(receta.id)} className="diet__recipesDelete">Eliminar</button>
                </div>
              </article>
            ))}
          </div>
          <div className="diet__totalResult">
          <h3>Total: </h3>
          <p className="item__totalResult">Calorías: <span> {totalStats.calorias} </span> kcal</p>
          <p className="item__totalResult">Proteínas: <span> {totalStats.proteinas} </span>g</p>
          <p className="item__totalResult">Grasas: <span> {totalStats.grasas} </span>g</p>
          <p className="item__totalResult">Carbohidratos: <span> {totalStats.carbohidratos} </span>g</p>
        </div>
        </>
        )}
      </section>
    </main>
  );
};

export default Dieta;
