const Contacto = () => {
  return (
    <div>
      <h1 className="contact__title">Contact</h1>


      <form className="contact__form" action="mailto:hola@gmail.com">
        <input type="text" placeholder="nombre"/>
        <input type="main" placeholder="email"/>
        <textarea name="" id="" placeholder="motivo de contacto"></textarea>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default Contacto