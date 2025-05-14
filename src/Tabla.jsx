import './Tabla.css';
import { useTable } from './useTable';

function Tabla() {
  const {
    filter,
    handleFilterChange,
    currentItems,
    currentPage,
    totalPages,
    setCurrentPage,
    loading,
  } = useTable();

  return (
    <div className="table-wrapper">
      <h2>📋 Usuarios</h2>

      <input
        type="text"
        placeholder="Filtrar por nombre..."
        value={filter}
        onChange={handleFilterChange}
        className="filter-input"
      />

      {loading ? (
        <p className="status">Cargando...</p>
      ) : (
        <>
          <table className="data-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Ciudad</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length === 0 ? (
                <tr>
                  <td colSpan="4" className="no-results">No hay resultados</td>
                </tr>
              ) : (
                currentItems.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="pagination">
            <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
              ◀ Anterior
            </button>
            <span>
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Siguiente ▶
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Tabla;
