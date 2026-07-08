import { useState } from 'react';

// Componente secundario 1: exportación con nombre
export function CampoTexto({
  etiqueta,
  valor,
  onChange,
}: {
  etiqueta: string;
  valor: string;
  onChange: (valor: string) => void;
}) {
  return (
    <label className="campo-texto">
      {etiqueta}
      <input
        type="text"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

// Componente secundario 2: exportación con nombre
export function BotonEnviar({ texto = 'Enviar' }: { texto?: string }) {
  return <button type="submit">{texto}</button>;
}

// Componente principal: exportación por defecto
function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos enviados:', { nombre, email });
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <CampoTexto etiqueta="Nombre" valor={nombre} onChange={setNombre} />
      <CampoTexto etiqueta="Email" valor={email} onChange={setEmail} />
      <BotonEnviar texto="Registrarse" />
    </form>
  );
}

export default Formulario;