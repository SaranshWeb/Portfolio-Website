// export default function Home() {
//   return (
//     <section id="home" className="h-screen flex items-center justify-center flex-col">
//       <h2 className="text-4xl font-bold">Hi, I'm Saransh</h2>
//       <p className="text-lg mt-2">Final Year CS Student | React & IoT Enthusiast</p>
//     </section>
//   );
// }






function Home(){
    return(
        <>
            <div className="home-container">
                <h1>Saransh Sharma</h1>
                <h3>Computer Science Student</h3>
                <p>Passionate about creating innovative software solutions and exploring the intersection of technology and human experience.</p>
                <div className="button-container">
                    <button>View My Work</button>
                    <button>Get In Touch</button>
                </div>
                {/* <div className="socialButtonContainer">
                    <button>L</button>
                    <button>G</button>
                    <button>E</button>
                </div> */}
            </div>
        </>
    );
}

export default Home