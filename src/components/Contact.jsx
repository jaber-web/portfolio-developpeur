
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const formRef = useRef(null)

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({
    type: '',
    message: ''
  })

  const SERVICE_ID = 'service_j31vu89'
  const TEMPLATE_ID = 'template_azyqyqb'
  const PUBLIC_KEY = 'AU8cD0tikxWsbujzP'

  async function handleSubmit(event) {
    event.preventDefault()

    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )

      setStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès ! Merci pour votre contact.'
      })

      formRef.current.reset()

    } catch (error) {
      console.error('Erreur EmailJS :', error)

      setStatus({
        type: 'error',
        message: "Une erreur est survenue. Veuillez réessayer ou me contacter directement par e-mail."
      })
    } finally {
      setLoading(false)
    }
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

          {/* Informations */}
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

                <a href="mailto:jaberfaizidy@gmail.com">
                  jaberfaizidy@gmail.com
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
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/jaberfaizi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LinkedIn ↗
                </a>

              </div>

            </div>

          </div>

          {/* Formulaire EmailJS */}
          <div className="contact-form-wrapper">

            <h3>Envoyez-moi un message</h3>

            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">

                <label htmlFor="from_name">
                  Votre nom
                </label>

                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  placeholder="Entrez votre nom"
                  required
                  minLength="2"
                  maxLength="100"
                />

              </div>

              <div className="form-group">

                <label htmlFor="from_email">
                  Votre adresse e-mail
                </label>

                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  placeholder="exemple@email.com"
                  required
                  maxLength="150"
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
                  minLength="10"
                  maxLength="3000"
                ></textarea>

              </div>

              {/* Confirmation ou erreur */}
              {status.message && (
                <div
                  className={`form-status ${status.type}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="contact-button"
                disabled={loading}
              >
                {loading
                  ? 'Envoi en cours...'
                  : 'Envoyer le message →'}
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
