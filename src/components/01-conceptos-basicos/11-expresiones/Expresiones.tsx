function Expresiones() {
    const estaActivo = true;
    return (
        <div className="container">
            <div className="matematicas">
                <h2>Resultado de operacion matematica</h2>
                <p>El resultado de 2 + 2 es: {2 + 2}</p>
                <p>El resultado de 5 * 3 es: {5 * 3}</p>
                <p>El resultado de 10 / 2 es: {10 / 2}</p>
                <p>El resultado de 7 - 4 es: {7 - 4}</p>
            </div>

            <div className="booleanos">
                <h2>Texto condicional según variable booleana</h2>
                <p>
                    Estado:{' '}
                    {estaActivo ? (
                        <span className="text-success">Verdadero</span>
                    ) : (
                        <span className="text-danger">Falso</span>
                    )}
                </p>
            </div>

            <div className="arrays">
                <h2>Mostrar lista de elementos en un array</h2>
                <ul>
                    {['Manzana', 'Banana', 'Cereza'].map((fruta, index) => (
                        <li key={index}>{fruta}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default Expresiones;