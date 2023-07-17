import React from "react";
import "./index.scss";

const EditScreen = () => {
  return (
    <div className="editScreen">
      <h1>Deseja editar esse item?</h1>
      <h2>Colocar as descrições das tarefas aqui.</h2>
      <button className="noButton">Não</button>
      <button className="yesButton">Sim</button>
    </div>
  );
};

export default EditScreen;
