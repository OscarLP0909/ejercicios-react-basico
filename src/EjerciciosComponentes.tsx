import Navegacion from './components/02-componentes/01-navegacion/Navegacion';
import Footer from './components/02-componentes/02-footer/Footer';
import Layout from './components/02-componentes/03-layout/Layout';
import Formulario, { CampoTexto, BotonEnviar } from './components/02-componentes/04-formulario/Formulario';
import { Alerta, Badge, Spinner } from './components/02-componentes/05-barrel';
import Boton from './components/02-componentes/06-boton/Boton';
import Tarjeta from './components/02-componentes/07-tarjeta-children/Tarjeta';
import LayoutSlots from './components/02-componentes/08-layout-slots/LayoutSlots';
import Perfil from './components/02-componentes/09-perfil/Perfil';
import ListaItems from './components/02-componentes/10-lista-items/ListaItems';
import Notificacion from './components/02-componentes/11-notificacion/Notificacion';
import MenuMultinivel from './components/02-componentes/12-menu-multinivel/MenuMultinivel';

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
    <h2>Ejercicio 5</h2>
    <Alerta mensaje="Este es un mensaje de alerta"  />
    <Badge texto="Nuevo" />
    <Spinner />
    <h2>Ejercicio 6</h2>
    <Boton texto="Haz clic aquí" />
    <h2>Ejercicio 7</h2>
    <Tarjeta>
        <p>Contenido simple de texto</p>
    </Tarjeta>

    <Tarjeta>
        <h3>Tarjeta con título</h3>
        <p>Este es el contenido de la tarjeta.</p>
    </Tarjeta>

    <Tarjeta>
        <Boton texto="Botón dentro de la tarjeta" />
    </Tarjeta>
    <h2>Ejercicio 8</h2>
    <LayoutSlots
        header={<h2>Encabezado del layout</h2>}
        main={<p>Contenido principal del layout</p>}
        footer={<p>Pie de página del layout</p>}
    />
    <LayoutSlots
        main={<p>Contenido principal del layout sin header ni footer</p>}
    />
    <h2>Ejercicio 9</h2>
    <Perfil nombre="Juan Pérez" email="juan.perez@example.com" ocupacion="Desarrollador" />

    <h2>Ejercicio 10</h2>
    <ListaItems items={[
      { id: '1', nombre: 'Elemento 1' },
      { id: '2', nombre: 'Elemento 2' },
      { id: '3', nombre: 'Elemento 3' }
    ]} />
    <h2>Ejercicio 11</h2>
    <Notificacion mensaje="¡Éxito!" tipo="exito" />
    <Notificacion mensaje="¡Error al cargar los datos!" tipo="error" />
    <Notificacion mensaje="¡Advertencia!" tipo="advertencia" />

    <h2>Ejercicio 12</h2>
    <MenuMultinivel categorias={[
      {
        id: 'c1',
        nombre: 'Eléctronica',
        subcategorias: [
          { id: 'c1-s1', nombre: 'Portátiles' },
          { id: 'c1-s2', nombre: 'Móviles' }
        ]
      },
      {
        id: 'c2',
        nombre: 'Ropa',
        subcategorias: [
          { id: 'c2-s1', nombre: 'Hombre' },
          { id: 'c2-s2', nombre: 'Mujer' }
        ]
      }
    ]} />
    </section>
  );
}

export default EjerciciosComponentes;