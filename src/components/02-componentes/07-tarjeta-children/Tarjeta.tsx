import type { ReactNode } from 'react';

interface TarjetaProps {
  children: ReactNode;
}

function Tarjeta({ children }: TarjetaProps) {
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        marginBottom: '12px',
      }}
    >
      {children}
    </div>
  );
}

export default Tarjeta;