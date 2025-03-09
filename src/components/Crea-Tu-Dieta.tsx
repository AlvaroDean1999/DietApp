import { Link } from "react-router-dom";
import { alimentos } from "../data/alimentos";

const CreaTuDieta = () => {
  return (
    <div>
      <h1>Crea tu dieta</h1>

      <section className="food__section">
        {
          alimentos.map(alimento => (
            <article key={alimento.id} className="food__item">

              <img src={"img/" + alimento.id + ".png"} alt={alimento.nombre} className="food__img" />


              <span className="food__category">{alimento.categoria}</span>
              <h4 className="food__name">{alimento.nombre}</h4>

              <div className="food__stats">
                <div className="food__metrics">
                  <p className="food__text"> Calorias </p>
                  <div className="food__metric">{alimento.calorias} </div>
                </div>
                <div className="food__metrics">
                  <p className="food__text"> Proteinas </p>
                  <div className="food__metric">{alimento.proteinas} </div>
                </div>
                <div className="food__metrics">
                  <p className="food__text"> Grasas </p>
                  <div className="food__metric">{alimento.grasas} </div>
                </div>
                <div className="food__metrics">
                  <p className="food__text"> Carbohidratos </p>
                  <div className="food__metric">{alimento.carbohidratos} </div>
                </div>
              </div>

              <div className="food__buttons">
                <Link to={alimento.nombre}>
                <button className="button__viewMore food__button">Detalles</button>
                </Link>
                <button className="button__addToDiet food__button">Añadir </button>
              </div>
            </article>
          ))
        }
      </section>
    </div>
  )
}

export default CreaTuDieta;