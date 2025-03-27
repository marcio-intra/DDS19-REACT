import React from "react";

import { Link } from "react-router-dom";

const PaginaErro = () => {
  return (
    <div>
      <h1>PaginaErro</h1>
      <br />
      <Link to="/home"> Pagina inicial </Link>
    </div>
  );
};

export default PaginaErro;
