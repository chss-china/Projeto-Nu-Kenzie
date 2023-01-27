import "./styles.css";
function Header({ setPage }) {
  return (
    <div className="div_header">
      <h1 className="titulo_kenzie">
        <span className="span_nu_titulo">Nu</span> Kenzie
      </h1>
      <button
        type="button"
        onClick={() => setPage(true)}
        className="span_inicio"
      >
        Inicio
      </button>
    </div>
  );
}
export default Header;
// <img src="../imagens/Nu Kenzie.png" />//perguntar como faz para colocar imagem no header
