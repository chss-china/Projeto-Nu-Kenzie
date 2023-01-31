import "./App.css";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import List from "./components/list";

import Header from "./components/headers/index";

import Form from "./components/form";

import Valuetotal from "./components/totalmoney";
import Home from "./components/home/index";
function App() {
  const [listTransactions, setListTransactions] = useState([
    {
      description: "Salário recebido",
      type: "entrada",
      value: 2500,
      id: uuidv4(),
    },
    { description: "Conta de luz", type: "saída", value: 150, id: uuidv4() },
    {
      description: "Mensalidade da faculdade",
      type: "saída",
      value: 700,
      id: uuidv4(),
    },
    {
      description: "Hora extra do trabalho",
      type: "entrada",
      value: 200,
      id: uuidv4(),
    },
  ]);
  function add_entries(Form) {
    setListTransactions([...listTransactions, Form]);
    console.log(listTransactions);
  }
  function removeItems(MyListId) {
    console.log(MyListId);
    const filter_list = listTransactions.filter((list) => list.id !== MyListId);
    setListTransactions(filter_list);
    console.log(filter_list);
  }
  const [page, setPage] = useState(true);
  console.log(listTransactions);
  if (page === false) {
    return (
      <div className="App">
        <Header setPage={setPage} />
        <div className="App-header">
          <div className="div_inputs_list">
            <div className="div_form_amount">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <Valuetotal
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </div>
            <div className="div_list">
              <List
                listTransactions={listTransactions}
                removeItems={removeItems}
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
