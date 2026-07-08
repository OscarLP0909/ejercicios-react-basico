interface Tarea {
    id: number;
    titulo: string;
    descripcion: string;
    completada: boolean;
}

const tareas: Tarea[] = [
    {
        id: 1,
        titulo: 'Terminar ejercicios de React',
        descripcion: 'Completar los 17 ejercicios básicos antes de empezar en EY',
        completada: false,
    },
    {
        id: 2,
        titulo: 'Configurar ESLint y Prettier',
        descripcion: 'Integrar ambas herramientas sin conflictos de reglas',
        completada: true,
    },
    {
        id: 3,
        titulo: 'Migrar proyecto a TypeScript',
        descripcion: 'Renombrar archivos y tipar props correctamente',
        completada: true,
    },
];

function ListaTareas() {
    return (
        <div className="lista-tareas">
            <h2>Mis tareas</h2>
            <ul>
                {tareas.map((tarea) => (
                    <li
                        key={tarea.id}
                        className={tarea.completada ? 'tarea tarea--completada' : 'tarea tarea--pendiente'}
                    >
                        <h3>{tarea.titulo}</h3>
                        <p>{tarea.descripcion}</p>
                        <span className="tarea__estado">
                            {tarea.completada ? '✅ Completada' : '⏳ Pendiente'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaTareas;