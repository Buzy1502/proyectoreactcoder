import "./footer.css";
import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="redes">
        <ul className="redes__ul">
          <li className="footer__icono icono-instagram">
            <a href="https://www.instagram.com/buzeina/?hl=es" className="footer__link" target="_blank" rel="noreferrer">
              <FaInstagram className="fab fa-instagram" />
            </a>
          </li>
          <li className="footer__icono icono-facebook">
            <a href="https://www.facebook.com/buzeinarachid1" className="footer__link" target="_blank" rel="noreferrer">
              <FaFacebookF className="fab fa-facebook" /></a>
          </li>
          <li className="footer__icono icono-github">
            <a href="https://github.com/Buzy1502" className="footer__link" target="_blank" rel="noreferrer">
              <FaGithub className="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
