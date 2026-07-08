import { useState } from 'react';

function AtributosDinamicos() {
  const [activo, setActivo] = useState(false);
  const [nombre, setNombre] = useState('');
  const [timestamp] = useState(() => Date.now());

  const formularioValido = nombre.trim().length > 0;

  return (
    <div className="atributos-dinamicos">
      <h2>Atributos dinámicos en JSX</h2>

      <button onClick={() => setActivo(!activo)}>
        {activo ? 'Desactivar' : 'Activar'}
      </button>

      {/* 1. className dinámico */}
      <div
        className={activo ? 'caja caja--activa' : 'caja caja--inactiva'}
      >
        Esta caja cambia de clase según el estado ({activo ? 'activa' : 'inactiva'})
      </div>

      {/* 2. style dinámico */}
      <div
        style={{
          backgroundColor: activo ? '#dcfce7' : '#fee2e2',
          color: activo ? '#166534' : '#991b1b',
          padding: '12px',
          borderRadius: '6px',
          marginTop: '8px',
        }}
      >
        Este estilo cambia según el estado
      </div>

      {/* 3. atributo data-* dinámico */}
      <div
        data-estado={activo ? 'activo' : 'inactivo'}
        data-timestamp={timestamp}
        style={{ marginTop: '8px' }}
      >
        Inspecciona este elemento con DevTools para ver los atributos data-*
      </div>

      {/* 4. disabled condicional */}
      <div style={{ marginTop: '8px' }}>
        <input
          type="text"
          placeholder="Escribe tu nombre para habilitar el botón"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button disabled={!formularioValido}>
          Enviar {!formularioValido && '(escribe tu nombre primero)'}
        </button>
      </div>
    </div>
  );
}

export default AtributosDinamicos;