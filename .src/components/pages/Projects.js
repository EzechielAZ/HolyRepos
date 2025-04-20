import React, { useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import './Projects.css';

const Projects = () => {
  // Sample projects data
  const allProjects = [
    {
      id: 1,
      title: "Accès à l'eau potable",
      category: "Santé",
      description: "Installation de puits et systèmes de traitement d'eau dans les villages ruraux pour améliorer l'accès à l'eau potable.",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Éducation numérique",
      category: "Éducation",
      description: "Formation des jeunes aux compétences numériques essentielles pour leur avenir professionnel.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Agriculture durable",
      category: "Environnement",
      description: "Formation aux techniques agricoles durables et distribution de semences biologiques pour les agriculteurs locaux.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Santé maternelle",
      category: "Santé",
      description: "Amélioration des soins prénatals et postnatals pour les femmes enceintes dans les zones rurales.",
      image: "https://images.unsplash.com/photo-1516117507496-e4b45f0169c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Alphabétisation des adultes",
      category: "Éducation",
      description: "Programme d'alphabétisation pour les adultes dans les communautés rurales et périurbaines.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Gestion des déchets",
      category: "Environnement",
      description: "Projet de collecte, tri et recyclage des déchets dans les zones urbaines du Bénin.",
      image: "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      title: "Microfinance pour femmes",
      category: "Économie",
      description: "Système de microcrédits pour aider les femmes entrepreneures à développer leurs activités commerciales.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 8,
      title: "Énergies renouvelables",
      category: "Environnement",
      description: "Installation de panneaux solaires dans les écoles et centres de santé ruraux.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 9,
      title: "Cantines scolaires",
      category: "Éducation",
      description: "Mise en place de cantines scolaires dans les écoles rurales pour améliorer la nutrition et réduire l'absentéisme.",
      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const categories = ["Tous", "Santé", "Éducation", "Environnement", "Économie"];
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = activeFilter === "Tous" || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <h1>Nos Projets</h1>
          <p>Découvrez les initiatives d'ACADI Bénin qui transforment des vies</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="projects-filter">
        <div className="container">
          <div className="filter-container">
            <div className="category-filters">
              {categories.map((category, index) => (
                <button 
                  key={index} 
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => handleFilterChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="search-filter">
              <input 
                type="text" 
                placeholder="Rechercher un projet..." 
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <span className="material-icons search-icon">search</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <p>Aucun projet ne correspond à votre recherche.</p>
              <button className="btn" onClick={() => {setActiveFilter("Tous"); setSearchTerm("");}}>
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Soutenez nos projets</h2>
            <p>Votre contribution fait une différence réelle dans la vie des communautés que nous servons.</p>
            <a href="/donate" className="btn">Faire un don maintenant</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

