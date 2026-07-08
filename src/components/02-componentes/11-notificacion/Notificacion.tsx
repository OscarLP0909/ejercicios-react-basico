type TipoNotificacion = 'exito' | 'error' | 'advertencia';

interface NotificacionProps {
  tipo: TipoNotificacion;
  mensaje: string;
}

const estilosPorTipo: Record<TipoNotificacion, { backgroundColor: string; color: string; icono: string }> = {
  exito: { backgroundColor: '#dcfce7', color: '#166534', icono: '✅' },
  error: { backgroundColor: '#fee2e2', color: '#991b1b', icono: '❌' },
  advertencia: { backgroundColor: '#fef9c3', color: '#854d0e', icono: '⚠️' },
};

function Notificacion({ tipo, mensaje }: NotificacionProps) {
  const estilo = estilosPorTipo[tipo];

  return (
    <div
      style={{
        backgroundColor: estilo.backgroundColor,
        color: estilo.color,
        padding: '12px 16px',
        borderRadius: '6px',
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <span>{estilo.icono}</span>
      <span>{mensaje}</span>
    </div>
  );
}

export default Notificacion;