import './Projects.css'; // Make sure to rename the CSS too!
import project1 from '../assets/project1_moviereview.png';
import project2 from '../assets/project2_billingsapp.jpg';
import project3 from '../assets/project3_taskio.png';

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-title">Web Design Projects</h1>

      <div className="cards-container">
        <div className="card">
          <img src={project1} alt="Project 1" className="card-img" />
          <div className="card-content">
            <div className="text-content">
              <h2 className="card-title">Movie Review CMS</h2>
              <p className="card-description">
                CMS project that allows users to explore and comment on movie reviews.
                Built with PHP, MySQL, and HTML/CSS, it features user authentication and
                alphabetical sorting, creating an interactive and organized experience for 
                movie reviewers. If you want to try it out, click "See Project" and 
                login with the user and password "review"    
              </p>
              <a href="https://students.gaim.ucf.edu/~ca575679/dig3134c/assignment05/login.php" className="card-link" target="_blank" rel="noopener noreferrer">See Project</a>
              </div>
          </div>
        </div>

        <div className="card">
          <img src={project2} alt="Project 2" className="card-img" />
          <div className="card-content">
            <div className="text-content">
              <h2 className="card-title">Billings App Re-Design</h2>
              <p className="card-description">
                UX/UI case study focused on redesigning the Billings Ovulation Tracking App
                to enhance usability, modernize the visual design, and improve the user journey for individuals tracking fertility.
              </p>
              <a href="https://www.behance.net/gallery/200864449/Case-Study-Billings-Ovulation-App-Redesign" className="card-link" target="_blank" rel="noopener noreferrer">See Project</a>
              </div>
          </div>
        </div>

        <div className="card">
          <img src={project3} alt="Project 3" className="card-img" />
          <div className="card-content">
            <div className="text-content">
              <h2 className="card-title">React Native To-Do App</h2>
              <p className="card-description">
                A React Native TODO app allowing users to create, view, and complete tasks dynamically,
                demonstrating list rendering and user input handling in real time.
              </p>
              <a href="https://camivillalobosucf.github.io/expo-todo-list" className="card-link" target="_blank" rel="noopener noreferrer">See Project</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
