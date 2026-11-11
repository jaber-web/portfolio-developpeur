
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#accueil" className="navbar-logo">
        Jaber<span>.</span>
      </a>

      {/* Liens de navigation */}
      <div className="navbar-links">
        <a href="#accueil">Accueil</a>
        <a href="#apropos">À propos</a>
        <a href="#parcours">Parcours</a>
        <a href="#competences">Compétences</a>
        <a href="#projets">Projets</a>
        <a href="#contact" className="contact-link">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
