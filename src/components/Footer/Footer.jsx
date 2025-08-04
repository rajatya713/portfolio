import {FaLinkedin, FaInstagram} from 'react-icons/fa'

export default function Footer() {

  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if(section){
      section.scrollIntoView({behaviour:"smooth"})
    }
  }
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Rajat Yadav</h2>

        {/* Navigation links  */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Project", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item,index) => (
            <button key={index}
            onClick={() => handleScroll(item.id)}
            className="hover:text-purple-500 text-sm sm:text-base my-1">
              {item.name}
            </button>
          ))
          }
        </nav>

        {/* Social media icons  */}
        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
          {[
            {icon:<FaLinkedin/>,link:"https://www.linkedin.com/in/rajat-yadav-5237721b9/"},
            {icon:<FaInstagram/>,link:"https://www.instagram.com/rajat_yadav_024/"}
          ].map((item,index) => (
            <a key={index} href={item.link} target='_blank' rel='noopener noreferrer' 
            className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'>
              {item.icon}
            </a>
          ))}
        </div>
        {/* copyright text  */}
        <p className='text-sm text-gray-400 mt-6'>
          © 2025 Rajat Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
