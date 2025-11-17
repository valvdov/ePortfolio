import './TaskPage.css';
import MindMap from "../assets/Mind_Map.png";
import Poster from "../assets/LifeIsTeamSport.png";

function Task2() {
  return (
    <div className="page-container">
      <h1>Task 2: Collaborative Mind Map and Individual Poster</h1>
        <section className="task-section">
            <p>
                This task focused on understanding the importance of teamwork in both academic and professional contexts. Using the Moodle Unit 2 Topic 4 materials (“Life is a Team Sport”), I explored key teamwork elements such as communication, empathy, emotional intelligence, and collaboration. I created an A3 academic poster that explains how these skills contribute to success in education and the workplace. As part of the team activity, I also produced a mind map which summarises the essential components of effective teamwork. This helped me develop my ability to work collaboratively, analyse information visually, and present academic content clearly.
            </p>
        </section>
        <section className="task-section">
            <h2>Mind Map (Collaborative)</h2>
            <div className="figure-image figure-image_big">
                <img src={MindMap} alt="Mind Map" />
                <p className="figure-caption">Figure 1: Mind Map <a href="#ref1">[1]</a></p>
            </div>
            <p>
                Collabarative Mind Map is availiable online on <a target="_blank" href="https://mm.tt/map/3856277306?t=I5ZQeQVCzc">MindMeister</a>
            </p>
        </section>
        <section className="task-section">
            <h2>Poster</h2>
            <div className="figure-image figure-image_big">
                <img src={Poster} alt="A3 Poster" />
                <p className="figure-caption">Figure 2: A3 Poster <a href="#ref2">[2]</a></p>
            </div>
            <p>
                Poster can be found online <a target="_blank" href="https://uowtsd-my.sharepoint.com/:i:/g/personal/2510682_student_uwtsd_ac_uk/IQD-9prXcWzGQovqZHA6ZAgkARGy36l1lNRTSF6wu2pEnug?e=EUbcsx">here</a>
            </p>
        </section>
        <section className="task-section">
            <h2>References</h2>
            <ol className="outcomes-list">
                <li id="ref1">Valerii, Yaroslav, Hora, “Life is a Team Sport(Effective Teamwork),” MindMeister, Available: URL <a target="_blank" href={"https://mm.tt/map/3856277306?t=I5ZQeQVCzc"}>https://mm.tt/map/3856277306?t=I5ZQeQVCzc</a>, Created: 3 November 2025.</li>
                <li id="ref2">Valerii, “A3 Poster” Affinity Studio, Available on OneDrive: URL <a target="_blank" href={"https://uowtsd-my.sharepoint.com/:i:/g/personal/2510682_student_uwtsd_ac_uk/IQD-9prXcWzGQovqZHA6ZAgkARGy36l1lNRTSF6wu2pEnug?e=EUbcsx"}>https://mm.tt/map/3856277306?t=I5ZQeQVCzc</a>, Created: 10 November 2025.</li>
            </ol>
        </section>
    </div>
  );
}

export default Task2;
