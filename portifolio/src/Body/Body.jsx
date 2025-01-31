import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Body.css';
import Java from '../assets/java-svgrepo-com.svg';
import JS from '../assets/javascript.svg';
import Python from '../assets/python.svg';
import SQL from '../assets/mysql.svg';
import TS from '../assets/typescript.svg';
import Node from '../assets/nodedotjs.svg';
import Angular from '../assets/angular.svg';
import ReactIcon from '../assets/react.svg';
import HTML from '../assets/html5.svg';
import CSS from '../assets/css3.svg';
import Springboot from '../assets/springboot.svg';
import Profile from '../assets/profile-pic.webp';
import TaskManagerImg from '../assets/taskM.webp';
import MenuAppImg from '../assets/Cardapio-Img.webp';
import LibraryImg from '../assets/biblioteca-Img.webp';


// Componente reutilizável para projetos
const ProjectBox = ({ title, imgSrc, description, link, delay }) => (
  <div className="box-project" data-aos="fade-up" data-aos-delay={delay}>
    <img src={imgSrc} alt={`Projeto ${title}`} className="project-img" />
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="button">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Link para o projeto ${title}`}
      >
        Clique aqui
      </a>
    </div>
  </div>
);
const SessaoPrincipal = () => {
  return (
    <div className="main-section">
      <div className="profile-container" id="home">
        <img src={Profile} alt="Foto de Arthur José" className="profile-pic" />
        <h1 className="name">Arthur José</h1>
        <h2 className="title">Full Stack Developer</h2>
        <a
          href="../Curriculo.pdf"
          className="cta"
          download="Curriculo.pdf"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Meu CV</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
        <div className="social">
                  <ul className="links">
                    <li><a href="https://github.com/ArthurJsph" target='_blank'><i className="bi bi-github"></i> </a></li>
                    <li><a href="http://www.linkedin.com/in/arthur-js" target='_blank'><i className="bi bi-linkedin"></i></a></li>
                  </ul>
        </div>
      </div>
    </div>
  );
};

const SessaoSobre = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        <h2 className="about-title">Sobre Mim</h2>
        <p className="about-text" data-aos="fade-up" data-aos-delay="400">
        Olá, eu sou o Arthur, um desenvolvedor Full Stack com foco em tecnologias back-end, como Java, Spring Boot, Node.js, e bancos de dados relacionais como MySQL e PostgreSQL. No front-end, tenho experiência com HTML, CSS, JavaScript e frameworks como React.js, onde crio interfaces dinâmicas, responsivas e intuitivas. Minha paixão por desenvolvimento me permite construir soluções completas, desde APIs robustas até interfaces modernas e funcionais.
        </p>
        <p className="about-text" data-aos="fade-up" data-aos-delay="500">
        Sou movido pela busca constante de conhecimento, sempre explorando novas linguagens, ferramentas e metodologias para me tornar um profissional mais completo. Tenho um olhar analítico para resolver problemas de forma eficiente e criativa, e me dedico a projetos que possam gerar impacto positivo na vida das pessoas. Atualmente, estou em busca de oportunidades desafiadoras onde eu possa aplicar minhas habilidades, contribuir com soluções inovadoras e continuar evoluindo na minha carreira como desenvolvedor.
        </p>
      </div>
    </section>
  );
}

const SessaoHabilidades = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container" data-aos="fade-up">
        <h2>Minhas Habilidades</h2>
        <div className="skills-content">
          <div className="skills-icons">
            <img src={Java} alt="icone" className="icon-t" />
            <img src={Springboot} alt="icone" className="icon-t" />
            <img src={HTML} alt="icone" className="icon-t" />
            <img src={CSS} alt="icone" className="icon-t" />
            <br />
            <img src={JS} alt="icone" className="icon-t" />
            <img src={ReactIcon} alt="icone" className="icon-t" />
            <img src={Angular} alt="icone" className="icon-t" />
            <img src={TS} alt="icone" className="icon-t" />
            <br />
            <img src={Node} alt="icone" className="icon-t" />
            <img src={Python} alt="icone" className="icon-t" />
            <img src={SQL} alt="icone" className="icon-t" />
             
          </div>
          <div className="skills-text">
            <p>
              Aqui estão algumas das tecnologias com as quais tenho experiência.
              Trabalho com desenvolvimento front-end, back-end e ferramentas
              modernas para criar soluções eficientes e escaláveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SessaoProjetos = () => {
  return (
    <section id="projects" className="projects-section">
        <div className="container-projects" data-aos="fade-up">
          <h2>Meus Projetos</h2>
          <div className="conteudo-projects">
            <ProjectBox
              
              imgSrc={TaskManagerImg}
              title="Gerenciador de Tarefas"
              description="Um sistema completo de gerenciamento de tarefas com Java e Spring Boot."
              link="https://github.com/ArthurJsph/Gerenciamento-de-Tarefas"
              delay="200"
            />
            <ProjectBox
              title="Cardápio Digital"
              imgSrc={MenuAppImg}
              description="Aplicação interativa de cardápio digital utilizando React e Node.js."
              link="https://github.com/ArthurJsph/cardapio"
              delay="200"
            />
            <ProjectBox
              title="Biblioteca Virtual"
              imgSrc={LibraryImg}
              description="Sistema de Biblioteca Virtual com Java, React e PostgreSQL para reserva de livros."
              link="https://github.com/ArthurJsph/Biblioteca-virtual"
              delay="200"
            />
          </div>
        </div>
      </section>
  );};


  const SessaoContato = () => {
    return (
      <section id="contact" className="contact-section">
<div className="contact-box">
  <div className="contact-header">
    <header>Contato</header>
  </div>
  <div className="input-box">
    <input
      type="text"
      className="input-field"
      placeholder="Nome completo"
      autoComplete="off"
      required
    />
  </div>
  <div className="input-box">
    <input
      type="email"
      className="input-field"
      placeholder="Email"
      autoComplete="off"
      required
    />
  </div>
  <div className="input-box">
    <input
      type="tel"
      className="input-field"
      placeholder="Número de telefone"
      autoComplete="off"
      required
    />
  </div>
  <div className="input-box">
    <textarea
      className="input-field"
      placeholder="Digite sua mensagem"
      rows="4"
      required
    ></textarea>
  </div>
  <div className="input-submit">
    <button type="submit" className="submit-btn">Enviar</button>
  </div>
</div>
</section>
    );
  };

const Body = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



  return (
    <main>
      <SessaoPrincipal />
      <SessaoSobre />
      <SessaoHabilidades />
      <SessaoProjetos />
      <SessaoContato />
    </main>
  );
};

export default Body;
