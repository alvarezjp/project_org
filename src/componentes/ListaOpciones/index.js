import "./ListaOpciones.css";
const ListaOpciones = (props) => {
  //Metodo map -> arreglo.map((equipos,index)=>{
  //
  //})
  const equipos = [
    "Programacion",
    "Front End",
    "Data Science",
    "Devops",
    "UX y diseño",
    "Movil",
    "Innovacion y gestion",
  ];

  const manejarCambio = (e) => {
    console.log("cambio",e.target.value)
    props.actualizarEquipo(e.target.value)
  }
  return (
    <div className="lista-opciones">
      <label>Equipo</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        {equipos.map((equipo,index)=>{
            return <option key={index}value={equipo}>{equipo}</option>
        })}
      </select>
    </div>
  );
};

export default ListaOpciones;
