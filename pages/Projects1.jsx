
function Projects1(){
  return(
    <>
      <div id="project1-section" className="Project1Container">
        <h1>My <span style={{color: "blue"}}>Projects</span></h1>
        <p id="project1P1">Here are some of the projects I've worked on. Each one represents a challenge I've tackled and a skill I've developed.</p>
        <div className="project1-container">

          <div className="proj1card">
            {/* <img src="" alt="" /> */}
            <div className="proj1img"></div>
            <h3>Frontend Development</h3>
            <p>React, TypeScript, Tailwind CSS, Next.js</p>

            <div className="proj1spanP">
              <p>React</p>
              <p>TypeScript</p>
              <p>Tailwind</p>
              <p>Next.js</p>
            </div>

          </div>

          <div className="proj1card">
            <img src="" alt="" />
            <h3>Backend Development</h3>
            <p>Node.js, Python, PostgreSQL, MongoDB</p>

            <div className="proj1spanP">
              <p>Node.js</p>
              <p>Python</p>
              <p>PostgreSQL</p>
              <p>MongoDB</p>
            </div>
          </div>

          {/* <div className="proj1card">
            <img src="" alt="" />
            <h3>Mobile Development</h3>
            <p>React Native, Flutter, iOS, Android</p>

            <div className="proj1spanP">
              <p>React Native</p>
              <p>Flutter</p>
              <p>iOS</p>
              <p>Android</p>
            </div>
          </div> */}

          {/* <div className="proj1card">
            <img src="" alt="" />
            <h3>DevOps & Tools</h3>
            <p>Docker, AWS, Git, CI/CD</p>
            
            <div className="proj1spanP">
              <p>Docker</p>
              <p>AWS</p>
              <p>Git</p>
              <p>CI/CD</p>
            </div>
          </div> */}

        </div>
      </div>
    </>
  );
}

export default Projects1;