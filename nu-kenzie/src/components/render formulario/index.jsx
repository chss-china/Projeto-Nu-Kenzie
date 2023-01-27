import { useState } from "react";
function Renderformulario() {
  const [isloggin, setIsLoggedIn] = useState(true);
  function handleLogout() {
    setIsLoggedIn(false);
  }
  return (
    <button onCLick={handleLogout} className="botao_inserir_valor">
      Inserir Valor
    </button>
  );
}
export default Renderformulario;
