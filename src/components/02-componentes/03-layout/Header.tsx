import Navegacion from '../01-navegacion/Navegacion';

function Header() {
  return (
    <header className="layout-header">
      <h1>Mi Aplicación</h1>
      <Navegacion />
    </header>
  );
}

export default Header;