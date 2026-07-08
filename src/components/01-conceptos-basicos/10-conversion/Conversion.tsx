function Bienvenida() {
    const enviar = () => {
        console.log("Formulario enviado");
    };

    return (
        <div className="container">
            <h1>Bienvenido a mi sitio</h1>
            <p>
                Esta es una descripción con <strong>texto destacado</strong>.
            </p>
            <input type="text" placeholder="Escribe aquí" />
            <label htmlFor="email">Email:</label>
            <button onClick={enviar}>Enviar</button>
        </div>
    );
}

export default Bienvenida;