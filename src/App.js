import "./App.scss";
import papel from "./imagenes/papel.jpg";
import piedra from "./imagenes/piedra.jpg";
import tijeras from "./imagenes/tijeras.jpg";

function App() {
  const ataque = ["Piedra", "Papel", "Tijeras"];
  const veredicto = ["Ganaste", "Empate", "Perdiste"];
  let randon = () => {
    let elegido = [ataque[Math.floor(Math.random() * ataque.length)]];
    return elegido;
  };

  const reintentar = (boton) => {
    document.getElementById(`${boton}`).style.display = "none";
  };

  const Ganador = (Jugador) => {
    let maquina = randon();
    switch (Jugador + maquina) {
      //empates

      case "PapelPapel":
        document.getElementById("Empate").style.display = "block";
        break;

      case "TijerasTijeras":
        document.getElementById("Empate").style.display = "block";

        break;

      case "PiedraPiedra": {
        document.getElementById("Empate").style.display = "block";
        break;
      }
      //Piedra
      case "PiedraTijeras": {
        document.getElementById("Ganaste").style.display = "block";
        break;
      }
      //tijera
      case "TijerasPapel": {
        document.getElementById("Ganaste").style.display = "block";
        break;
      }
      //papel
      case "PapelPiedra": {
        document.getElementById("Ganaste").style.display = "block";
        break;
      }
      default:
        document.getElementById("Perdiste").style.display = "block";
        break;
    }
  };

  return (
    <>
      {veredicto.map((obj) => (
        <div className="Boton" id={obj}>
          <h3>{obj}</h3>
          <button onClick={() => reintentar(obj)}>Reintentar</button>
        </div>
      ))}
      <div>
        <h1>
          <span>P</span>
          <span>i</span>
          <span>e</span>
          <span>d</span>
          <span>r</span>
          <span>a</span>
          <span>,</span>
          <span>p</span>
          <span>a</span>
          <span>p</span>
          <span>e</span>
          <span>l</span>
          <span></span> <span></span>
          <span></span> <span></span>
          <span>o</span>
          <span></span> <span></span>
          <span></span> <span></span>
          <span>t</span>
          <span>i</span>
          <span>j</span>
          <span>e</span>
          <span>r</span>
          <span>a</span>
          <span>s</span>
        </h1>
      </div>
      <div className="Container_components">
        <div onClick={() => Ganador(`Piedra`)} className="Opcion">
          <img src={piedra} alt="img Piedra" />
        </div>
        <div onClick={() => Ganador(`Papel`)} className="Opcion">
          <img src={papel} alt="img papel" />
        </div>
        <div onClick={() => Ganador(`Tijeras`)} className="Opcion">
          <img src={tijeras} alt="img Tijeras" />
        </div>
      </div>
    </>
  );
}

export default App;
