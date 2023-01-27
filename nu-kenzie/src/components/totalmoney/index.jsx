import { useState } from "react";
import "./styles.css";
function Valortotal({ listTransactions, setListTransactions }) {
  console.log(listTransactions);

  const soma_total = listTransactions.reduce((accumulator, currentValue) => {
    console.log(currentValue);
    if (currentValue.type === "") {
      currentValue.type = "entrada";
    }
    if (currentValue.type === "entrada") {
      return accumulator + currentValue.value;
    } else {
      return accumulator - currentValue.value;
    }
  }, 0);

  return (
    <ul>
      <li className="li_total">
        <div className="div_total">
          <div className="div_valor_total">
            <p className="p_valor_total">Valor Total:</p>
            <p className="resultado_valor">{soma_total}</p>
          </div>
          <span className="span_valor_refere">O valor se refere ao saldo</span>
        </div>
      </li>
    </ul>
  );
}

export default Valortotal;
