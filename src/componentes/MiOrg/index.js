import "./MiOrg.css";
import { useState } from "react";
const MiOrg = (props) => {
  //Estado - hooks
  //usesState
  //const [nombreVariable,funcionActualizar]=useState(valorInicial)
    console.log(props)
//   const[mostrar,actualizarMostrar] = useState(true);

//   const manejarClick = () => {
//     console.log("mostrar/ocultar elementos",!mostrar);
//     actualizarMostrar(!mostrar);
//   };
  return (
    <section className="orgSection">
      <h3 className="title">Mi organización </h3>
      <img src="/img/add.svg" alt="add" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;
