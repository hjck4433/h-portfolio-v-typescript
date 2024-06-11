import React from "react";
import { styled } from "styled-components";
import {
  Skill,
  frontendSkills,
  backendSkills,
  collaborationSkills,
  deploySkills,
} from "../data/skills";

const SkillsStyle = styled.section`
  padding-top: 60px;
  padding-bottom: 80px;
  /* background-color: #fafafa; */
  background-color: royalblue;
  .container {
    h2 {
      margin-bottom: 60px;
      color: #fff;
    }
    .wrapper {
      .wrap {
        display: flex;
        justify-content: space-between;
        .info {
          width: 48%;
          background-color: #fff;
          border-radius: 5px;
          padding: 20px;
          margin-bottom: 30px;
          h3 {
            font-size: 1.4em;
            font-weight: 600;
            margin-bottom: 30px;
            padding-bottom: 10px;
            border-bottom: 3px solid royalblue;
          }
          ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            li {
              height: 120px;
              width: 30%;
              border-radius: 5px;
              border: 2px solid #ddd;
              padding: 10px;
              margin-bottom: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              overflow: hidden;
              img {
                height: 100%;
                max-width: 100%;
                display: block;
                transition: all.8s;
                &:hover {
                  transform: scale(1.2);
                }
              }
            }
          }
        }
        @media only screen and (max-width: 980px) {
          &.top {
            flex-direction: column;
            .info {
              width: 100%;
            }
          }
        }
        &.bottom {
          .info {
            ul {
              li {
                width: 48%;
                img {
                  height: auto;
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
`;

const skillList = (skills: Skill[]) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.alt}>
          <img src={skill.src} alt={skill.alt} />
        </li>
      ))}
    </ul>
  );
};

const Skills: React.FC = () => {
  return (
    <SkillsStyle>
      <div className="container">
        <h2>Skills</h2>
        <div className="wrapper">
          <div className="wrap top">
            <div className="info frontend">
              <h3>Frontend</h3>
              {skillList(frontendSkills)}
            </div>
            <div className="info backend">
              <h3>Backend</h3>
              {skillList(backendSkills)}
            </div>
          </div>
          <div className="wrap bottom">
            <div className="info collab">
              <h3>Collaboration</h3>
              {skillList(collaborationSkills)}
            </div>
            <div className="info deploy">
              <h3>Deploy</h3>
              {skillList(deploySkills)}
            </div>
          </div>
        </div>
      </div>
    </SkillsStyle>
  );
};
export default Skills;
