import Header from './components/01-conceptos-basicos/07-header/Header';
import TarjetaPerfil from './components/01-conceptos-basicos/02-tarjeta-perfil/TarjetaPerfil';
import Bienvenida from './components/01-conceptos-basicos/10-conversion/Conversion.tsx';
import Expresiones from './components/01-conceptos-basicos/11-expresiones/Expresiones';
import ListaTareas from './components/01-conceptos-basicos/12-lista-tareas/ListaTareas';
import Tarjeta from './components/01-conceptos-basicos/13-correccion-errores/Correccion';
import Condicional from './components/01-conceptos-basicos/14-condicional/Condicional';
import Estilos from './components/01-conceptos-basicos/15-estilos/Estilos';
import Lista from './components/01-conceptos-basicos/16-Lista/Lista';
import AtributosDinamicos from './components/01-conceptos-basicos/17-atributos-dinamicos/AtributosDinamicos';

function EjerciciosConceptosBasicos() {
  return (
    <section>
      <h1>01 - Conceptos básicos</h1>
    <br />
      <h2>Ejercicio 2</h2>
      <TarjetaPerfil />
    <br />
      <h2>Ejercicio 7</h2>
      <Header />
    <br />
      <h2>Ejercicio 10</h2>
      <Bienvenida />
    <br />
      <h2>Ejercicio 11</h2>
      <Expresiones />
    <br />
      <h2>Ejercicio 12</h2>
      <ListaTareas />
    <br />
      <h2>Ejercicio 13</h2>
      <Tarjeta />
    <br />
      <h2>Ejercicio 14</h2>
      <Condicional />
    <br />
      <h2>Ejercicio 15</h2>
      <Estilos />
    <br />
      <h2>Ejercicio 16</h2>
      <Lista />
    <br />
      <h2>Ejercicio 17</h2>
      <AtributosDinamicos />
    </section>
  );
}

export default EjerciciosConceptosBasicos;