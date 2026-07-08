import { useState } from 'react';

interface Tarea {
  id: string;
  titulo: string;
  completada: boolean;
}

type Filtro = 'todas' | 'completadas' | 'pendientes';

interface ListaTareasFiltroProps {
  tareas: Tarea[];
}

function ListaTareasFiltro({ tareas }: ListaTareasFiltroProps) {
  const [filtro, setFiltro] = useState<Filtro>('todas');

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'completadas') return tarea.completada;
    if (filtro === 'pendientes') return !tarea.completada;
    return true; // 'todas'
  });

  return (
    <div className="lista-tareas-filtro">
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <button onClick={() => setFiltro('todas')} disabled={filtro === 'todas'}>
          Todas
        </button>
        <button onClick={() => setFiltro('completadas')} disabled={filtro === 'completadas'}>
          Completadas
        </button>
        <button onClick={() => setFiltro('pendientes')} disabled={filtro === 'pendientes'}>
          Pendientes
        </button>
      </div>

      <ul>
        {tareasFiltradas.map((tarea) => (
          <li
            key={tarea.id}
            style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}
          >
            {tarea.titulo}
          </li>
        ))}
      </ul>

      {tareasFiltradas.length === 0 && <p>No hay tareas que coincidan con este filtro.</p>}
    </div>
  );
}

export default ListaTareasFiltro;