import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import { useState } from "react";
import { Buttons } from "../buttons/index";
import { Selects } from "../selects";
import { InputDescription } from "../inputs";
import { InputValue } from "../inputs";
function Form({ listTransactions, setListTransactions }) {
  //const [userInput, setUserInput] = userState("");
  const [inputValue, setInputvalue] = useState("");
  console.log(inputValue);
  const [inputValueValue, setinputValueValue] = useState("");
  console.log(inputValueValue);

  const [inputValorType, setinputValorType] = useState("");
  console.log(inputValorType);

  function handleOnSubmit(event) {
    event.preventDefault();
    const obj = {
      description: inputValue,
      value: Number(inputValueValue),
      type: inputValorType,
      id: uuidv4(),
    };
    console.log(obj);
    setListTransactions([...listTransactions, obj]);
    console.log(listTransactions);
  }

  return (
    <ul>
      <li>
        <form onSubmit={handleOnSubmit}>
          <div className="div_inputs">
            <div className="div_description_value_example">
              <label className="label_description" htmlFor="description">
                Descrição
              </label>
              <InputDescription
                inputValue={inputValue}
                setInputvalue={setInputvalue}
              />
              <span className="span_example">Ex:Compra de roupas</span>
              <div className="inputs_label_value_button">
                <div className="div_input_value_type">
                  <div className="div_label_input_value">
                    <label className="label_value" htmlFor="value">
                      Valor
                    </label>
                  </div>

                  <InputValue
                    inputValueValue={inputValueValue}
                    setinputValueValue={setinputValueValue}
                  />
                </div>
                <div className="div_label_type_value">
                  <label className="type_value_label" htmlFor="type_value">
                    Tipo de Valor
                  </label>
                  <Selects
                    inputValorType={inputValorType}
                    setinputValorType={setinputValorType}
                  />
                </div>
              </div>
              <Buttons />
            </div>
          </div>
        </form>
      </li>
    </ul>
  );
}

export default Form;
