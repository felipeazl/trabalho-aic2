import React, { useState } from "react";
import "./TableHeader.css";
import Modal from "../../Modal/Modal";

const TableHeader = () => {
  const [ModalVisible, setModalVisible] = useState(false);

  return (
    <div className="infos-container">
      <h1 className="title">Sistema de Estoque</h1>
      <button className="modal-button" onClick={() => setModalVisible(true)}>
        Adicionar
      </button>
      {ModalVisible ? <Modal onClose={() => setModalVisible(false)} /> : null}
    </div>
  );
};

export default TableHeader;
