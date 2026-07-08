interface BotonProps {
  texto: string;
  color?: string;
  tamano?: 'pequeno' | 'mediano' | 'grande';
}

function Boton({ texto, color = '#2563eb', tamano = 'mediano' }: BotonProps) {
  const padding = {
    pequeno: '4px 8px',
    mediano: '8px 16px',
    grande: '12px 24px',
  }[tamano];

  const fontSize = {
    pequeno: '12px',
    mediano: '14px',
    grande: '18px',
  }[tamano];

  return (
    <button
      style={{
        backgroundColor: color,
        color: '#fff',
        padding,
        fontSize,
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      {texto}
    </button>
  );
}

export default Boton;