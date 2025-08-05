// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
//       <h1 className="text-xl font-bold">Saransh Sharma</h1>
//       <ul className="flex space-x-6">
//         <li><a href="#home" className="hover:text-blue-500">Home</a></li>
//         <li><a href="#about" className="hover:text-blue-500">About</a></li>
//         <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
//         <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }


function Navbar() {
    return(
        <>
            
            <nav className="navbar-container">
                {/* <img src="../src/assets/react.svg" alt="" /> */}
                <h1>Portfolio</h1>
                <ul>
                    <a href="#home-section"><li>Home</li></a>
                    <a href="#about-section"><li>About</li></a>
                    <a href="#proj-section"><li>Projects</li></a>
                    <a href="#contact-section"><li>Contact</li></a>
                </ul>
            </nav>
        </>
    );
}

export default Navbar















