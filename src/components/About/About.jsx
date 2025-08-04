import { TypeAnimation } from "react-type-animation";
import Tilt from 'react-parallax-tilt'
import profile from '../../assets/profile.png'
export default function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] mt-14 md:mt-16 lg:mt-20 font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2  text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-bold mb-4 leading-tight">
            Rajat Yadav
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "Coder",
                2000,
                "Programmer",
                2000,
              ]}
              speed={50}
              deletionSpeed={50}
              repeat={Infinity}
              cursor={true}
              wrapper="span"
              className="text-[#8245ec] text-2xl"
            />
          </h3>
          {/* About me  */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10">
            I am a full-stack developer with over 2 years experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experience and efficient solutions.
          </p>
          <a href="https://drive.google.com/file/d/1hUpLODNp5P9FlbnwEwhfnHsRXiFYwh_m/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 hover:scale-1.05"
            style={{
              background:'linear-gradient(90deg,#8245ec,#a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Right side  */}
        <div className="md:w-1/2 flex justify-center md:justify-end ">
        <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[24rem] md:h-[24rem] border-4 border-purple-700 rounded-full"
        tiltAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}
        >
        <img src={profile} alt="profile image"
        className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]" />
        </Tilt>

        </div>
      </div>
    </section>
  );
}
