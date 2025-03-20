import React from "react";

import styles from "./MyCss.module.css";

const MyCss = () => {
  return (
    <div>
      <h1 className={styles.meuTitulo}>
        Texto do component MyCss 
      </h1>
    </div>
  );
};

export default MyCss;
