import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faCakeCandles,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const AboutStyle = styled.section`
  padding-top: 60px;
  padding-bottom: 120px;
  .container {
    h2 {
      margin-bottom: 60px;
    }
    .wrapper {
      display: flex;
      justify-content: space-between;

      .info {
        width: 30%;
        text-align: center;
        .icon {
          margin-bottom: 30px;
          font-size: 1.8em;
          font-weight: 600;
          svg {
            margin-right: 10px;
          }
        }
        .txt {
          font-size: 1.4em;
          p {
            &:first-child {
              margin-bottom: 10px;
            }
          }
        }
      }
      @media only screen and (max-width: 768px) {
        flex-direction: column;
        .info {
          width: 100%;
          margin-bottom: 80px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

const About: React.FC = () => {
  return (
    <AboutStyle>
      <div className="container">
        <h2>ABOUT</h2>
        <div className="wrapper">
          <div className="info name">
            <div className="icon">
              <FontAwesomeIcon icon={faIdCard} />
              이름
            </div>
            <div className="txt">김현지</div>
          </div>
          <div className="info birth">
            <div className="icon">
              <FontAwesomeIcon icon={faCakeCandles} />
              생년월일
            </div>
            <div className="txt">1992.03.26</div>
          </div>
          <div className="info contact">
            <div className="icon">
              <FontAwesomeIcon icon={faPaperPlane} />
              연락처
            </div>
            <div className="txt">
              <p>010-4433-5125</p>
              <p>hjck4433@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </AboutStyle>
  );
};
export default About;
