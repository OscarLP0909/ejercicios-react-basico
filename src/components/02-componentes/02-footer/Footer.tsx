function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {anioActual} Óscar López. Todos los derechos reservados.</p>
      <ul className="footer__redes">
        <li>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;