
import './About.css'

import jaberImage from '../assets/jaber-portfolio.png'
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
            Bonjour ! Je suis Jaber Faizi, développeur Web et Web Mobile,
            passionné par la création d'applications modernes et intuitives.
          </p>

          <p>
            Grâce à mes différentes expériences professionnelles,
            j'ai développé un bon esprit d'analyse, une capacité
            d'adaptation et le sens du travail en équipe.
          </p>

          <p>
            Actuellement en formation Développeur Web et Web Mobile
            chez OpenClassrooms, je développe mes compétences en
            HTML, CSS, JavaScript, React et Node.js.
          </p>

          <p>
            J'aime relever de nouveaux défis techniques, apprendre
            de nouvelles technologies et transformer des idées
            en solutions numériques concrètes.
          </p>

          {/* Cartes Formation et Objectif */}
          <div className="about-cards">

            <div className="about-card">

              <img
                src={formationIcon}
                alt=""
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
                className="about-card-icon"
              />

              <h3>Objectif</h3>

              <p>
                Développeur Full Stack
              </p>

            </div>

          </div>

          <a href="#projets" className="about-button">
            Découvrir mes projets →
          </a>

        </div>

      </div>

    </section>
  )
}

export default About
