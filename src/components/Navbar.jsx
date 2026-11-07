
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <a href="#accueil" className="navbar-logo">
        Jaber<span>.</span>
      </a>

      <nav className="navbar-links">
        <a href="#accueil" className="active">Accueil</a>
        <a href="#apropos">À propos</a>
        <a href="#competences">Compétences</a>
        <a href="#projets">Projets</a>
        <a href="#contact" className="contact-link">Contact</a>
      </nav>
    </header>
  )
}

export default Navbar
