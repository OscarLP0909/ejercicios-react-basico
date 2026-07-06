import { useState } from 'react';

type Estado = 'cargando' | 'exito' | 'error';

function Condicional() {
    const [estado, setEstado] = useState<Estado>('cargando');

    return (
        <div className="condicional">
            <h2>Renderizado condicional</h2>

            <div className="condicional__botones">
                <button onClick={() => setEstado('cargando')}>Cargando</button>
                <button onClick={() => setEstado('exito')}>Éxito</button>
                <button onClick={() => setEstado('error')}>Error</button>
            </div>

            {/* 1. Operador ternario */}
            <p>
                {estado === 'exito' ? (
                    <span className="text-success">Operación completada con éxito</span>
                ) : (
                    <span className="text-muted">Aún no ha terminado</span>
                )}
            </p>

            {/* 2. Operador && (renderiza solo si la condición es verdadera) */}
            {estado === 'cargando' && <p className="text-info">Cargando datos, espera un momento...</p>}
            {estado === 'error' && <p className="text-danger">Ha ocurrido un error al procesar la solicitud</p>}

            {/* 3. Variable/función auxiliar que devuelve JSX según el caso */}
            <p>{renderMensaje(estado)}</p>
        </div>
    );
}

// Función auxiliar: útil cuando hay más de 2-3 casos posibles (mejor que anidar ternarios)
function renderMensaje(estado: Estado) {
    switch (estado) {
        case 'cargando':
            return '⏳ Estado actual: cargando';
        case 'exito':
            return '✅ Estado actual: éxito';
        case 'error':
            return '❌ Estado actual: error';
    }
}

export default Condicional;