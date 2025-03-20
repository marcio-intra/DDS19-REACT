import "./MeuCss.css";

const MeuCss = () => {
  return (
    <div>
      <h1>Meu titulo do component</h1>
      <p>Parágrafo 1</p>
      <p className="meuTitulo">Parágrafo 2</p>
      <p
        style={{ color: "green", backgroundColor: "yellow", fontSize: "80px" }}
      >
        Parágrafo 3
      </p>
    </div>
  );
};

export default MeuCss;
