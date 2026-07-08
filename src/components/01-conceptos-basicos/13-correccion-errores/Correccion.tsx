function Tarjeta() {
    const clic = () => {
        console.log('Botón pulsado');
    };

    return (
        <div className="tarjeta">
            <h2>Título de tarjeta</h2>
            <p>Descripción de la tarjeta</p>
            <img src="imagen.jpg" alt="Imagen de la tarjeta" />
            <button onClick={clic}>Hacer clic</button>
        </div>
    );
}

export default Tarjeta;