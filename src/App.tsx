import './App.css';
import TarjetaPerfil from './components/02-tarjeta-perfil/TarjetaPerfil';
import Header from './components/07-header/Header';
import Bienvenida from './components/10-conversion/Conversion';
import Expresiones from './components/11-expresiones/Expresiones';
import ListaTareas from './components/12-lista-tareas/ListaTareas';
import Tarjeta from './components/13-correccion-errores/Correccion';
import Condicional from './components/14-condicional/Condicional';
import Estilos from './components/15-estilos/Estilos';
import Lista from './components/16-Lista/Lista';
import AtributosDinamicos from './components/17-atributos-dinamicos/AtributosDinamicos';

function App() {

  return (
    <>
      <Header />
      <br></br>
      <TarjetaPerfil />
      <br></br>
      <Bienvenida />
      <br></br>
      <Expresiones />
      <br></br>
      <ListaTareas />
      <br></br>
      <Tarjeta />
      <br></br>
      <Condicional />
      <br></br>
      <Estilos />
      <br></br>
      <Lista />
      <br></br>
      <AtributosDinamicos />
    </>
  );
}

export default App;
