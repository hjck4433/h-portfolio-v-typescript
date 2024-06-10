import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";

const HeaderComp = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 9999;
  backdrop-filter: blur(40px);
  background-color: rgba(255, 255, 255, 0.7);
  top: 0;
  left: 0;
  border-bottom: 1px solid #ccc;
  .container {
    height: 100%;
    /* outline: 1px solid red; */
    nav {
      height: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
      .logo {
        width: 64%;
        height: 80%;
        display: flex;
        justify-content: start;
        align-items: center;
        /* outline: 1px solid red; */
        svg {
          height: 90%;
          cursor: pointer;
          &:hover {
            path {
              fill: royalblue;
            }
            rect {
              stroke: royalblue;
            }
          }
        }
      }
      ul {
        width: 36%;
        height: 100%;
        /* outline: 3px solid yellow; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.3em;
        li {
          cursor: pointer;
          font-weight: 600;
          &:hover {
            color: royalblue;
          }
          a {
            svg {
              font-size: 1.6em;
            }
            &:hover {
              color: orange;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    height: 40px;
    .container {
      nav {
        .logo {
          width: 54%;
        }
        ul {
          width: 46%;
          font-size: 1.1em;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .container {
      nav {
        .logo {
          width: 40%;
        }
        ul {
          width: 60%;
        }
      }
    }
  }
`;

// interface HeaderProps {
//   topRef: RefObject<HTMLDivElement>;
//   aboutRef: RefObject<HTMLDivElement>;
//   skillsRef: RefObject<HTMLDivElement>;
//   projectsRef: RefObject<HTMLDivElement>;
// }

const Header: any = () => {
  return (
    <HeaderComp>
      <div className="container">
        <nav>
          <div className="logo">
            <Logo />
          </div>
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>
              <a
                href="https://github.com/hjck4433"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderComp>
  );
};
export default Header;
