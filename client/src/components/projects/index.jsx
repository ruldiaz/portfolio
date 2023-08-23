import React from 'react';
import petbook from '../../images/petbook.png';
import resume from '../../images/resume.pdf';

function Projects() {
  return (
    <>
      <a href={resume} target="_blank" id="projects">
        - View full resume -
      </a>
      <br />
      <br />
      <br />
      <a
        href="https://proyecto-final-pet-book.vercel.app/"
        target="_blank"
        className="project"
      >
        <div id="experience">
          <div className="left-experience">
            <img src={petbook} alt="petbook" style={{ width: 115 }} />
          </div>
          <article className="card">
            <div className="right-experience">
              <h3>
                Petbook Adoption App <br />
                <span className="subtitle">Academic</span>
              </h3>
              <p>
                Created to connect people with Pet Shelters. The manager of site
                is able to sell products and food through an ecommerce system
                integrated to to the app. The PERN project is fully automated,
                there is an admin section and forms for the users to register
                and login.
              </p>
              <ul className="technologies">
                <li>React JS</li>
                <li>Redux JS</li>
                <li>Tailwind</li>
                <li>Node Js</li>
                <li>JavaScript</li>
                <li>PostgreSQL</li>
                <li>Express JS</li>
              </ul>
            </div>
          </article>
        </div>
      </a>
      <br />
      <a
        href="https://proyecto-final-pet-book.vercel.app/"
        target="_blank"
        className="project"
      >
        <div id="experience">
          <div className="left-experience">
            <img src={petbook} alt="petbook" style={{ width: 115 }} />
          </div>
          <article className="card">
            <div className="right-experience">
              <h3>
                Building Materials <br />
                <span className="subtitle">Professional</span>
              </h3>
              <p>
                The app promotes the products and services for a steel and
                cement distribution company. Data is collected from an ERP
                system and maintained through MongoDB.
              </p>
              <ul className="technologies">
                <li>Vanilla JS</li>
                <li>Node JS</li>
                <li>MongoDB</li>
                <li>JavaScript</li>
                <li>Express JS</li>
              </ul>
            </div>
          </article>
        </div>
      </a>
    </>
  );
}

export default Projects;
