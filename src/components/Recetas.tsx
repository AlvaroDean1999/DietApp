import { Link } from "react-router-dom";
import { alimentos } from "../data/alimentos";
import { useState } from "react";

const Recetas = () => {
  interface Alimento {
    id: number;
    nombre: string;
    categoria: string;
    proteinas: number;
    grasas: number;
    carbohidratos: number;
    calorias: number;
  }
  
  const [filterFood, setFilterFood] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12; // Número de elementos por página

  const changeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterFood(event.target.value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filterRecetas = alimentos
    .filter((alimento) => alimento.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((alimento) => (filterFood ? alimento.categoria === filterFood : true));

  const indexOfLastRecipe = currentPage * itemsPerPage; // Último índice de la página actual
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage; // Primer índice de la página actual
  const currentRecipes = filterRecetas.slice(indexOfFirstRecipe, indexOfLastRecipe); // Recetas de la página actual

  const totalPages = Math.ceil(filterRecetas.length / itemsPerPage); // Total de páginas

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); // Incrementa la página
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Decrementa la página
    }
  };

  const handleAddToDiet = (receta: Alimento) => {
    // 1. Obtener recetas previas del Local Storage
    const storedRecipes = localStorage.getItem("recetas");

    // 2. Convertir a array (si no hay nada, inicializar como vacío)
    const recetasGuardadas: Alimento[] = storedRecipes ? JSON.parse(storedRecipes) : [];

    // 3. Verificar si la receta ya está almacenada para evitar duplicados
    if (!recetasGuardadas.some((item) => item.id === receta.id)) {
      recetasGuardadas.push(receta); // Agregar la nueva receta
      localStorage.setItem("recetas", JSON.stringify(recetasGuardadas)); // Guardar en Local Storage
    } else {
      alert("Esta receta ya está en la lista.");
    }
  };

  return (
    <div>
      <h1 className="food__title">Recetas</h1>

      <div className="food__filter">
        <input
          type="text"
          className="food__input"
          placeholder="Buscar receta..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select className="food__select" value={filterFood} onChange={changeFilter}>
          <option value="">Todas las recetas</option>
          <option value="Ensalada">Ensalada</option>
          <option value="Postre">Postre</option>
          <option value="Desayuno">Desayuno</option>
          <option value="Sopa">Sopa</option>
        </select>
      </div>

      <section className="food__section">
        {currentRecipes.map((alimentos) => (
          <article key={alimentos.id} className="food__item">
            <div className="food__containerImg">
            <img src={"img/" + alimentos.id + ".jpg"} alt={alimentos.nombre} className="food__img" />
            </div>
            <span className="food__category">{alimentos.categoria}</span>
            <h4 className="food__name">{alimentos.nombre}</h4>

            <div className="food__stats">
              <div className="food__metrics">
                <p className="food__text"> Calorias </p>
                <div className="food__metric">{alimentos.calorias}</div>
              </div>
              <div className="food__metrics">
                <p className="food__text"> Proteinas </p>
                <div className="food__metric">{alimentos.proteinas}</div>
              </div>
              <div className="food__metrics">
                <p className="food__text"> Grasas </p>
                <div className="food__metric">{alimentos.grasas}</div>
              </div>
            </div>

            <div className="food__buttons">
              <Link to={alimentos.nombre}>
                <button className="button__viewMore food__button">Detalles</button>
              </Link>
              <button
                className="button__addToDiet food__button"
                onClick={() => handleAddToDiet(alimentos)}
              >
                Añadir
              </button>
            </div>
          </article>
        ))}
      </section>

      <div className="food__pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Recetas;
