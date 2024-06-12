import { styled } from "styled-components";
import ProjectInfo from "./ProjectInfo";
import projectList from "../data/project";

const ProjectsStyle = styled.section`
  padding-top: 60px;
  padding-bottom: 80px;
  .container {
    h2 {
      margin-bottom: 60px;
    }
  }
`;

const Projects: React.FC = () => {
  return (
    <>
      <ProjectsStyle>
        <div className="container">
          <h2>Projects</h2>

          <div className="projectWrapper">
            {projectList.map((project) => (
              <ProjectInfo project={project} key={project.name} />
            ))}
          </div>
        </div>
      </ProjectsStyle>
    </>
  );
};
export default Projects;
