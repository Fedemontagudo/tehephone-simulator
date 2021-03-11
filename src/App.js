import { useState } from "react";
const arrayTeclas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
/* const marcarNumero = */

function App() {
  const [numeros, setNumeros] = useState(arrayTeclas);
  const [numeroMarcar, setNumeroMarcar] = useState("");
  const mostrarNumero = (numeroPulsado) => {
    if (numeroMarcar.length < 9) {
      setNumeroMarcar(numeroMarcar + numeroPulsado);
    }
  };
  const borrarNumero = () => {
    setNumeroMarcar("");
  };
  const [llamando, setLlamando] = useState(false);
  const cambioEstadoLlamada = (e) => {
    e.preventDefault();
    setLlamando(!llamando);
  };
  const botonLlamar = <a href="botón para llamar"
    className={`llamar ${numeroMarcar.length === 9 && !llamando ? "activo" : ""}`}
    onClick={cambioEstadoLlamada}>Llamar</a>;
  const botonColgar = <a href="botón para colgar"
    className={`colgar ${llamando ? "activo" : ""}`}
    onClick={cambioEstadoLlamada}>Colgar</a>;
  return (
    <>
      <div className="contenedor">
        {/* El siguiente elemento se oculta añadiéndole la clase "off" */}
        <span className={`mensaje ${llamando ? "" : "off"}`}>Llamando...</span>
        <main className="telefono">
          <div className="botones">
            <ol className="teclado">
              {numeros.map(numero =>
                <li key={numero} className="numeros">
                  <button onClick={() => mostrarNumero(numero)}>{numero}</button></li>)}
              <li> <button onClick={borrarNumero} className="big">borrar</button></li>
            </ol>
          </div>
          <div className="acciones">
            <span className="numero">{numeroMarcar}</span>
            {!llamando ? botonLlamar : botonColgar}
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
