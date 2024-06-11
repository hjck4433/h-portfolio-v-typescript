import html5 from "../images/skills/fe_html5.png";
import css3 from "../images/skills/fe_css3.png";
import javascript from "../images/skills/fe_javascript.png";
import jquery from "../images/skills/fe_jquery.jpg";
import reactlogo from "../images/skills/fe_react.png";
import sass from "../images/skills/fe_sass.png";
import springboot from "../images/skills/be_springboot.jpg";
import jpa from "../images/skills/be_jpa.png";
import jdbc from "../images/skills/be_jdbc.png";
import oracle from "../images/skills/be_oracle.png";
import mysql from "../images/skills/be_mysql.png";
import flask from "../images/skills/be_flask.png";
import github from "../images/skills/collab_github.png";
import figma from "../images/skills/collab_figma.png";
import aws from "../images/skills/deploy_aws.png";
import netlify from "../images/skills/deploy_netlify.png";

export interface Skill {
  src: string;
  alt: string;
}

export const frontendSkills: Skill[] = [
  { src: html5, alt: "html5" },
  { src: css3, alt: "css3" },
  { src: javascript, alt: "javascript" },
  { src: jquery, alt: "jquery" },
  { src: sass, alt: "sass" },
  { src: reactlogo, alt: "react" },
];

export const backendSkills: Skill[] = [
  { src: springboot, alt: "springboot" },
  { src: jpa, alt: "jpa" },
  { src: jdbc, alt: "jdbc" },
  { src: oracle, alt: "oracle" },
  { src: mysql, alt: "mysql" },
  { src: flask, alt: "flask" },
];

export const collaborationSkills: Skill[] = [
  { src: github, alt: "github" },
  { src: figma, alt: "figma" },
];

export const deploySkills: Skill[] = [
  { src: aws, alt: "aws" },
  { src: netlify, alt: "netlify" },
];
