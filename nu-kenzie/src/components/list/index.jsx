import "./styles.css";
import Card from "../cards";
import Nocard from "../images/NoCard.png";
function List({ listTransactions, removeItems }) {
  console.log(listTransactions);
  return (
    <>
      <h3 className="titulo_financial_Summary">Resumo Financeiro</h3>
      <ul>
        {listTransactions.length == 0 ? (
          <>
            <h1 className="title_without_launchc">
              Você ainda não possui nenhum lançamento
            </h1>
            <img
              className="img_without_launchc"
              src={Nocard}
              alt="img_without_launchc"
            />
          </>
        ) : (
          <li>
            {listTransactions.map((transaction, index) => {
              return (
                <Card
                  listTransactions={listTransactions}
                  removeItems={removeItems}
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
export default List;
