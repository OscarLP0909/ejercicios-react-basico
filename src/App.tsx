import './App.css';
import TarjetaPerfil from './components/02-tarjeta-perfil/TarjetaPerfil';
import Header from './components/07-header/Header';
import Bienvenida from './components/10-conversion/Conversion';
import Expresiones from './components/11-expresiones/Expresiones';
import ListaTareas from './components/12-lista-tareas/ListaTareas';
import Tarjeta from './components/13-correccion-errores/Correccion';

function App() {

  return (
    <>
      <Header />
      <TarjetaPerfil />
      <Bienvenida />
      <Expresiones />
      <ListaTareas />
      <Tarjeta />
    </>
  );
}

export default App;
