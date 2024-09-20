import './Skills.css';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Skills</h2>
      <p className="skills__description">
        Algumas das skills que já possuo conhecimento ou ainda estou me aprofundando.
      </p>
      <div className="skills__grid">
        <div className="skills__item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript" />
          <span>Javascript</span>
        </div>
        <div className="skills__item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          <span>React</span>
        </div>
        <div className="skills__item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
          <span>CSS</span>
        </div>
        <div className="skills__item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap" />
          <span>Bootstrap</span>
        </div>
        <div className="skills__item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
          <span>MySQL</span>
        </div>
        <div className="skills__item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
          <span>Figma</span>
        </div>
        <div className="skills__item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="Wordpress" />
          <span>Wordpress</span>
        </div>
        <div className="skills__item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" alt="MariaDB" />
          <span>MariaDB</span>
        </div>
        <div className="skills__item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" />
          <span>Sass</span>
        </div>
      </div>
    </section>
  );
}