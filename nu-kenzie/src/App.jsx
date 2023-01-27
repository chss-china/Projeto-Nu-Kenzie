import "./App.css";
import { useState } from "react";
import Lista from "./components/list";
import Header from "./components/headers/index";
import Form from "./components/form";
import Renderformulario from "./components/render formulario";
import Valortotal from "./components/totalmoney";
import Home from "./components/home/index";
function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: 150 },
    { description: "Mensalidade da faculdade", type: "saída", value: 700 },
    { description: "Hora extra do trabalho", type: "entrada", value: 200 },
  ]);
  function adicionar_entradas(Form) {
    setListTransactions([...listTransactions, Form]);
    console.log(listTransactions);
  }
  function removeItens(elementoClicado) {
    console.log(elementoClicado);
    const filtrar_lista = listTransactions.filter(
      (lista) => lista.description !== elementoClicado
    );
    setListTransactions(filtrar_lista);
    console.log(filtrar_lista);
  }
  const [page, setPage] = useState(true);
  console.log(listTransactions);
  if (page === false) {
    return (
      <div className="App">
        <Header setPage={setPage} />
        <div className="App-header">
          <div className="div_inputs_lista">
            <div className="div_form_valor_total">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <Valortotal
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </div>
            <div className="div_lista">
              <Lista
                listTransactions={listTransactions}
                removeItens={removeItens}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Home page={page} setPage={setPage} />;
  }
}

export default App;
//<Home page={page} setPage={setPage} />;
