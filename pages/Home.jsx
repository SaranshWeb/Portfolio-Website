// import React from 'react';
// import Typed from 'react-typed';


// import React, { useEffect, useRef } from 'react';
// import Typed from 'typed.js';



// function Home(){

    
//     return(
//         <>
//             <div className="home-container">
//                 <h1>Saransh Sharma
//                     <Typed
//         strings={["Saransh Sharma"]}
//         typeSpeed={100}
//         showCursor={true}
//         cursorChar="|"
//       />
//                 </h1>
//                 <h3>Computer Science Student</h3>
//                 <p>Passionate about creating innovative software solutions and exploring the intersection of technology and human experience.</p>
//                 <div className="button-container">
//                     <button>View My Work</button>
//                     <button>Get In Touch</button>
//                 </div>
//                 {/* <div className="socialButtonContainer">
//                     <button>L</button>
//                     <button>G</button>
//                     <button>E</button>
//                 </div> */}
//             </div>
//         </>
//     );
// }

// export default Home









import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Saransh Sharma"],
      startDelay: 650,
      typeSpeed: 100,
      showCursor: true,
      cursorChar: "|",
      onComplete: () => {
        setTimeout(() => {
          // Find the cursor element and hide it
          const cursor = el.current.nextSibling;
          if (cursor && cursor.classList.contains('typed-cursor')) {
            cursor.style.display = 'none';
          }
        }, 2000); // 2 second delay
      }
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div id='home-section' className="home-container">
      <h1><span ref={el}></span></h1>
      <h3>Computer Science Student</h3>
      <p>Passionate about creating innovative software solutions and exploring the intersection of technology and human experience.</p>
      <div className="button-container">
        <a href="#proj-section"><button>View My Work</button></a>
        <a href="#contact-section"><button>Get In Touch</button></a>
      </div>
    </div>
  );
}

export default Home;
