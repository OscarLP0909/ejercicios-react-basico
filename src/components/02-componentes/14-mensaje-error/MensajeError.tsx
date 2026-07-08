interface MensajeErrorProps {
  error?: string | null;
}

function MensajeError({ error }: MensajeErrorProps) {
  return (
    <div>
      {error && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#991b1b',
            backgroundColor: '#fee2e2',
            padding: '8px 12px',
            borderRadius: '6px',
          }}
        >
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

export default MensajeError;