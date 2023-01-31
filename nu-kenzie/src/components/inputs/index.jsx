export function InputDescription({ inputValue, setInputvalue }) {
  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputvalue(event.target.value)}
        className="input_description"
        type="text"
        placeholder="Digite aqui sua descrição"
        id="description"
        required="true"
      />
    </>
  );
}
export function InputValue({ inputValueValue, setinputValueValue }) {
  return (
    <>
      <input
        value={inputValueValue}
        onChange={(event) => setinputValueValue(event.target.value)}
        className="input_value"
        type="number"
        placeholder="R$"
        id="value"
        required="true"
      />
    </>
  );
}
