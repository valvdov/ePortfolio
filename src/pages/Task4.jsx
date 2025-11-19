import './TaskPage.css';
import Webstorm from "../assets/Webstrom_IDE.png";
import code from "../assets/code_example.png";
import project from "../assets/Project_structure.png";

function Task4() {
  return (
    <div className="page-container">
      <h1>Task 4: E-Portfolio creation and review</h1>
      
      <section className="task-section">
        <p>
            In this task, I created an online e-portfolio to present all completed work for Tasks 1, 2, and 3. I organised the portfolio into clear sections, added written content, visuals, screenshots, references, and external links to my poster and mind map. The e-portfolio allows me to showcase my academic progress, digital skills, and reflective abilities in a professional format. It also demonstrates my capability to use web-based tools effectively—an important competency for modern IT and software development careers. This task helped me understand how to present work professionally and structure information for online audiences.
        </p>
      </section>
        <section className="task-section">
            <h2>E-Portfolio Creation</h2>
            <p>
                For convenience, all e-portfolio materials are organised into sections and accessible via the Header menu. Click on the relevant tab to go to the page for the task you require.
            </p>
            <p>
                The source code for the e-portfolio I developed is publicly available on <a target="_blank" href="https://github.com/valvdov/ePortfolio">GitHub</a>. The repository contains all project files, including components, styles, configuration, and documentation.
            </p>
        </section>
        <section className="task-section">
            <h2>Illustrative Review of E-Portfolio tool Selection</h2>
            <p>
                To create my e-portfolio, I used Vite + React, as this stack provides high performance, flexibility, and allows me to create fully customisable web pages. Development was done in WebStrom by JetBrains, which provides advanced functionality for working with components, project structure, and visual interface elements.
            </p>
            <div className="figure-image">
                <img src={Webstorm} alt="Webstorm_IDE" />
                <p className="figure-caption">Figure 1: WebStorm IDE</p>
            </div>
            <p>
                Using React allowed me to create a structured and user-friendly e-portfolio with separate pages for each task. I developed components for text blocks, sections, navigation, and visual materials. Vite ensured fast compilation and instant updates during development, which sped up the work and helped me fine-tune the display of all elements
            </p>
            <div className="figure-image">
                <img src={project} alt="project_structure" />
                <p className="figure-caption">Figure 2: Project Structure</p>
            </div>
            <p>
                Working in WebStorm, I used built-in tools for code formatting, autocompletion, error highlighting, and project structure management. This ensured precise customisation of fonts, indents, block placement, and site responsiveness.
            </p>
            <p>
                As a result, I created a full-fledged e-portfolio that displays all completed tasks and visual materials, including an A3 poster, mind map, and report with automatic links. This approach allowed me to apply practical front-end development skills and improve my digital competencies in a real project.
            </p>
            <div className="figure-image figure-image_big">
                <img src={code} alt="code_example" />
                <p className="figure-caption">Figure 3: WebStorm Task2 page code example</p>
            </div>
        </section>
    </div>
  );
}

export default Task4;
