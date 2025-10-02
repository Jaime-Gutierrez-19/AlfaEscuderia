function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p>&copy; 2025 AlfaEscudería. Todos los derechos reservados.</p>
        <div>
          <a href="https://www.facebook.com" className="text-light mx-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://www.twitter.com" className="text-light mx-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.instagram.com" className="text-light mx-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
