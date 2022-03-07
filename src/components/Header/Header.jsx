import React, { useContext } from "react";
import StoreContext from "components/Store/Context";
import "./Header.css";

const Header = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <header className="header-container">
      <div className="text-container">
        <h1 className="header-text">Trabalho de AIC II</h1>
      </div>
      <div className="logout-container">
        <button
          className="logout-button"
          type="button"
          onClick={() => setToken(null)}
        >
          Sair
        </button>
      </div>
    </header>
  );
};

export default Header;
