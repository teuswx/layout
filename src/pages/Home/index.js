
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
import imagemLago from '../../assets/imagenstopicos/imagemlago.jpg'
import imagemPraia from '../../assets/imagenstopicos/praia.jpg'
import folhaDireita from '../../assets/folha direita.png'
import folhaEsquerda from '../../assets/folha-esquerda.png'
import folhaD from '../../assets/folha d.png'
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

        <img src={folhaDireita} className="teste" alt="Lago"/>
        <img src={folhaEsquerda} className="teste2" alt="Lago" />
        <img src={folhaD} className="teste3" alt="Lago" />


        <section>
          <div className="row align-items-center mt-4">
            <div className="col-12 col-lg-6">
              <img src={imagemLago} alt="Lago" className="img-fluid " data-aos="fade-right" />
            </div>
            <div className="col-12 col-lg-6 text-center text-lg-start mt-3" data-aos="fade-left" style={{ fontSize: '20px' }}>
              Além de um delicioso café da manhã com produtos frescos e locais, nossa pousada
              conta com áreas de lazer, trilhas para passeios tranquilos e opções de lazer para
              toda a família. Se você está procurando um refúgio para relaxar ou explorar as
              maravilhas da natureza, a Pousada Ra Nos é o lugar perfeito.
            </div>
          </div>
        </section>

        <section>
          <div className="row align-items-center mt-4">
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <img src={imagemPraia} alt="Lago" className="img-fluid" data-aos="fade-right" />
            </div>
            <div className="col-12 col-lg-6 text-center text-lg-start mt-3 order-2 order-lg-1" data-aos="fade-left" style={{ fontSize: '20px' }}>
              Além de um delicioso café da manhã com produtos frescos e locais, nossa pousada
              conta com áreas de lazer, trilhas para passeios tranquilos e opções de lazer para
              toda a família. Se você está procurando um refúgio para relaxar ou explorar as
              maravilhas da natureza, a Pousada Ra Nos é o lugar perfeito.
            </div>
          </div>
        </section>



        <section>
          <div className="row align-items-center mt-4">
            <div className="col-12 col-lg-6">
              <img src={imagemLago} alt="Lago" className="img-fluid " data-aos="fade-right" />
            </div>
            <div className="col-12 col-lg-6 text-center text-lg-start mt-3" data-aos="fade-left" style={{ fontSize: '20px' }}>
              Além de um delicioso café da manhã com produtos frescos e locais, nossa pousada
              conta com áreas de lazer, trilhas para passeios tranquilos e opções de lazer para
              toda a família. Se você está procurando um refúgio para relaxar ou explorar as
              maravilhas da natureza, a Pousada Ra Nos é o lugar perfeito.
            </div>
          </div>
        </section>

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
