import './Home.css';
import profilePic from '../assets/camiprofilepic2.jpeg';

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Welcome</h1>

      <div className="home-content">
        <img src={profilePic} alt="Camila Villalobos" className="profile-pic" />

        <p className="home-description">
          Hello! I'm Camila Villalobos, a passionate UX/UI designer and web developer based in Orlando, Florida.
          With a strong foundation in digital media and a love for creating clean, user-centered designs,
          I specialize in building websites and applications that are both beautiful and functional.
          My background in graphic design and front-end development allows me to bridge the gap between creativity and technology,
          bringing ideas to life through thoughtful design solutions.
          I am currently pursuing my Bachelor of Arts in Digital Media at the University of Central Florida,
          and I’m dedicated to growing my skills every day. Thank you for visiting my portfolio!
        </p>
      </div>
    </div>
  );
}

export default Home;
