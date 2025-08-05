// import React from 'react';

// export default function About() {
//   return (
//     <section id="about" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
//       <h2 className="text-3xl font-semibold mb-6">About Me</h2>
//       <p className="max-w-2xl">I am a final-year Computer Science Engineering student at Chitkara University. Passionate about building efficient frontends with React, integrating IoT projects using ESP32/ESP8266, and solving real-world problems using code.</p>
//     </section>
//   );
// }




function About(){
  return(
    <>
      <div id="about-section" className="aboutContainer">
        <h1>About <span style={{color: "blue"}}>Me</span></h1>
        <p id="aboutP1">I'm a final year Computer Science student passionate about building innovative software solutions. I love turning complex problems into simple, beautiful, and intuitive solutions.</p>
        <div className="cards-container">

          <div className="card">
            <img src="" alt="" />
            <h3>Frontend Development</h3>
            <p>React, TypeScript, Tailwind CSS, Next.js</p>

            <div className="spanP">
              <p>React</p>
              <p>TypeScript</p>
              <p>Tailwind</p>
              <p>Next.js</p>
            </div>

          </div>

          <div className="card">
            <img src="" alt="" />
            <h3>Backend Development</h3>
            <p>Node.js, Python, PostgreSQL, MongoDB</p>

            <div className="spanP">
              <p>Node.js</p>
              <p>Python</p>
              <p>PostgreSQL</p>
              <p>MongoDB</p>
            </div>
          </div>

          <div className="card">
            <img src="" alt="" />
            <h3>Mobile Development</h3>
            <p>React Native, Flutter, iOS, Android</p>

            <div className="spanP">
              <p>React Native</p>
              <p>Flutter</p>
              <p>iOS</p>
              <p>Android</p>
            </div>
          </div>

          <div className="card">
            <img src="" alt="" />
            <h3>DevOps & Tools</h3>
            <p>Docker, AWS, Git, CI/CD</p>
            
            <div className="spanP">
              <p>Docker</p>
              <p>AWS</p>
              <p>Git</p>
              <p>CI/CD</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default About;