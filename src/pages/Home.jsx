import React from 'react'

const Home = () => (
  <div className="Home">
    <div className="Home-container">
      <div className="Home-items">
        <div className="Pets">
          <div className="Pets-cover">
            <span>Icono de mascota</span>
            <div className="Pets-type">
              Tag de Adopcion
            </div>
          </div>
          <div className="Pets-content">
            <div className="Pets-head">
              <h2>Nombre de mi mascota</h2>
              <i>Genero</i>
              <div className="Pets-date">
                <i>Icono calendario</i>
                <br/>
                <span>Fecha</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home