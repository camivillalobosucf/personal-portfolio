import './Home.css';
import profilePic from '../assets/camiprofilepic2.jpeg';

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Welcome</h1>

      <div className="home-content">
        <img src={profilePic} alt="Camila Villalobos" className="profile-pic" />

        <p className="home-description">
        Hello and welcome to my portfolio! I'm Camila Villalobos, a web design 
        student and graphic designer based in Orlando, Florida. I'm currently 
        pursuing my B.A. in Digital Media at UCF. In this website, you'll find 
        projects that showcase my work in server-side scripting, mobile development, 
        front-end design, and more. Thanks for visiting!
        </p>
      </div>
    </div>
  );
}

export default Home;
