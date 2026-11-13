
import './About.css'

import jaberImage from "../assets/jaber-portfolio.webp";
import formationIcon from '../assets/formation-icon.png'
import objectifIcon from '../assets/objectif-icon.png'

function About() {
  return (
    <section id="apropos" className="about-section">
      <div className="about-container">

        {/* Photo de profil */}
        <div className="about-visual">
          <img
            src={jaberImage}
            alt="Portrait professionnel de Jaber Faizi"
            className="about-photo"
          />
        </div>

        {/* Présentation */}
        <div className="about-content">

          <span className="section-badge">
            À PROPOS DE MOI
          </span>

          <h2>
            Découvrez mon <span>parcours</span>
          </h2>

          <p className="about-intro">
            Bonjour ! Je suis Jaber Faizi, développeur Web et
            Web Mobile, passionné par la création d'applications
            modernes, performantes et intuitives.
          </p>

          <p>
            Mon parcours professionnel m'a permis de développer
            des compétences variées, notamment dans le domaine
            informatique, le support technique et la maintenance.
            Mes expériences m'ont également appris à travailler
            en équipe, à m'adapter et à résoudre des problèmes.
          </p>

          <p>
            Actuellement en formation Développeur Web et Web Mobile
            chez OpenClassrooms, je développe mes compétences en
            HTML, CSS, JavaScript, React, Node.js et MongoDB.
          </p>

          <p>
            Je réalise des projets concrets qui me permettent
            de mettre en pratique mes connaissances, de découvrir
            de nouvelles technologies et de progresser dans
            le développement frontend et backend.
          </p>

          <p>
            Mon objectif est de poursuivre mon évolution vers
            le développement Full Stack et de rejoindre une équipe
            dans laquelle je pourrai contribuer à des projets
            web tout en continuant à apprendre.
          </p>

          {/* Cartes Formation et Objectif */}
          <div className="about-cards">

            <div className="about-card">
              <img
                src={formationIcon}
                alt=""
                aria-hidden="true"
                className="about-card-icon"
              />

              <h3>Formation</h3>

              <p>
                Développeur Web et Web Mobile
              </p>
            </div>

            <div className="about-card">
              <img
                src={objectifIcon}
                alt=""
                aria-hidden="true"
                className="about-card-icon"
              />

              <h3>Objectif</h3>

              <p>
                Développeur Full Stack
              </p>
            </div>

          </div>

          {/* Boutons */}
          <div className="about-actions">
            <a href="#projets" className="about-button">
              Découvrir mes projets →
            </a>

            <a href="#contact" className="about-button">
              Me contacter
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
