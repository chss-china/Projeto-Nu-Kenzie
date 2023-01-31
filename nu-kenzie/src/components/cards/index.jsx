import "./styles.css";
import trash from "../images/trash (1).png";
function Card({ removeItems, transaction, listTransactions }) {
  console.log(listTransactions);
  console.log(removeItems);
  console.log(transaction);
  console.log(transaction.description);
  return (
    <>
      <div
        className={`div_father_list ${
          transaction.type === "entrada"
            ? "border_left_Prohibited"
            : "border_left_exit"
        }`}
      >
        <div className="div_description_value_x">
          <p className="description_list">{transaction.description}</p>
          <div className="div_value_close">
            <span className="value_list">
              {"R$" + transaction.value + ".00"}
            </span>

            <img
              src={trash}
              alt="image_delete"
              onClick={() => removeItems(transaction.id)}
              className="close"
            />
          </div>
        </div>
        <span className="type_list">{transaction.type}</span>
      </div>
    </>
  );
}

export default Card;
