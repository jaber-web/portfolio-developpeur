
import './Experience.css'

const experiences = [
  {
    date: '2018',
    type: 'Formation',
    title: 'Diplôme de fin d’études secondaires',
    place: 'Herat, Afghanistan',
    description:
      'Obtention du diplôme de fin d’études secondaires, avec une mention Bien.',
    skills: ['Formation générale', 'Informatique'],
  },
  {
    date: '2018 – 2021',
    type: 'Expérience professionnelle',
    title: 'Technicien informatique',
    place: 'Secteur hôtelier',
    description:
      'Participation à la gestion de l’infrastructure informatique, assistance technique, maintenance des réseaux et configuration des équipements.',
    skills: ['Support technique', 'Réseaux', 'Maintenance informatique'],
  },
  {
    date: '2022 – 2025',
    type: 'Expérience professionnelle',
    title: 'Opérateur de montage',
    place: 'Peugeot – Secteur automobile',
    description:
      'Participation aux opérations de montage automobile, contrôle qualité et respect des procédures de sécurité.',
    skills: ['Montage', 'Contrôle qualité', 'Travail en équipe'],
  },
  {
    date: '2026 – En cours',
    type: 'Formation',
    title: 'Développeur Web et Web Mobile',
    place: 'OpenClassrooms',
    description:
      'Formation professionnelle orientée vers la création de sites web et d’applications, avec des technologies frontend et backend.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
  },
]

function Experience() {
  return (
    <section id="parcours" className="experience-section">
      <div className="experience-container">

        <div className="experience-heading">
          <span className="section-badge">MON ÉVOLUTION</span>

          <h2>
            Mon <span>parcours</span>
          </h2>

          <p>
            Découvrez les étapes de mon parcours professionnel
            et de ma formation.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-item" key={index}>
              <div className="timeline-marker" aria-hidden="true">
                <span />
              </div>

              <div className="timeline-card">
                <span className="timeline-date">
                  {experience.date}
                </span>

                <span className="timeline-type">
                  {experience.type}
                </span>

                <h3>{experience.title}</h3>

                <h4>{experience.place}</h4>

                <p>{experience.description}</p>

                <div className="timeline-skills">
                  {experience.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="experience-goal">
          <span className="section-badge">MON OBJECTIF</span>
          <h3>Devenir Développeur Full Stack</h3>
          <p>
            Mon objectif est de poursuivre mon évolution
            professionnelle en intégrant un Bachelor Développeur
            Full Stack en alternance.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Experience
