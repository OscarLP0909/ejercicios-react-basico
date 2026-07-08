interface Item {
  id: string;
  nombre: string;
}

interface ListaItemsProps {
  items: Item[];
}

function ListaItems({ items }: ListaItemsProps) {
  return (
    <ul className="lista-items">
      {items.map((item) => (
        <li key={item.id}>{item.nombre}</li>
      ))}
    </ul>
  );
}

export default ListaItems;