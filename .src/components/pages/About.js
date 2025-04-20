import React from 'react';
import './About.css';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Kofi Adebayo",
      role: "Président Fondateur",
      bio: "Médecin et entrepreneur social avec 20 ans d'expérience dans le développement international.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Aminata Diallo",
      role: "Directrice Exécutive",
      bio: "Spécialiste en gestion de projets de développement avec une expertise en éducation.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Jean-Pierre Kponou",
      role: "Directeur des Programmes",
      bio: "Ingénieur agronome passionné par l'agriculture durable et le développement rural.",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Grace Houssou",
      role: "Responsable Financière",
      bio: "Experte comptable avec une forte expérience dans la gestion financière des ONG.",
      image: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    }
  ];

  // Partners data
  const partners = [
    { name: "ONU Femmes", logo: "UN Women" },
    { name: "UNICEF", logo: "UNICEF" },
    { name: "Union Européenne", logo: "EU" },
    { name: "Fondation Bill & Melinda Gates", logo: "Gates Foundation" },
    { name: "Ministère de l'Éducation du Bénin", logo: "Benin Education" },
    { name: "GIZ", logo: "GIZ" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>À propos d'ACADI Bénin</h1>
          <p>Découvrez notre mission, notre vision et notre équipe dévouée</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box">
              <h2>Notre Mission</h2>
              <p>ACADI Bénin a pour mission de contribuer au développement durable du Bénin en mettant en œuvre des projets innovants et inclusifs dans les domaines de l'éducation, la santé, l'environnement et l'autonomisation économique.</p>
              <p>Nous travaillons en étroite collaboration avec les communautés locales pour identifier leurs besoins réels et développer des solutions adaptées et durables.</p>
            </div>

            <div className="vision-box">
              <h2>Notre Vision</h2>
              <p>Notre vision est celle d'un Bénin où chaque citoyen a accès aux services essentiels, où les communautés sont autonomes et résilientes, et où le développement se fait dans le respect de l'environnement et des valeurs culturelles.</p>
              <p>Nous aspirons à un monde plus juste, plus équitable et plus durable pour les générations actuelles et futures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history">
        <div className="container">
          <h2>Notre Histoire</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2010</h3>
                <p>Création de l'ACADI Bénin par un groupe de professionnels béninois engagés dans le développement local.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2012</h3>
                <p>Lancement du premier grand projet d'accès à l'eau potable dans 5 villages de la région de l'Atacora.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2015</h3>
                <p>Expansion des activités dans le domaine de l'éducation avec la construction de 3 écoles et la formation de 50 enseignants.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2018</h3>
                <p>Reconnaissance internationale avec l'obtention du prix d'excellence en développement communautaire de l'Union Africaine.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2020</h3>
                <p>Célébration des 10 ans d'ACADI et lancement de la stratégie 2020-2025 axée sur l'innovation et la durabilité.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Aujourd'hui</h3>
                <p>ACADI continue de croître avec plus de 50 projets réalisés et un impact positif sur plus de 10 000 bénéficiaires directs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2>Nos Valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="material-icons value-icon">people</span>
              <h3>Solidarité</h3>
              <p>Nous croyons en la puissance de l'entraide et de la coopération pour résoudre les défis communs.</p>
            </div>
            <div className="value-card">
              <span className="material-icons value-icon">eco</span>
              <h3>Durabilité</h3>
              <p>Nos actions visent à créer un impact positif à long terme, respectueux de l'environnement et des ressources.</p>
            </div>
            <div className="value-card">
              <span className="material-icons value-icon">lightbulb</span>
              <h3>Innovation</h3>
              <p>Nous recherchons constamment des solutions créatives et adaptées aux problèmes complexes de développement.</p>
            </div>
            <div className="value-card">
              <span className="material-icons value-icon">verified_user</span>
              <h3>Intégrité</h3>
              <p>Nous agissons avec honnêteté, transparence et responsabilité dans toutes nos actions et décisions.</p>
            </div>
            <div className="value-card">
              <span className="material-icons value-icon">psychology</span>
              <h3>Respect</h3>
              <p>Nous respectons la dignité, la culture et les droits de chaque personne dans nos interventions.</p>
            </div>
            <div className="value-card">
              <span className="material-icons value-icon">groups</span>
              <h3>Participation</h3>
              <p>Nous impliquons activement les communautés dans la conception et la mise en œuvre de nos projets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2>Notre Équipe</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="about-partners">
        <div className="container">
          <h2>Nos Partenaires</h2>
          <p className="partners-intro">Nos actions sont possibles grâce au soutien précieux de nos partenaires nationaux et internationaux:</p>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">{partner.logo}</div>
                <h3>{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

