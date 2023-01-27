import "./styles.css";
import illustration from "../imagens/Illustration.png";
function Home({ setPage }) {
  return (
    <div className="div_tudo_home">
      <div className="div_titulos_botao_home">
        <h2 className="titulo_nu_kenzie_home">
          <span className="span_nu_home">Nu</span> Kenzie
        </h2>
        <h1 className="titulo_financas">
          Centralize o<br></br> controle das suas<br></br> finanças
        </h1>
        <span className="span_forma_rapida">de forma rapida e segura</span>
        <button
          className="botao_iniciar_home"
          type="button"
          onClick={() => setPage(false)}
        >
          Iniciar
        </button>
      </div>
      <img className="img_home" src={illustration} alt="img_home" />
    </div>
  );
}
export default Home;
