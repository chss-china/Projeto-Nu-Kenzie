import "./styles.css";
import { ButtonsHeader } from "../buttons";
function Header({ setPage }) {
  return (
    <div className="div_header">
      <h1 className="title_kenzie">
        <span className="span_nu_title">Nu</span> Kenzie
      </h1>
      <ButtonsHeader setPage={setPage} />
    </div>
  );
}
export default Header;
// <img src="../imagens/Nu Kenzie.png" />//perguntar como faz para colocar imagem no header
