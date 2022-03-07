import React from "react";
import "./Home.css";

import Header from "components/Header/Header";
import TableStorage from "components/Table/Table";

const PagesHome = () => {
  return (
    <div className="home">
      <Header />
      <TableStorage />
    </div>
  );
};

export default PagesHome;
