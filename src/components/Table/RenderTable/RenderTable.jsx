import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import "./RenderTable.css";

export default function RenderTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  async function deleteProduct(event) {
    const productId = event.target.id;
    await api.delete(`/products`, {
      data: {
        id: productId,
      },
    });

    setProducts(products.filter((product) => product._id !== productId));

    window.location.reload();
  }

  return (
    <div className="table-container">
      <table id="products">
        <thead>
          <tr>
            <th className="none-mobile">ID</th>
            <th>NOME</th>
            <th>QUANTIDADE</th>
            <th>PREÇO(R$)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="none-mobile">{product._id}</td>
              <td>{product.title}</td>
              <td>{product.quantity}</td>
              <td>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </td>
              <td>
                <button
                  id={product._id}
                  className="delete-button"
                  onClick={async (event) => await deleteProduct(event)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
