import './Estilos.css';

// Técnica 3: CSS-in-JS con objeto JavaScript separado
const estiloCajaJS: React.CSSProperties = {
  border: '2px dashed #16a34a',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: '#f0fdf4',
  fontFamily: 'monospace',
};

function Estilos() {
  return (
    <div>
      <h2>Estilos en JSX</h2>

      {/* Técnica 1: estilos en línea con objeto directo */}
      <div
        style={{
          border: '2px solid #dc2626',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '12px',
          color: '#dc2626',
        }}
      >
        Estilo en línea (inline)
      </div>

      {/* Técnica 2: clases CSS definidas en un archivo .css */}
      <div className="tarjeta-estilos tarjeta-estilos--destacada">
        Estilo mediante clase CSS externa
      </div>

      {/* Técnica 3: objeto de estilos reutilizable (CSS-in-JS) */}
      <div style={estiloCajaJS}>Estilo mediante objeto JS (CSS-in-JS)</div>
    </div>
  );
}

export default Estilos;