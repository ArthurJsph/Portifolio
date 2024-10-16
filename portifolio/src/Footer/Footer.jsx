import './Footer.css';


const Footer = () => {
    return (
        
            <footer className="footer" id="footer">
              <div className="container-footer">
                {/* Logo */}
                <div className="footer-column logo-column">
                 
                </div>
        
                {/* Menu */}
                <div className="footer-column menu-column">
                  <nav className="footer-nav">
                    <a href="#inicio">Início</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contato">Contato</a>
                  </nav>
                </div>
        
                {/* Social Links */}
                <div className="footer-column social-column">
                  <ul className="social-links">
                    <li><a href="https://github.com/ArthurJsph" target='_blank'><i className="bi bi-github"></i> GitHub</a></li>
                    <li><a href="http://www.linkedin.com/in/arthur-js" target='_blank'><i className="bi bi-linkedin"></i> LinkedIn</a></li>
                  </ul>
                </div>
              </div>
        
              {/* Credits */}
              <div className="footer-column credits-column">
                <p>&copy; 2024 Todos os direitos reservados.</p>
                <p>Desenvolvido por Arthur José</p>
              </div>
            </footer>
          );
        }

  export default Footer;





