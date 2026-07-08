function TarjetaPerfil() {
    return (
        <div className="tarjeta-perfil">
            <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Foto de perfil"
                className="tarjeta-perfil__foto"
            />
            <h2 className="tarjeta-perfil__nombre">Óscar López</h2>
            <p className="tarjeta-perfil__ocupacion">Desarrollador Full Stack</p>
            <p className="tarjeta-perfil__descripcion">
                Apasionado por el desarrollo web, con experiencia en Node.js, Spring
                Boot y Angular. Actualmente ampliando conocimientos en React.
            </p>
        </div>
    );
}

export default TarjetaPerfil;
