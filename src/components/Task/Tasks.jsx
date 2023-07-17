import React, { useState } from "react";
import "./index.scss";
import Lapis from "../../assets/lapis.png";
import Trash from "../../assets/lixeira.png";
import { Link } from "react-router-dom";
import Delete from "../../views/Delete/Delete";
import Edit from "../../views/Edit/Edit";

const Task = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Coloque uma tarefa!");
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  }

  const [showAdd, setShowDiv] = useState(false);

  const openAdd = () => {
    setShowDiv(true);
  };

  function closeAdd() {
    setShowDiv(false);
  }

  return (
    <div className="task">
      <div className="headerTask">
        <h1>Tarefa</h1>
        <h1>Status</h1>
        <h1>Opções</h1>
      </div>

      <div id="linha"></div>

      <div className="taskPanel">
        {showAdd && (
          <div className="taskPanel__extraTask">
            <input
              type="text"
              name="extraTask"
              id="extraTask"
              placeholder="Adicione uma tarefa..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button
              onClick={() => {
                addItem();
                closeAdd();
              }}
            >
              Adicionar
            </button>
          </div>
        )}

        <div className="taskPanel__listTasks">
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}{" "}
                  <input type="checkbox" name="status" id="status" />
                  <Link to={"Edit"}>
                    <img src={Lapis} alt="" />
                  </Link>
                  <Link to={"Delete"}>
                    <img src={Trash} alt="" />
                  </Link>{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="taskPanel__newTask">
          <h3>Nova tarefa..</h3>
          <p onClick={openAdd} id="push">
            {" "}
            +{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
