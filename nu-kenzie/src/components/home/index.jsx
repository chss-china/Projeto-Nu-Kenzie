import "./styles.css";
import illustration from "../images/Illustration.png";
import { ButtonHome } from "../buttons";
function Home({ setPage }) {
  return (
    <div className="div_everything_home">
      <div className="div_title_button_home">
        <h2 className="title_nu_kenzie_home">
          <span className="span_nu_home">Nu</span> Kenzie
        </h2>
        <h1 className="title_finance">
          Centralize o<br></br> controle das suas<br></br> finanças
        </h1>
        <span className="span_quick_way">de forma rapida e segura</span>
        <ButtonHome setPage={setPage} />
      </div>
      <img className="img_home" src={illustration} alt="img_home" />
    </div>
  );
}
export default Home;
