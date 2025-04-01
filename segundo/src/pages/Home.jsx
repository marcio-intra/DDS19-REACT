import React from "react";

import { Navigate } from "react-router-dom";

const Home = () => {
  const isAuth = true;

  return (
    <div>
      {
      isAuth 
      ? <Navigate to="/" /> 
      : <Navigate to="/login" />
      }
      Home
    </div>
  );
};

export default Home;
