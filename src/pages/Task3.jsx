import './TaskPage.css';
import RefWorks1 from "../assets/RefWorks1.png";
import RefWorks2 from "../assets/RefWorks2.png";
import RefWorks3 from "../assets/RefWorks3.png";
import RefWorks4 from "../assets/RefWorks4.png";
import RefWorks5 from "../assets/RefWorks5.png";
import RefWorks6 from "../assets/RefWorks6.png";
import RefWorks7 from "../assets/RefWorks7.png";

function Task3() {
  return (
    <div className="page-container">
      <h1>Task 3: Virtual Collaboration and RefWorks</h1>
        <section className="task-section">
            <p>
                This task required the use of an automatic referencing tool to develop my academic writing and digital research skills. I selected a topic from Moodle Unit 3 on virtual collaboration and wrote a short academic report supported by credible sources. I used a digital reference management tool RefWorks to collect, organise, and automatically generate IEEE-style in-text citations and references. I also included screenshots demonstrating how the tool was used. This task helped me improve my digital literacy, understand the importance of correct referencing, and develop academic integrity skills essential for higher education and professional work in IT.
            </p>
        </section>
        <section className="task-section">
            <h2>Report on Virtual Collaboration</h2>
            <h3>Forming a Team</h3>
            <p>
                To complete the assignment for Moodle Unit 3, ‘Virtual Collaboration,’ I chose the topic ‘Forming a Team.’ This topic focuses on the critically important first stage of team development, which is particularly relevant in the context of modern virtual collaboration. The success of a team largely depends on creating positive virtual team dynamics – a mechanism that determines how the behaviour and characteristics of participants influence their interaction and task performance. <a href="#ref5">[5]</a>
            </p>
            <p>
                Team development is described by Tuckman's model, which, despite its classic nature, remains a relevant framework. At the Forming stage, teams face a number of challenges. Virtual teams are particularly vulnerable to failure due to geographical separation and limited communication channels. A review of the literature shows that these challenges are among the main barriers <a href="#ref3">[3]</a>. In particular, the emergency transition to virtual learning had a significant impact on the dynamics of student teams <a href="#ref2">[2]</a>.
            </p>
            <p>
                To overcome these difficulties, the primary task is to build trust. Effective teams are built on trust, which is the foundation for vulnerability and accountability. Building confidence in virtual teams is challenging due to limited face-to-face interaction, but it plays a central role in improving team effectiveness and promotes the open exchange of knowledge and information. <a href="#ref5">[5]</a>
            </p>
            <p>
                A key factor for success is psychological safety. This climate assumes that employees can freely express ideas, ask questions, or report mistakes without fear of being judged <a href="#ref5">[5]</a>. Research shows that e-leadership and its impact on team dynamics are an important condition for success <a href="#ref4">[4]</a>. The effective distribution of diverse leadership roles is also important for improving team effectiveness in a virtual learning environment <a href="#ref1">[1]</a>.
            </p>
            <p>
                At the formation stage, it is important to set clear goals. To do this, it is recommended to use the FAST framework, which requires goals to be Frequently Discussed, Ambitious, Specific, and Transparent. <a href="#ref5">[5]</a>
            </p>
        </section>
        <section className="task-section">
            <h2>Step-by-step process of using RefWorks with visuals</h2>
            <p>
                The use of automatic Reference Tools begins with the preliminary download of sources in PDF format, which allows them to be added to the RefWorks library. Integration was achieved by selecting the Add and Upload Document functions, as detailed in Figure 1 and Figure 2.
            </p>
            <div className="figure-image figure-image_flex">
                <div>
                    <img src={RefWorks1} alt="RefWorks" />
                    <p className="figure-caption">Figure 1: RefWorks</p>
                </div>
               <div>
                   <img src={RefWorks2} alt="RefWorks Upload Document" />
                   <p className="figure-caption">Figure 2: RefWorks Upload Document</p>
               </div>
            </div>
            <p>
                After selecting the downloaded source, the system began automatic processing of the file, as shown in Figure 3
            </p>
            <div className="figure-image figure-image_big">
                    <img src={RefWorks3} alt="RefWorks Preparing Document" />
                    <p className="figure-caption">Figure 3: RefWorks Preparing Document</p>
            </div>
            <p>
                Upon completion of processing, the correct title appeared in RefWorks, along with all the necessary reference data (author, year, title), as illustrated in Figure 4 and Figure 5.
            </p>
            <div className="figure-image">
                <div className="figure-image_big">
                    <img src={RefWorks4} alt="RefWorks Reference Document" />
                    <p className="figure-caption">Figure 4: RefWorks Reference Document </p>
                </div>
                <div>
                    <img src={RefWorks5} alt="RefWorks Reference Document Info" />
                    <p className="figure-caption">Figure 5: RefWorks Reference Document Info</p>
                </div>
            </div>
            <p>
                All other sources used for the work were added to the system in the same way.
            </p>
            <p>
                The bibliography generation function was used for the final formatting of the reference list. As shown in Figure 9, the ‘Create Bibliography’ function was selected in the top menu to create a reference list. In the new window, the required IEEE style was selected and applied, resulting in the final list of sources used in this work.
            </p>
            <div className="figure-image">
                <img src={RefWorks6} alt="RefWorks Create Bibliography" />
                <p className="figure-caption">Figure 6: RefWorks Create Bibliography</p>
            </div>
            <p>
                Figure 7 shows how this formatted list looks on the RefWorks website. This process ensures effective reference management and academic integrity when citing all materials used in the work.
            </p>
            <div className="figure-image figure-image_big">
                <img src={RefWorks7} alt="RefWorks References List" />
                <p className="figure-caption">Figure 7: RefWorks References List</p>
            </div>
        </section>
        <section className="task-section">
            <h2>References</h2>
            <ol className="outcomes-list">
                <li id="ref1">C. C. Chen, J. Wu, S. C. Yang and H. Tsou. C. C. Chen, J. Wu, S. C. Yang and H. Tsou. Importance of diversified leadership roles in improving team effectiveness in a virtual collaboration learning environment. Importance of diversified leadership roles in improving team effectiveness in a virtual collaboration learning environment.</li>
                <li id="ref2">S. Wei, L. Tan, Y. Zhang and M. Ohland. S. Wei, L. Tan, Y. Zhang and M. Ohland. The effect of the emergency shift to virtual instruction on student team dynamics. The effect of the emergency shift to virtual instruction on student team dynamics. European Journal of Engineering Education European Journal of Engineering Education 4949(1), pp. 139. pp. 139. 2023. . DOI: 10.1080/03043797.2023.2217422.</li>
                <li id="ref3">S. Morrison-Smith and J. Ruiz. S. Morrison-Smith and J. Ruiz. Challenges and barriers in virtual teams: A literature review. Challenges and barriers in virtual teams: A literature review. SN Appl. Sci. SN Appl. Sci. 22(6), 2020. . DOI: 10.1007/s42452-020-2801-5.</li>
                <li id="ref4">Y. He, C. Cheng and L. Wang. Y. He, C. Cheng and L. Wang. Unmasking the effects of E-leadership on virtual team effectiveness by an integrated fsQCA and NCA method. Unmasking the effects of E-leadership on virtual team effectiveness by an integrated fsQCA and NCA method. PLoS One PLoS One 2020(9), 2025. . DOI: 10.1371/journal.pone.0331500.</li>
                <li id="ref5">UWTSD. UNIT 3 virtual collaboration topic 1 forming a team. Available: <a target="_blank" href="https://moodle.uwtsd.ac.uk/mod/scorm/player.php?a=6771&currentorg=unit_3_topic_1_ORG&scoid=14549&sesskey=Io5Nnb9kJJ&display=popup&mode=normal">https://moodle.uwtsd.ac.uk/mod/scorm/player.php?a=6771&</a></li>
            </ol>
        </section>
    </div>
  );
}

export default Task3;
