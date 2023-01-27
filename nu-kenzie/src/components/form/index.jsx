import "./styles.css";
import { useState } from "react";
function Form({ listTransactions, setListTransactions }) {
  //const [userInput, setUserInput] = userState("");
  const [inputValue, setInputvalue] = useState("");
  console.log(inputValue);
  const [inputValueValor, setinputValueValor] = useState("");
  console.log(inputValueValor);

  const [inputValorType, setinputValorType] = useState("");
  console.log(inputValorType);

  function handleOnSubmit(event) {
    event.preventDefault();
    const obj = {
      description: inputValue,
      value: Number(inputValueValor),
      type: inputValorType,
    };

    console.log(obj);
    setListTransactions([...listTransactions, obj]);
    /* adicionar_entradas(obj);
    setInputvalue(obj);
    setinputValueValor(obj);
    setinputValorType(obj);*/
  }

  return (
    <ul>
      <li>
        <form onSubmit={handleOnSubmit}>
          <div className="div_inputs">
            <div className="div_descricao_valor_exemplo">
              <label className="label_descricao" htmlFor="descricao">
                Descrição
              </label>
              <input
                value={inputValue}
                onChange={(event) => setInputvalue(event.target.value)}
                className="input_descricao"
                type="text"
                placeholder="Digite aqui sua descrição"
                id="descricao"
                required="true"
              />
              <span className="span_exemplo">Ex:Compra de roupas</span>
              <div className="inputs_label_valor_botao">
                <div className="div_input_valor_tipo">
                  <div className="div_label_input_valor">
                    <label className="label_valor" htmlFor="valor">
                      Valor
                    </label>
                  </div>

                  <input
                    value={inputValueValor}
                    onChange={(event) => setinputValueValor(event.target.value)}
                    className="input_valor"
                    type="number"
                    placeholder="R$"
                    id="valor"
                    required="true"
                  />
                </div>
                <div className="div_label_tipo_valor">
                  <label className="tipo_valor_label" htmlFor="tipo_valor">
                    Tipo de Valor
                  </label>
                  <select
                    value={inputValorType}
                    onChange={(event) => setinputValorType(event.target.value)}
                    className="tipo_valor"
                    id="tipo_valor"
                  >
                    <option value="entrada">Entrada</option>
                    <option value="saida">Saída</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="botao_inserir_valor">
                Inserir Valor
              </button>
            </div>
          </div>
        </form>
      </li>
    </ul>
  );
}

export default Form;
