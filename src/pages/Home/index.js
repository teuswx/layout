
import Carousel from "../../components/Carousel";
import './home.css'
import whatsapp from '../../assets/whatsapp.png'
import 'aos/dist/aos.css';
import Card from '../../components/Card';
import AOS from 'aos'
import { useEffect } from "react";

import imagem1 from '../../assets/img1.jpg'
import imagem2 from '../../assets/img2.jpg'
import imagem3 from '../../assets/img3.jpg'


const cardsData = [
  {
    titulo: "Restaurante próprio",
    texto: `
    <ul>
      <li>Primeiro item da lista</li>
      <li>Segundo item da lista</li>
      <li>Terceiro item da lista</li>
    </ul>
  `,
    imagemHover: imagem1,
  },
  {
    titulo: "Desenvolvimento de Apps",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagemHover: imagem2,
  },
  {
    titulo: "Marketing Digital",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagemHover: imagem3,
  }
];

function Home() {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, [])

  return (
    <div className="container-fluid">
      <div className="container container-lg" style={{ marginTop: "100px" }}>
        <div className="row align-items-center" style={{ minHeight: "400px" }}>
          <div className="col-12 col-lg-6 text-center text-lg-start" data-aos="fade-right" >
            <h2 style={{ letterSpacing: '10px' }}>Você achou a melhor</h2>
            <h2 style={{ fontSize: '70px' }}>Pousada de Santo Hilário!</h2>
            <p>
              A Villa Capetinga é uma pousada charmosa em Santo Hilário, Minas Gerais,
              ideal para casais que buscam tranquilidade na natureza. A apenas 5 minutos da represa de Furnas, oferece piscina ao ar livre, restaurante próprio e refeições inclusas
            </p>
            <div className="text-center text-lg-start mt-5" style={{ height: '80px' }}>
              <a href="https://web.whatsapp.com/" className="botao">Entre em contato!</a>
            </div>
          </div>

          <div className="col-12 col-lg-6 " data-aos="fade-left">
            <Carousel />
          </div>
        </div>

        {/* VANTAGENS */}
        <div className="row">
          <div className="col">
            <section style={{ minHeight: "500px" }}>
              <h2 data-aos="fade-up">Algumas de nossas vantagens!</h2>
              <div className="row">
                {cardsData.map((card, index) => (
                  <Card
                    key={index}
                    titulo={card.titulo}
                    texto={card.texto}
                    imagemHover={card.imagemHover}  // <-- corrigido aqui
                    delay={index * 200}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
        <a href="https://web.whatsapp.com/"
          className="whats d-none d-lg-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="whats-tooltip">Chame no WhatsApp!</div>
          <img src={whatsapp} alt="WhatsApp" />
        </a>

      </div>
    </div>


  );
}

export default Home;
