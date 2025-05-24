import './Footer.css'
import { NavLink } from "react-router-dom";
import instagram from '../../assets/redesSociais/instagram.png';
import linkedin from '../../assets/redesSociais/linkedin.png';
import whatsapp from '../../assets/redesSociais/whatsapp.png';

function Footer() {
    return (
        <footer className="py-4 text-white">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-3 mb-4">
                        <h3>MRstudio</h3>
                        <p>Texto exemplo</p>
                        <div className="d-flex gap-3 redes-sociais">
                            <img src={instagram} alt="Instagram" width="30" />
                            <img src={linkedin} alt="LinkedIn" width="30" />
                            <img src={whatsapp} alt="WhatsApp" width="30" />
                        </div>
                    </div>

                    <div className="col-6 col-md-2 mb-4">
                        <h3>Link</h3>
                        <ul className="list-unstyled">
                            <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Preços</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Sobre</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Serviços</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3 mb-4">
                        <h3>Suporte</h3>
                        <ul className="list-unstyled">
                            <li><NavLink to="/" className="nav-link">Como funciona</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Características</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Contato</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Comunicando</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4 mb-4">
                        <h3>Nos contate</h3>
                        <ul className="list-unstyled">
                            <li><p>+880 12345678</p></li>
                            <li><p>emailaleatorio@gmail.com</p></li>
                            <li><p>Localização</p></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
