
import Carousel from "../../components/Carousel";
import './home.css'
import whatsapp from '../../assets/whatsapp.png'
import 'aos/dist/aos.css';
import AOS from 'aos'
import { useEffect } from "react";

function Home() {

  useEffect(()=>{
    AOS.init({ duration: 1500 });
  },[])

  return (
    <div className="container container-lg" style={{ marginTop: "150px" }}>
      <div className="row align-items-center" style={{ minHeight: "400px" }}>
        <div className="col-12 col-lg-6 text-center text-lg-start" data-aos="fade-right" >
          <h2 style={{ letterSpacing: '10px' }}>Você achou a melhor</h2>
          <h2 style={{ fontSize: '70px' }}>Pousada de Santo Hilário!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed optio quis nulla natus,
            dolore tempora? Ex sed perspiciatis, dolor voluptatibus nihil nesciunt nobis consequatur enim dolorum
            asperiores, consectetur magni.
          </p>
          <div className="text-center text-lg-start " style={{height: '80px'}}>
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
              {[
                "Desenvolvimento de Sites",
                "Desenvolvimento de Apps",
                "Marketing Digital"
              ].map((titulo, index) => (
                <div
                  className="col-12 col-lg-4 py-2"
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={index * 200}
                >
                  <div className="card h-100">
                    <div className="texto">
                      <h3>{titulo}</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="texto-oculto">
                      <h3>Texto oculto mostrando outra coisa</h3>
                      <p>Descrição alternativa ao passar o mouse.</p>
                    </div>
                  </div>
                </div>
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

  );
}

export default Home;
