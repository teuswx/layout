import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";

import whatsapp from "../../assets/whatsapp.png";
import imagem1 from "../../assets/img1.jpg";
import imagem2 from "../../assets/img2.jpg";
import imagem3 from "../../assets/img3.jpg";
import imagemLago from "../../assets/imagenstopicos/imagemlago.jpg";
import folhaDireita from "../../assets/folha direita.png";
import folhaEsquerda from "../../assets/folha-esquerda.png";
import folhaD from "../../assets/folha d.png";
import Restaurante1 from "../../assets/fotos quartos/restaurante.jpg";
import Restaurante2 from "../../assets/fotos quartos/restaurante2.jpg";
import Arealazer from "../../assets/fotos quartos/arealazer.jpg";
import Fora1 from "../../assets/fotos quartos/foto fora.jpg";
import Fora2 from "../../assets/fotos quartos/foto forta.jpg";
import quarto1 from "../../assets/fotos quartos/cama.jpg";

const cardsData = [
  {
    titulo: "Restaurante próprio",
    texto: `
      <p>Empreenda no ramo gastronômico com autonomia total.</p>
      <ul>
        <li>Controle de cardápio personalizado</li>
        <li>Gestão de pedidos integrada</li>
        <li>Atendimento direto ao cliente</li>
      </ul>
    `,
    imagemHover: imagem1,
  },
  {
    titulo: "Desenvolvimento de Apps",
    texto: `
      <p>Crie soluções móveis sob medida para sua empresa ou ideia.</p>
      <ul>
        <li>Apps nativos e híbridos</li>
        <li>UX/UI focado no usuário</li>
        <li>Integração com APIs e banco de dados</li>
      </ul>
    `,
    imagemHover: imagem2,
  },
  {
    titulo: "Marketing Digital",
    texto: `
      <p>Alavanque sua presença online com estratégias inteligentes.</p>
      <ul>
        <li>Campanhas segmentadas</li>
        <li>SEO e gestão de redes sociais</li>
        <li>Análise de resultados e métricas</li>
      </ul>
    `,
    imagemHover: imagem3,
  },
];

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="container container-lg" style={{ marginTop: "200px" }}>
        <div className="row align-items-center" style={{ minHeight: "400px" }}>
          <div className="col-12 col-lg-6 text-center text-lg-start" data-aos="fade-right">
            <h2 style={{ letterSpacing: "10px" }}>Você achou a melhor</h2>
            <h2 style={{ fontSize: "70px" }}>Pousada de Santo Hilário!</h2>
            <p>
              A Villa Capetinga é uma pousada charmosa em Santo Hilário, Minas Gerais,
              ideal para casais que buscam tranquilidade na natureza. A apenas 5 minutos da represa de Furnas,
              oferece piscina ao ar livre, restaurante próprio e refeições inclusas
            </p>
            <div className="text-center text-lg-start mt-5" style={{ height: "80px" }}>
              <a href="https://web.whatsapp.com/" className="botao">Entre em contato!</a>
            </div>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-left">
            <Carousel />
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "100px", backgroundColor: "#D9A86C", borderRadius: "15px" }}>
        <div className="row">
          <div className="col">
            <section style={{ minHeight: "700px" }}>
              <h2 data-aos="fade-up" style={{ color: "white" }}>Algumas de nossas vantagens!</h2>
              <div className="row">
                {cardsData.map((card, index) => (
                  <Card
                    key={index}
                    titulo={card.titulo}
                    texto={card.texto}
                    imagemHover={card.imagemHover}
                    delay={index * 200}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container container-lg" style={{ marginTop: "100px" }}>
        {/* Destaques */}
        <div className="container" id="featured-container">
          <div className="col-12">
            <h2 className="title primary-color">Acomodações em Destaque</h2>
            <p className="subtitle secondary-color">Conheça nossos serviços</p>
          </div>
          <div className="col-12" id="featured-images">
            <div className="row g-4">
              {[Restaurante1, quarto1, Restaurante2, Fora1, Fora2, Arealazer].map((img, idx) => (
                <div className="col-12 col-md-4" key={idx}>
                  <img src={img} alt={`Projeto ${idx + 1}`} className="img-fluid" />
                  <div className="banner-content">
                    <p className="secondary-color">{idx < 3 ? "Restaurante" : idx < 5 ? "Pousada" : "Área de lazer"}</p>
                    <h3>{idx === 5 ? "Concluído!" : "Em andamento..."}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <img src={folhaDireita} className="teste" alt="Lago" />
        <img src={folhaEsquerda} className="teste2" alt="Lago" />
        <img src={folhaD} className="teste3" alt="Lago" />


        <div class="col-12">
          <h2 class="title primary-color">Detalhes Importantes</h2>
          <p class="subtitle secondary-color">
            Saiba mais sobre a experiência da nossa incrível equipe
          </p>
        </div>
        {[0, 1, 2].map((idx) => (
          <div className="container" id="info-container" key={idx}>
            <div className="col-12">
              <div className="row">
                <div className={`col-12 col-md-5 ${idx === 1 ? "order-md-2" : ""}`} id="info-banner">
                  <img src={imagemLago} alt="Informações" className="img-fluid" />
                </div>
                <div className={`col-12 col-md-7 ${idx === 1 ? "order-md-1" : ""}`} id="info-content" style={{ backgroundColor: "#2a7a8c1d", borderRadius: "15px" }}>
                  <div className="row">
                    <div className="col-12">
                      <h2 className="title" style={{ marginTop: 0 }}>Estes dados fazem a diferença:</h2>
                      <p className="subtitle secondary-color">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Praesentium tempore fugit et iusto quisquam beatae impedit
                        nobis quas doloribus, atque, ut id similique eligendi, ab
                        soluta magnam maxime cum debitis.
                      </p>
                    </div>
                    <div className="col-12" id="info-numbers">
                      <div className="row">
                        <div className="col-4">
                          <p className="secondary-color">Quarto com suíte</p>
                        </div>
                        <div className="col-4">
                          <p className="secondary-color">TV com diversos canais</p>
                        </div>
                        <div className="col-4">
                          <p className="secondary-color">Internet gratuita</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <a className="btn" style={{ backgroundColor: "#2A7A8C", color: "white" }} href="/">Saber Mais</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <a
          href="https://web.whatsapp.com/"
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
