
import './Skills.css'

const skillCategories = [
  {
    number: '01',
    title: 'Frontend',
    description:
      'Création d’interfaces web modernes, interactives et responsives.',
    icon: '💻',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'Responsive Design',
    ],
  },
  {
    number: '02',
    title: 'Backend',
    description:
      'Développement de serveurs et création d’API REST.',
    icon: '⚙️',
    skills: [
      'Node.js',
      'Express.js',
      'API REST',
    ],
  },
  {
    number: '03',
    title: 'Bases de données',
    description:
      'Organisation, stockage et gestion des données.',
    icon: '🗄️',
    skills: [
      'MongoDB',
    ],
  },
  {
    number: '04',
    title: 'Outils de développement',
    description:
      'Gestion de versions et environnement de développement.',
    icon: '🛠️',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'npm',
    ],
  },
]

function Skills() {
  return (
    <section id="competences" className="skills-section">
      <div className="skills-container">

        {/* En-tête */}
        <div className="skills-heading">
          <span className="section-badge">
            MES COMPÉTENCES
          </span>

          <h2>
            Mes compétences <span>techniques</span>
          </h2>

          <p>
            Découvrez les technologies et les outils que
            j’utilise dans mes projets de développement web.
          </p>
        </div>

        {/* Cartes de compétences */}
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article
              className="skill-card"
              key={category.number}
            >

              <div className="skill-card-header">
                <span className="skill-number">
                  {category.number}
                </span>

                <span
                  className="skill-icon"
                  aria-hidden="true"
                >
                  {category.icon}
                </span>
              </div>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              {/* Technologies */}
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
