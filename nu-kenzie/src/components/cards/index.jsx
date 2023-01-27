import "./styles.css";
import trash from "../imagens/trash (1).png";
function Card({ removeItens, transaction, listTransactions }) {
  console.log(listTransactions);
  console.log(removeItens);
  console.log(transaction);
  console.log(transaction.description);
  return (
    <>
      <div
        className={`div_pai_lista ${
          transaction.type === "entrada"
            ? "borda_left_entrada"
            : "borda_left_saida"
        }`}
      >
        <div className="div_descricao_valor_x">
          <p className="descricao_lista">{transaction.description}</p>
          <div className="div_valor_fechar">
            <span className="valor_lista">
              {"R$" + transaction.value + ".00"}
            </span>

            <img
              src={trash}
              alt="imagem_deletar"
              onClick={() => removeItens(transaction.description)}
              className="fechar"
            />
          </div>
        </div>
        <span className="tipo_lista">{transaction.type}</span>
      </div>
    </>
  );
}

export default Card;
// {transaction.description === "" ? <h1>Você ainda não possui nenhum lançamento</h1>}
//{transaction.type === "entrada" ? <div className="div_pai_lista" "borda_left_entrada" >{transaction.type} </div> }
/*{transaction.type === "entrada" ?(
<div className="div_pai_lista" "borda_left_entrada" >{transaction.type}</div>): 
       (<div className="div_pai_lista" "borda_left_saida" >{transaction.type}</div>) }*/
