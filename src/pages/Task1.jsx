import './TaskPage.css';
import TimeManagement from "../assets/Time_management.png";
import DigitalLiteracy from "../assets/Digital_literacy.jpg";
import CriticalThinking from "../assets/Critical_thinking.jpg";
import Tunitin from "../assets/Tunitin.png";

function Task1() {
    return (
        <div className="page-container">
            <h1>Task 1: Essential Academic and Employment Skills for the future career Path</h1>
            <section className="task-section">
            <p>
                This task focuses on developing essential academic and employability skills such as time management,
                digital literacy, and critical thinking. These abilities are crucial for success in higher education and in
                the IT field, where I plan to build my career as a software developer.
            </p>
            <p>
                I used IEEE referencing style to ensure academic integrity and cited various credible sources, including
                journal articles, books, and online materials.
            </p>
            </section>
            <section className="task-section">
                <h2>Report on Essential Academic and Employment Skills</h2>
                <p>
                    Essential skills are skills that are necessary for studying or working. Examples of such skills include:
                </p>
                <p>
                    Time management is a collection of behavioral skills that enable effective organization of one's studies and coursework <a href="#ref1">[1]</a>. These skills help learners enhance productivity and reach academic goals. In student life, time management is important for studying successfully, completing all tasks on time, and not missing or being late for classes. The same applies to work skills, which allow us to complete work tasks on time. Personally, for me, since I want to be a software developer, this skill is very important. Completing tasks on time allows me to avoid overworking.
                </p>
                <div className="figure-image">
                    <img src={TimeManagement} alt="Time management illustration" />
                    <p className="figure-caption">Figure 1: Time management <a href="#ref4">[4]</a></p>
                </div>
                <p>
                    Digital literacy is the ability to use, understand, and create information through digital technologies <a href="#ref2">[2]</a>. It involves reading, writing, and communicating across different digital platforms and media. This skill helps people think critically and participate effectively in today's digital world. Digital literacy helps us find, study, and use information available on the internet and on devices for our studies. We also gain the opportunity to communicate, collaborate, and learn online. In the workplace, this knowledge enhances communication and facilitates more convenient interactions with colleagues. It also helps track tasks. For me, this is one of the most important skills. Without such practical knowledge, it is impossible to work in the IT field.
                </p>
                <div className="figure-image">
                    <img src={DigitalLiteracy} alt="Digital literacy illustration" />
                    <p className="figure-caption">Figure 2: Digital literacy <a href="#ref2">[5]</a></p>
                </div>
                <p>
                    Critical thinking means making clear, reasoned judgments <a href="#ref3">[3]</a>. It relies on interpreting,  understanding, applying, and combining evidence from observation, reading, and experiments. Critical thinking is a necessary skill in learning. It allows you not only to memorise information, but also to analyse it and work with various sources. It also develops problem-solving skills.
                    Its use in the workplace is also important, as it helps in much the same way as in learning, but allows you not only to solve problems, but also to make the right decisions at work.
                </p>
                <div className="figure-image">
                    <img src={CriticalThinking} alt="Critical thinking illustration" />
                    <p className="figure-caption">Figure 3: Critical thinking <a href="#ref6">[6]</a></p>
                </div>
            </section>
            <section className="task-section">
                <h2>Evaluation of Task 1 (a) based on Similarity report</h2>
                <p>
                    My Turnitin similarity score was 21%. I think this is quite good, but there is still room for improvement. Most of the matches came from the references, which I can’t really change unless I use different sources. Some matches also happened because of common definitions, which raised my percentage a bit. Next time, I’ll try to paraphrase those sections and put the ideas in my own words while keeping the meaning. Overall, I feel my work is clear and well-organised, so I would give myself around 65-70%, which is a ‘Very Good’ grade for this assignment.
                </p>
                <div className="figure-image">
                    <img src={Tunitin} alt="Turnitin Score illustration" />
                    <p className="figure-caption">Figure 4: Turnitin Score</p>
                </div>
            </section>
                 <section className="task-section">
                     <h2>References</h2>
                     <ol className="outcomes-list">
                       <li id="ref1">S. Trentepohl, “How Did It Get So Late So Soon? The Effects of Time Management Knowledge and Practice on Students’ Time Management Skills and Academic Performance,” Sustainability, vol. 14, no. 9, p. 5097, 2022. </li>
                       <li id="ref2">K. A. Mills, L. Unsworth and L. Scholes, Literacy for Digital Futures: Mind, Body, Text, Oxford: Routledge, 20023. </li>
                         <li id="ref3">Institute for Academic Development, “Critical thinking,” The University of Edinburgh, [Online]. Available: <a href="https://institute-academic-development.ed.ac.uk/study-hub/learning-resources/critical">https://institute-academic-development.ed.ac.uk/study-hub/learning-resources/critical.</a> [Accessed 20 October 2025].</li>
                         <li id="ref4">Borderplex Jobs, “ob Readiness Workshops: Time Management and Problem Solving,” [Online]. Available: <a href="https://borderplexjobs.com/events-and-media/event-calendar/job-readiness-workshops-time-management-and-problem-solving">https://borderplexjobs.com/events-and-media/event-calendar/job-readiness-workshops-time-management-and-problem-solving.</a> [Accessed 2 November 2025].</li>
                         <li id="ref5">M. Foster, “The Importance of Digital Literacy in the 21st Century,” 6 September 2021. [Online]. Available: <a href="https://vocal.media/humans/the-importance-of-digital-literacy-in-the-21st-century"> https://vocal.media/humans/the-importance-of-digital-literacy-in-the-21st-century.</a> [Accessed 2 November 2025].</li>
                       <li id="ref6">S. D’Souza, “What is Critical Thinking?,” 21 July 2019. [Online]. Available: <a href="https://medium.com/@shawnkdsouza/what-is-critical-thinking-41f3ba755c02">https://medium.com/@shawnkdsouza/what-is-critical-thinking-41f3ba755c02.</a> [Accessed 2 November 2025].</li>
                     </ol>
                   </section>
        </div>
    );
}

export default Task1;
