import { useState } from "react";
const arrayNumeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];


function App() {
  const [numeros, marcarNumeros] = useState(arrayNumeros);
  return (
    <>
      <div className="contenedor">
        {/* El siguiente elemento se oculta añadiéndole la clase "off" */}
        <span className="mensaje">Llamando...</span>
        <main className="telefono">
          <div className="botones">
            <ol className="teclado">
              {numeros.map(numero => <li className="numeros"><button>{numero}</button></li>)}
              < li > <button className="big">borrar</button></li>
            </ol>
          </div>
          <div className="acciones">
            <form className="numero">{numeros}</form>
            {/* El botón de llamar debe tener la clase "activo" cuando */}
            {/* el número de teléfono tiene 9 cifras */}
            <button /* href="#" */ className="llamar">Llamar</button>
            {/* Sólo se tiene que ver un botón u otro */}
            <button /* href="#" */ className="colgar activo">Colgar</button>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
