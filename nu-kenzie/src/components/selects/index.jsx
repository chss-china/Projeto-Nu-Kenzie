export function Selects({ inputValorType, setinputValorType }) {
  return (
    <>
      <select
        value={inputValorType}
        onChange={(event) => setinputValorType(event.target.value)}
        className="type_value"
        id="tipo_valor"
      >
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select>
    </>
  );
}
