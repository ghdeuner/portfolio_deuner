import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa'; 
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <h1 className="hero__name">Gustavo Deuner</h1>
            <p className="hero__description">
                Olá, meu nome é Gustavo Henrique Deuner, sou de Cascavel, Paraná.
                Estou cursando o 6° período de Engenharia de Software e atuo como
                Analista de Qualidade de Software na Visual Software.
            </p>
            <div className="hero__buttons">
                <a href="#about" className="hero__button">
                    More About Me
                </a>
                <a href="http://linkedin.com/in/ghdeuner" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hero__icon" />
                </a>
                <a href="https://github.com/ghdeuner" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hero__icon" />
                </a>
                <a href="mailto:gdeuner@gmail.com">
                    <FaEnvelope className="hero__icon" />
                </a>
                <a href="https://www.instagram.com/gustavo.deuner/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hero__icon" />
                </a>
            </div>
        </section>
    );
}
