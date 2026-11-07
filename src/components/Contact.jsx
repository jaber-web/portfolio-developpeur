
import './Contact.css'

function Contact() {

  const contactEmail = 'jaberfaizidy@gmail.com'

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const subject = encodeURIComponent(
      `Message depuis mon portfolio - ${name}`
    )

    const body = encodeURIComponent(
      `Bonjour Jaber,\n\n${message}\n\nNom : ${name}\nE-mail : ${email}`
    )

    window.location.href =
      `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* En-tête */}
        <div className="contact-heading">

          <span className="section-badge">
            CONTACT
          </span>

          <h2>
            Travaillons <span>ensemble</span>
          </h2>

          <p>
            Vous avez un projet ou une opportunité professionnelle ?
            N'hésitez pas à me contacter.
          </p>

        </div>

        <div className="contact-content">

          {/* Informations de contact */}
          <div className="contact-info">

            <h3>Restons en contact</h3>

            <p>
              Je suis ouvert aux opportunités professionnelles,
              aux projets web et aux échanges autour du développement.
            </p>

            {/* Email */}
            <div className="contact-item">

              <div className="contact-icon">
                <span>✉</span>
              </div>

              <div>
                <h4>E-mail</h4>

                <a href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
              </div>

            </div>

            {/* GitHub */}
            <div className="contact-item">

              <div className="contact-icon">
                <span>⌘</span>
              </div>

              <div>
                <h4>GitHub</h4>

                <a
                  href="https://github.com/jaber-web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/jaber-web
                </a>
              </div>

            </div>

            {/* Réseaux sociaux */}
            <div className="contact-socials">

              <h4>Retrouvez-moi également sur</h4>

              <div className="social-links">

                <a
                  href="https://github.com/jaber-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/jaberfaizi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>

              </div>

            </div>

          </div>

          {/* Formulaire */}
          <div className="contact-form-wrapper">

            <h3>Envoyez-moi un message</h3>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">

                <label htmlFor="name">
                  Votre nom
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Entrez votre nom"
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="email">
                  Votre adresse e-mail
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="exemple@email.com"
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="message">
                  Votre message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Écrivez votre message ici..."
                  required
                ></textarea>

              </div>

              <button
                type="submit"
                className="contact-button"
              >
                Envoyer le message
                <span> →</span>
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="contact-footer">

        <p>
          © {new Date().getFullYear()} Jaber Faizi.
          Tous droits réservés.
        </p>

        <a href="#accueil">
          Retour en haut ↑
        </a>

      </footer>

    </section>
  )
}

export default Contact
