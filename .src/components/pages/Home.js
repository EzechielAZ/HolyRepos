import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Carousel from '../components/home/Carousel.js';
import ProjectCard from '../components/projects/ProjectCard.js';

const Home = () => {
  // Sample recent projects data
  const recentProjects = [
    {
      id: 1,
      title: "Accès à l'eau potable",
      category: "Santé",
      description: "Installation de puits et systèmes de traitement d'eau dans les villages ruraux.",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Éducation numérique",
      category: "Éducation",
      description: "Formation des jeunes aux compétences numériques essentielles pour leur avenir.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Agriculture durable",
      category: "Environnement",
      description: "Formation aux techniques agricoles durables et distribution de semences biologiques.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Ensemble pour un Bénin meilleur</h1>
          <p>ACADI œuvre pour le développement durable et l'amélioration des conditions de vie au Bénin à travers des projets d'éducation, de santé et d'environnement.</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn">Découvrir nos projets</Link>
            <Link to="/donate" className="btn btn-secondary">Faire un don</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Qui sommes-nous ?</h2>
              <p>L'Association pour la Coopération et le Développement International (ACADI) est une ONG béninoise fondée en 2010 qui s'engage à créer un impact positif et durable dans les communautés locales.</p>
              <p>Notre mission est de contribuer au développement durable du Bénin à travers des projets innovants dans les domaines de l'éducation, la santé, l'environnement et l'autonomisation économique.</p>
              <Link to="/about" className="btn">En savoir plus</Link>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-text">Projets réalisés</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-text">Bénéficiaires</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-text">Partenaires</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12</span>
                <span className="stat-text">Années d'expérience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <div className="container">
          <h2>Notre impact en images</h2>
          <Carousel />
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="recent-projects">
        <div className="container">
          <h2>Nos projets récents</h2>
          <div className="projects-grid">
            {recentProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/projects" className="btn">Voir tous nos projets</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Contribuez à notre mission</h2>
            <p>Votre soutien permet de financer des projets essentiels et de faire une différence réelle dans la vie des communautés béninoises.</p>
            <div className="cta-buttons">
              <Link to="/donate" className="btn">Faire un don</Link>
              <Link to="/contact" className="btn btn-secondary">Devenir bénévole</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>Témoignages</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Grâce au projet d'accès à l'eau potable d'ACADI, notre village a maintenant un puits qui nous fournit de l'eau propre. Nos enfants sont en meilleure santé."</p>
                <div className="testimonial-author">
                  <h4>Kouassi Amoussou</h4>
                  <p>Bénéficiaire, Village de Tori</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Les formations en agriculture durable ont transformé notre façon de cultiver. Nos rendements ont augmenté et nous utilisons moins de produits chimiques."</p>
                <div className="testimonial-author">
                  <h4>Adeline Houngbédji</h4>
                  <p>Agricultrice, Allada</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"En tant que partenaire d'ACADI depuis 5 ans, nous sommes impressionnés par leur approche communautaire et l'impact durable de leurs projets."</p>
                <div className="testimonial-author">
                  <h4>Marc Lefèvre</h4>
                  <p>Directeur, Fondation Eau & Vie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <div className="container">
          <h2>Nos partenaires</h2>
          <div className="partners-logos">
            {/* These would normally be actual logos */}
            <div className="partner-logo">ONG Alpha</div>
            <div className="partner-logo">Fondation Beta</div>
            <div className="partner-logo">Entreprise Gamma</div>
            <div className="partner-logo">Institut Delta</div>
            <div className="partner-logo">Association Epsilon</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

