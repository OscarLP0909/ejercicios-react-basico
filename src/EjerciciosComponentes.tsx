import Navegacion from './components/02-componentes/01-navegacion/Navegacion';
import Footer from './components/02-componentes/02-footer/Footer';
import Layout from './components/02-componentes/03-layout/Layout';
import Formulario, { CampoTexto, BotonEnviar } from './components/02-componentes/04-formulario/Formulario';

function EjerciciosComponentes() {
  return (
    <section>
      <h1>02 - Componentes</h1>

      <h2>Ejercicio 1</h2>
      <Navegacion />
    <h2>Ejercicio 2</h2>
    <Footer />
    <h2>Ejercicio 3</h2>
    <Layout />
    <h2>Ejercicio 4</h2>
    <Formulario />
    </section>
    
  );
}

export default EjerciciosComponentes;