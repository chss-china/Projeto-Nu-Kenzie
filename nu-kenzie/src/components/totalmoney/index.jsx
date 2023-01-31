import { useState } from "react";
import "./styles.css";
function Valuetotal({ listTransactions, setListTransactions }) {
  console.log(listTransactions);

  const total_sum = listTransactions.reduce((accumulator, currentValue) => {
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
          <div className="div_value_total">
            <p className="p_value_total">Valor Total:</p>
            <p className="result_value">{total_sum}</p>
          </div>
          <span className="span_value_refer">O valor se refere ao saldo</span>
        </div>
      </li>
    </ul>
  );
}

export default Valuetotal;
