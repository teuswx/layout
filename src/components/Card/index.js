import './Card.css'; // arquivo para o estilo do card

function Card({ titulo, texto, imagemHover, delay }) {
  return (
    <div
      className="col-12 col-lg-4 py-2"
      data-aos="fade-right"
      data-aos-delay={delay}
    >
      <div className="card h-100">
        <div className="texto">
          <h3>{titulo}</h3>
          <div dangerouslySetInnerHTML={{ __html: texto }} />
        </div>
        <div className="texto-oculto">
          <img src={imagemHover} alt={`Imagem de ${titulo}`} />
        </div>
      </div>
    </div>
  );
}

export default Card;
