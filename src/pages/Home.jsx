import './Home.css';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to My E-Portfolio</h1>
      
      <section className="intro-section">
        <h2>Valerii Vdovin 2510682 – Learning in the Digital Era</h2>
        <p>
            This e-portfolio presents my personal journey through the ACCA4025 module, where I have developed key academic, digital, and professional skills.
            Through this learning process, I explored how technology supports critical thinking, communication, and collaboration — all essential for success in today’s digital workplace.
        </p>
      </section>

      <section className="overview-section">
        <h2>Portfolio Overview</h2>
        <p>
            This portfolio brings together the key stages of my learning, reflection, and skill development throughout the Learning in the Digital Era module.
            Each task demonstrates my ability to apply digital literacy, academic research, and professional communication in practical contexts.

            From mastering IEEE referencing to collaborating online and creating an interactive e-portfolio, this work showcases my continuous progress and readiness for future professional challenges.
        </p>

          <div className="task-cards">
              <Link to='/task1'><div className="task-card">
            <h3>Task 1</h3>
            <p>IEEE Referencing & written summary on essential academic and employment skills</p>
            <p className="task-description">
                This task helped me develop key academic and employability skills such as time management, digital literacy, and critical thinking. These skills are essential for success in higher education and in my future IT career as a software developer. I used the IEEE referencing style to maintain academic integrity and cite credible sources.
            </p>
              </div></Link>

            <Link to='/task2'><div className="task-card">
            <h3>Task 2</h3>
            <p>Collaborative Teamwork and Professional Academic poster (A3 Poster)</p>
            <p className="task-description">
                This task explored the importance of teamwork in academic and professional settings, focusing on communication, empathy, emotional intelligence, and collaboration. I created an A3 academic poster and a mind map to visually present key teamwork skills and demonstrate effective information analysis and collaborative work.
            </p>
          </div>
            </Link>

            <Link to='/task3'><div className="task-card">
            <h3>Task 3</h3>
            <p>Automatic Referencing tool</p>
            <p className="task-description">
                This task focused on developing academic writing and digital research skills using an automatic referencing tool. I wrote a short report on virtual collaboration, using RefWorks to collect sources and generate IEEE-style citations. Screenshots showed how the tool was used. The task strengthened my digital literacy, understanding of correct referencing, and academic integrity skills.
            </p>
            </div></Link>
            <Link to='/task4'>
                <div className="task-card">
                <h3>Task 4</h3>
                <p>E-Portfolio creation and review</p>
                <p className="task-description">
                    In this task, I created an online e-portfolio to present all work from Tasks 1–3. I organised content into clear sections with visuals, screenshots, references, and links. The portfolio showcases my academic progress, digital skills, and ability to use web tools effectively, helping me learn how to present work professionally for online audiences.
                </p>
            </div>
            </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
