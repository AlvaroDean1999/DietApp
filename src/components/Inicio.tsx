const Inicio = () => {
  return (
    <div className="home">
      <section className="home__landing">
        <div className="homeLanding__left">
          <h1 className="homeLanding__title"> Con <span> TuDieta </span> crea tu propia rutina de alimentación </h1>
          <h3 className="homeLanding__subtitle">Descubre las mejores recetas y crea tu propia deta completamente adaptada a ti </h3>

          <a href="" className="homeLanding__button">Descubre nuestras recetas</a>

        </div>
        <div className="homeLanding__right">
          <img src="" alt="" className="homeLanding__img" />
        </div>
      </section>

      <section className="home__stats">
        <div className="homeStats__item">
          <img src="img/icons/personalizar.png" alt="" className="homeItem__img" />
          <h3 className="homeItem__title"> Personaliza </h3>
          <p className="homeItem__text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi tempore quo non.</p>
        </div>

        <div className="homeStats__item">
          <img src="img/icons/reporte-de-desempeno.png" alt="" className="homeItem__img" />
          <h3 className="homeItem__title"> Descubre </h3>
          <p className="homeItem__text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi tempore quo non.</p>
        </div>

        <div className="homeStats__item">
          <img src="img/icons/dieta.png" alt="" className="homeItem__img" />
          <h3 className="homeItem__title"> A tu medida </h3>
          <p className="homeItem__text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi tempore quo non.</p>
        </div>
      </section>

    </div>
  )
}

export default Inicio