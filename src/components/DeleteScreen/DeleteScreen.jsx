import React from "react";
import "./index.scss";

const DeleteScreen = () => {
  function deleteItem(id) {}

  return (
    <div className="deleteScreen">
      <h1>Deseja excluir esse item?</h1>
      <h2>Colocar as descrições das tarefas aqui.</h2>
      <div className="buttons">
        <button className="noButton">Não</button>
        <button className="yesButton">Sim</button>
      </div>
    </div>
  );
};

export default DeleteScreen;
