import Deuner from "../../assets/img/Deuner.png";
import './QuemSouEu.css';

export default function QuemSouEu() {
  return (
    <section className="quem-sou-eu" id="about">
      <img src={Deuner} alt="Gustavo Henrique Deuner" className="quem-sou-eu__image" />
      
      <h2 className="quem-sou-eu__title">Quem sou eu?</h2>
      
      <p className="quem-sou-eu__description">
        "Meu nome é Gustavo Henrique Deuner, sou apaixonado por tecnologia desde criança, quando ganhei meu primeiro notebook. <br />
        Tenho afinidade especial com o desenvolvimento front-end, <br />
        a área em que tenho mais afinidade e foco meus estudos. <br />
        Além da tecnologia, gosto de esportes como futebol e basquete, <br />
        também costumo jogar alguns campeonatos de Poker e Blackjack."
      </p>

      <h3 className="quem-sou-eu__subtitle">Experiências</h3>
      
      <p className="quem-sou-eu__experience">
        Antes de atuar na área eu trabalhei com meu pai na área de <br />
        vendas por alguns anos, logo em seguida fiz um Estágio de T.I na UNIOESTE por 6 meses. <br />
        Hoje eu atuo como Analista de Qualidade de Software na <br />
        Visual Software.
      </p>
    </section>
  );
}