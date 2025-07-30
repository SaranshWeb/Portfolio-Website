import React from 'react';

// const projectList = [
//   {
//     title: "IoT Smart Switch",
//     description: "Control relays using ESP8266 and MQTT. Configurable via web UI.",
//     tech: ["ESP8266", "MQTT", "HTML", "JavaScript"],
//     link: "#"
//   },
//   {
//     title: "Portfolio Website",
//     description: "React + Tailwind responsive website showcasing my work.",
//     tech: ["React", "Tailwind", "JavaScript"],
//     link: "#"
//   }
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 px-6">
//       <h1 className="text-3xl font-semibold mb-6">My <span style={{color:"blue"}}>Projects</span></h1>
//       <div className="grid gap-6 md:grid-cols-2">
//         {projectList.map((proj, idx) => (
//           <div key={idx} className="p-4 border rounded-lg bg-white dark:bg-gray-700">
//             <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
//             <p className="mb-2">{proj.description}</p>
//             <p className="text-sm text-gray-500 mb-2">{proj.tech.join(", ")}</p>
//             <a href={proj.link} className="text-blue-500 hover:underline">View Project</a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }





function Projects(){

  return(
    <>
      <div id='proj-section' className='projects-container'>

        <h1>My <span style={{color: "blue"}}>Projects</span></h1>
        <p style={{textAlign: "center"}}>Here are some of the projects I've worked on. Each one represents a challenge I've tackled and a skill I've developed.</p>
        
        <div className='projectCardContainer'>

          <div className='projectCard'>
            <img src="" alt="" />
            <h3>Project1</h3>
            <p className='projectCardP '>Discription of project1</p>
            <p className='projectCardP '>Discription of project1</p>

            <div className='spanPContainer'>
                <div className="spanP spanProjectP">
                <p>React</p>
                <p>TypeScript</p>
                <p>Tailwind</p>
                <p>Next.js</p>
              </div>
            </div>
            
            <div className='proj-btn'>
              <button className='proj-btn-1'>github</button>
              <button className='proj-btn-2'>deployed</button>
            </div>
          </div>


          <div className='projectCard'>
            <img src="" alt="" />
            <h3>Project2</h3>
            <p className='projectCardP'>Discription of project2</p>
            <p className='projectCardP'>Discription of project2</p>

            <div className='spanPContainer'>
                <div className="spanP spanProjectP">
                <p>React</p>
                <p>TypeScript</p>
                <p>Tailwind</p>
                <p>Next.js</p>
              </div>
            </div>

            <div  className='proj-btn'>
              <button className='proj-btn-1'>github</button>
              <button className='proj-btn-2'>deployed</button>
            </div>
          </div>

          {/* <div className='projectCard'>
            <img src="" alt="" />
          </div> */}
          {/* <div className='projectCard'>

          </div> */}
        </div>
      </div>
    </>
  );
}

export default Projects