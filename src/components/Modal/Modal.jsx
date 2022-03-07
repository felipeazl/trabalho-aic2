import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./Modal.css";

const Modal = ({ onClose = () => {} }) => {
  const initialValue = {
    title: "",
    quantity: 0,
    price: 0,
  };
  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    api.post("/products", values).then((response) => {
      history.push("/");
      window.location.reload();
    });
  }
  return (
    <div className="modal">
      <div className="container">
        <div className="modal-header">
          <h1 className="modal-title">Sistema de Estoque</h1>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="form-area">
          <form onSubmit={onSubmit}>
            <div className="add-product__form-control">
              <label>Nome</label>
              <input id="title" type="text" name="title" onChange={onChange} />
            </div>
            <div className="add-product__form-control">
              <label>Quantidade</label>
              <input
                id="quantity"
                type="number"
                name="quantity"
                onChange={onChange}
              />
            </div>
            <div className="add-product__form-control">
              <label>Preço</label>
              <input
                step="0.01"
                id="price"
                type="number"
                name="price"
                onChange={onChange}
              />
            </div>
            <div className="button-area">
              <button type="submit" className="add-product__button">
                Adicionar Produto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
