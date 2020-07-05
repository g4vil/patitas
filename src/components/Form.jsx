import React from 'react'

const Form = () => (
  <div className="Form">
    <div className="Form-head">
      <h2>Dar en adopcion</h2>
    </div>
    <div className="Form-item">
      <form action="submit">
        <input name="name" type="text" placeholder="Nombre de tu mascota"/>
        <input name="description" type="text" placeholder="Describe tu mascota"/>
        <select name="type">
          <option disabled selected>Seleccionar</option>
          <option value="cat">Gato</option>
          <option value="dog">Perro</option>
        </select>
        <select name="gender">
          <option disabled selected>Seleccionar</option>
          <option value="male">Macho</option>
          <option value="female">Hembra</option>
        </select>
        <select name="adopt">
          <option disabled selected>Seleccionar</option>
          <option value="true">Dar en adopcion</option>
          <option value="false">Cuidar</option>
        </select>
        <input name="photo"type="file"/>
        <button>Enviar</button>
      </form>
    </div>
  </div>
)

export default Form