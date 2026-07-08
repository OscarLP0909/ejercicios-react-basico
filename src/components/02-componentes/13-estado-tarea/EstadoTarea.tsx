interface EstadoTareaProps {
  completada: boolean;
  titulo: string;
}

function EstadoTarea({ completada, titulo }: EstadoTareaProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        borderRadius: '6px',
        backgroundColor: completada ? '#dcfce7' : '#f3f4f6',
        textDecoration: completada ? 'line-through' : 'none',
        color: completada ? '#166534' : '#374151',
      }}
    >
      <span>{completada ? '✅' : '⏳'}</span>
      <span>{titulo}</span>
      <span style={{ marginLeft: 'auto', fontStyle: 'italic', fontSize: '12px' }}>
        {completada ? 'Completada' : 'Pendiente'}
      </span>
    </div>
  );
}

export default EstadoTarea;