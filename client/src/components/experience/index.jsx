import React from 'react';

export default function Experience() {
  return (
    <>
      <div id="experience">
        <div className="left-experience">
          <p>2023 -- PRESENT</p>
        </div>
        <article className="card">
          <div className="right-experience">
            <h3>
              Full Stack Developer <br />
              <span className="subtitle">Professional</span>
            </h3>
            <p>
              I'm committed to staying up-to-date with the latest industry
              trends and tools, ensuring that my clients receive the best
              possible solutions. As a self-employed professional, I take pride
              in delivering high-quality code and collaborating closely with
              clients to turn their visions into reality."
            </p>
            <ul className="technologies">
              <li>React</li>
              <li>React Native</li>
              <li>SCSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </article>
        <div className="left-experience">
          <p>2022 -- 2023</p>
        </div>
        <article className="card">
          <div className="right-experience">
            <h3>
              Full Stack Developer <br />
              <span className="subtitle">Henry Academic</span>
            </h3>
            <p>
              During the Henry Bootcamp, the use of libraries as React and Redux
              for an effective and practical design of the frontend was used.
              And for the backend, I used Express on Node JS, and for the
              database PostgreSQL and MongoDB.
            </p>
            <ul className="technologies">
              <li>React</li>
              <li>Redux</li>
              <li>Node JS</li>
              <li>JavaScript</li>
              <li>Express JS</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
}
