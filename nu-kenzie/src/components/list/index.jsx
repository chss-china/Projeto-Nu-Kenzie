import "./styles.css";
import Card from "../cards";
import Nocard from "../imagens/NoCard.png";
function Lista({ listTransactions, removeItens }) {
  console.log(listTransactions);
  return (
    <>
      <h3 className="titulo_resumo_financeiro">Resumo Financeiro</h3>
      <ul>
        {listTransactions.length == 0 ? (
          <>
            <h1 className="titulo_sem_lancamento">
              Você ainda não possui nenhum lançamento
            </h1>
            <img
              clasName="img_sem_lancamento"
              src={Nocard}
              alt="img_sem_lancamento"
            />
          </>
        ) : (
          <li>
            {listTransactions.map((transaction, index) => {
              return (
                <Card
                  listTransactions={listTransactions}
                  removeItens={removeItens}
                  transaction={transaction}
                  key={index}
                />
              );
            })}
          </li>
        )}
      </ul>
    </>
  );
}
export default Lista;
