interface PerfilProps {
  nombre?: string;
  email?: string;
  ocupacion?: string;
}

function Perfil({ nombre, email, ocupacion }: PerfilProps) {
  const errores: string[] = [];

  if (!nombre || nombre.trim() === '') {
    errores.push('El campo "nombre" es obligatorio.');
  }
  if (!email || email.trim() === '') {
    errores.push('El campo "email" es obligatorio.');
  }

  if (errores.length > 0) {
    return (
      <div className="perfil perfil--error" style={{ color: '#dc2626', border: '1px solid #dc2626', padding: '12px', borderRadius: '6px' }}>
        <strong>No se puede mostrar el perfil:</strong>
        <ul>
          {errores.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="perfil" style={{ border: '1px solid #e5e7eb', padding: '12px', borderRadius: '6px' }}>
      <h3>{nombre}</h3>
      <p>{email}</p>
      {ocupacion && <p>{ocupacion}</p>}
    </div>
  );
}

export default Perfil;