
import './Projects.css'

const projects = [
  {
    number: '01',
    title: 'Booki',
    category: 'Site web de réservation',

    description:
      "Intégration d'une interface web pour une agence de voyage permettant de rechercher des hébergements et des activités touristiques.",

    objective:
      "Créer une interface claire et intuitive permettant aux utilisateurs de rechercher des hébergements et des activités.",

    technologies: ['HTML5', 'CSS3', 'Responsive Design'],

    skills: [
      'Intégration HTML et CSS',
      'Mise en page responsive',
      "Adaptation d'une maquette",
    ],

    result:
      "Réalisation d'une interface web responsive adaptée aux différents formats d'écran.",

    improvement:
      "Ajouter JavaScript pour rendre les recherches et les filtres interactifs.",

    type: 'travel',

    github: 'https://github.com/jaber-web/booki',
  },

  {
    number: '02',
    title: 'Mon Vieux Grimoire',
    category: 'Application web et API REST',

    description:
      "Développement du backend d'une application de notation et de partage de livres, avec gestion des utilisateurs et des images.",

    objective:
      "Développer une API permettant de gérer les livres, les utilisateurs, les images et les notes.",

    technologies: ['Node.js', 'Express', 'MongoDB'],

    skills: [
      'Développement backend',
      "Création d'une API REST",
      "Gestion d'une base de données",
      'Gestion des utilisateurs et des images',
    ],

    result:
      "Mise en place du backend permettant de gérer les données et les fonctionnalités principales de l'application.",

    improvement:
      "Renforcer les tests automatisés et améliorer la documentation de l'API.",

    type: 'books',

    github: 'https://github.com/jaber-web/Mon-Vieux-Grimoire',
  },
]

function Projects() {
  return (
    <section id="projets" className="projects-section">
      <div className="projects-container">

        {/* En-tête */}
        <div className="projects-heading">
          <span className="section-badge">
            MES RÉALISATIONS
          </span>

          <h2>
            Mes <span>Projets</span>
          </h2>

          <p>
            Découvrez quelques projets réalisés dans le cadre
            de mon parcours en développement web.
          </p>
        </div>

        {/* Cartes des projets */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              {/* Aperçu du projet */}
              <div className={`project-preview ${project.type}`}>
                <div className="preview-window">

                  <div className="preview-header">
                    <div className="window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <span className="window-title">
                      {project.title}
                    </span>
                  </div>

                  {project.type === 'travel' ? (
                    <div className="travel-preview">

                      <div className="travel-logo">
                        Booki<span>.</span>
                      </div>

                      <div className="travel-heading">
                        Trouvez votre hébergement
                      </div>

                      <div className="travel-search">
                        <span>⌖ Montpellier</span>
                        <span>Rechercher</span>
                      </div>

                      <div className="travel-blocks">
                        <div>Hébergements</div>
                        <div>Activités</div>
                        <div>Voyages</div>
                      </div>

                    </div>
                  ) : (
                    <div className="books-preview">

                      <div className="books-title">
                        MON VIEUX GRIMOIRE
                      </div>

                      <p className="books-subtitle">
                        Découvrez et partagez vos livres
                      </p>

                      <div className="book-illustrations">
                        <div className="book-item">📖</div>
                        <div className="book-item">📚</div>
                        <div className="book-item">📕</div>
                      </div>

                      <div className="books-search">
                        Explorer les livres
                      </div>

                    </div>
                  )}

                </div>

                <span className="project-number">
                  {project.number}
                </span>
              </div>

              {/* Informations du projet */}
              <div className="project-info">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Détails du projet */}
                <div className="project-details">

                  <h4>Objectif du projet</h4>
                  <p>{project.objective}</p>

                  <h4>Compétences mobilisées</h4>
                  <ul>
                    {project.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>

                  <h4>Résultat obtenu</h4>
                  <p>{project.result}</p>

                  <h4>Piste d'amélioration</h4>
                  <p>{project.improvement}</p>

                </div>

                {/* Lien GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`Voir le code de ${project.title} sur GitHub`}
                >
                  <span>Voir le code sur GitHub</span>
                  <span className="project-arrow">↗</span>
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
