export function Buttons() {
  return (
    <>
      <button type="submit" className="button_insert_value">
        Inserir Valor
      </button>
      ;
    </>
  );
}
export function ButtonsHeader({ setPage }) {
  return (
    <>
      <button
        type="button"
        onClick={() => setPage(true)}
        className="span_start"
      >
        Inicio
      </button>
    </>
  );
}
export function ButtonHome({ setPage }) {
  return (
    <>
      <button
        className="button_start_home"
        type="button"
        onClick={() => setPage(false)}
      >
        Iniciar
      </button>
    </>
  );
}
