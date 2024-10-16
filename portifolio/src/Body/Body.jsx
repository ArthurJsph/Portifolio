import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import './Body.css';
import Java from '../assets/java.png';
import JS from '../assets/script-java.png';
import Python from '../assets/python.png';
import SQL from '../assets/mysql.png';
import AJImg from '../assets/profile-pic.png';


const Body = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



  return (
    <>
      {/* Sessão principal com o nome e título */}
      <div className="main-section">
        <div className="profile-container" id="home">
          <img src={AJImg} alt="Foto de Arthur José" className="profile-pic" /> 
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
          >
            <span>Meu CV</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* Sessão de sobre mim */}
      <section className="about-section" id="about">
        <div className="about-container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <h2 className="about-title" data-aos="fade-up" data-aos-delay="300">Sobre Mim</h2>
          <p className="about-text" data-aos="fade-up" data-aos-delay="400">
            Olá, meu nome é Arthur e sou um desenvolvedor Full Stack com foco em
            tecnologias back-end como Java, Spring Boot, Node.js, e bancos de dados
            como MySQL e PostgreSQL. Tenho experiência em desenvolvimento front-end
            utilizando HTML, CSS, JavaScript e frameworks como React.js.
          </p>
          <p className="about-text" data-aos="fade-up" data-aos-delay="500">
            Além de programar, também estou sempre buscando aprender novas linguagens e
            ferramentas para aprimorar minhas habilidades e me tornar um desenvolvedor
            mais completo. Sou apaixonado por resolver problemas, criar soluções eficientes
            e trabalhar em projetos que possam impactar positivamente as pessoas.
          </p>
          <p className="about-text" data-aos="fade-up" data-aos-delay="600">
            Atualmente, estou em busca de novas oportunidades na área de desenvolvimento,
            onde eu possa aplicar meus conhecimentos e continuar crescendo na carreira
            como programador.
          </p>
        </div>
      </section>

      {/* Sessão de skills */}
      <section id="skills" className="skills">
        <div className="container-skills" data-aos="fade-up">
          <div className="headline-skills">
            <div className="text-headline-skills" data-aos="fade-up" data-aos-delay="200">
              <h2>Minhas Habilidades</h2>
              <p>Eu possuo 4 habilidades</p>
            </div>
          </div>

          <div className="conteudo-skills">
            <div className="box-skills" data-aos="fade-up" data-aos-delay="300">
              <img src={Java} alt="Java" className="icon" />
              <h3>Java</h3>
              <p>
                Tenho experiência sólida com Java e Spring Boot, com destaque para o desenvolvimento de um projeto de gerenciador de tarefas.
                Esse projeto envolve a criação de funcionalidades para adicionar, editar e gerenciar tarefas, aplicando boas práticas de programação e princípios de arquitetura de software.
              </p>
            </div>

            <div className="box-skills" data-aos="fade-up" data-aos-delay="400">
              <img src={JS} alt="JS" className="icon" />
              <h3>JavaScript</h3>
              <p>
                Tenho conhecimento em React, Node.js e TypeScript, além de ter desenvolvido um projeto de cardápio digital utilizando essas tecnologias.
                Nesse projeto, construí uma aplicação interativa e dinâmica, conectando o front-end com o back-end, garantindo uma experiência fluida para o usuário e utilizando boas práticas de programação no ecossistema JavaScript.
              </p>
            </div>

            <div className="box-skills" data-aos="fade-up" data-aos-delay="500">
              <img src={Python} alt="Python" className="icon" />
              <h3>Python</h3>
              <p>
                Em Python, desenvolvi projetos focados em sistemas bancários utilizando orientação a objetos, além de criar um bot automatizado para tarefas específicas.
                Esses projetos reforçaram meu entendimento sobre lógica de programação, estruturação de sistemas e automação de processos.
              </p>
            </div>

            <div className="box-skills" data-aos="fade-up" data-aos-delay="600">
              <img src={SQL} alt="SQL" className="icon" />
              <h3>Banco de Dados</h3>
              <p>
                Tenho experiência em trabalhar com MySQL e PostgreSQL, tendo utilizado essas tecnologias em diferentes projetos, como o gerenciamento de tarefas e o sistema de cardápio.
                Além disso, adquiri expertise em modelagem de dados, criação de consultas complexas e otimização de banco de dados para melhor desempenho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sessão de Projetos */}
      <section id="projects" className="projects-section">
        <div className="container-projects" data-aos="fade-up">
          <div className="headline-projects" data-aos="fade-up" data-aos-delay="200">
            <h2>Meus Projetos</h2>
            <p>Aqui estão alguns dos projetos em que trabalhei recentemente:</p>
          </div>

          <div className="conteudo-projects">
            <div className="box-project" data-aos="fade-up" data-aos-delay="300">
              <h3>Gerenciador de Tarefas</h3>
              <div className="button">
                <button><a href="https://github.com/ArthurJsph/Gerenciamento-de-Tarefas" target="_blank" rel="noopener noreferrer">Clique aqui</a></button>
              </div>
              <p>
                Um sistema completo de gerenciamento de tarefas desenvolvido com Java e Spring Boot, que permite aos usuários criar, editar e excluir tarefas.
              </p>
            </div>

            <div className="box-project" data-aos="fade-up" data-aos-delay="400">
              <h3>Cardápio Digital</h3>
              <div className="button">
                <button><a href="https://github.com/ArthurJsph/cardapio" target="_blank" rel="noopener noreferrer">Clique aqui</a></button>
              </div>
              <p>
                Uma aplicação interativa de cardápio desenvolvida com React, Node.js e TypeScript, que oferece uma experiência fluida para os usuários ao navegar pelos itens do menu.
              </p>
            </div>

            <div className="box-project" data-aos="fade-up" data-aos-delay="500">
              <h3>Sistema Bancário</h3>
              <div className="button">
                <button><a href="https://github.com/ArthurJsph/dio-trilha-python" target="_blank" rel="noopener noreferrer">Clique aqui</a></button>
              </div>
              <p>
                Um sistema bancário que utiliza orientação a objetos em Python, permitindo a realização de operações financeiras e gerenciamento de contas.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Sessão de Contato */}
            <section id="contact" className="contato">
        <div className="container-contato" data-aos="fade-up" data-aos-duration="1000">
          <div className="headline-contato" data-aos="fade-up" data-aos-delay="200">
            <div className="titulo-contato">
              <h1>Contato</h1>
            </div>
          </div>
          <div className="conteudo-contato" data-aos="fade-up" data-aos-delay="400">
            <div className="formulario-contato">
              <h2>Entre em contato</h2>
              <p>Caso deseje entrar em contato comigo, preencha o formulário abaixo:</p>
              <form className="form">
                <input type="text" placeholder="Digite seu nome completo" required />
                <input type="tel" placeholder="(55) 22222-2222" required />
                <input type="email" placeholder="Seu melhor email" required />
                <textarea name="mensagem" id="mensagem" placeholder="Escreva sua mensagem..." required></textarea>
                <button type="submit" className="btn">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;