import { useEffect } from "react";
import './carousel.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
function Carousel() {
    useEffect(() => {
        const carousel = document.querySelector('#ads');
        if (carousel && window.bootstrap) {
            new window.bootstrap.Carousel(carousel, {
                interval: 3000,
                ride: 'carousel',
            });
        }
    }, []);

    return (
        <div className="container ">
            <div
                id="ads"
                className="carousel slide "
                data-bs-ride="carousel"
                data-bs-interval="3000"

            >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#ads" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#ads" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#ads" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="Slide 1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Título do slide 1</h5>
                            <p>Parágrafo explicativo do slide 1</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="Slide 3" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#ads" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#ads" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Próximo</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel;