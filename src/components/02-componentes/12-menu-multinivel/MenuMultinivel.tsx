interface Subcategoria {
  id: string;
  nombre: string;
}

interface Categoria {
  id: string;
  nombre: string;
  subcategorias: Subcategoria[];
}

interface MenuMultinivelProps {
  categorias: Categoria[];
}

function MenuMultinivel({ categorias }: MenuMultinivelProps) {
  return (
    <ul className="menu-multinivel">
      {categorias.map((categoria) => (
        <li key={categoria.id} style={{ fontWeight: 'bold', marginBottom: '4px' }}>
          {categoria.nombre}
          <ul style={{ paddingLeft: '24px', fontWeight: 'normal' }}>
            {categoria.subcategorias.map((subcategoria) => (
              <li key={subcategoria.id}>{subcategoria.nombre}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default MenuMultinivel;