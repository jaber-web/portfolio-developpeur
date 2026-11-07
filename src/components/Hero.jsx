
import './Hero.css'
import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section id="accueil" className="hero">

      <div className="hero-content">

        <span className="hero-badge">
          &lt;/&gt; Bienvenue sur mon portfolio
        </span>

        <h1>
          Bonjour, je suis
          <span> Jaber Faizi.</span>
        </h1>

        <h2>Développeur Web et Web Mobile</h2>

        <p>
          Je conçois et développe des applications web modernes,
          performantes et responsives. Passionné par les nouvelles
          technologies, je cherche constamment à améliorer mes
          compétences et à créer des expériences numériques utiles.
        </p>

        <div className="hero-buttons">
          <a href="#projets" className="btn-primary">
            Voir mes projets →
          </a>

          <a href="#contact" className="btn-secondary">
            Me contacter
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/jaber-web"
            target="_blank"
            rel="noreferrer"
            className="btn-social"
            aria-label="Visiter mon profil GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>

            Mon GitHub
            <span>↗</span>
          </a>
        </div>

      </div>

      <div className="hero-image">
        <img
          src={heroImage}
          alt="Illustration technologique d'un ordinateur avec du code"
        />
      </div>

    </section>
  )
}

export default Hero
