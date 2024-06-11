import { styled } from "styled-components";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import introBg from "../images/bg_sky.jpg";

const IntroStyle = styled.section`
  background-image: url(${introBg});
  background-size: cover;
  background-attachment: fixed;
  padding-top: 80px;
  height: 1800px;
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);

    .container {
      padding-top: 100px;
      padding-bottom: 200px;
      height: 100%;
      .textArea {
        position: sticky;
        top: 360px;
        .box {
          p {
            color: #fafafa;
            text-align: center;
            font-size: 2.6em;
            &.hello {
              font-size: 4.8em;
              font-weight: 600;
              margin-bottom: 30px;
            }
          }
          &:last-child {
            position: absolute;
            top: 0;
            width: 100%;
            p {
              line-height: 1.6;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding-top: 40px;
    .wrapper {
      .container {
        .textArea {
          .box {
            &:last-child {
              p {
                font-size: 1.8em;
                letter-spacing: -1.2px;
              }
            }
          }
        }
      }
    }
  }
`;

const Intro: React.FC = () => {
  const introRef = useRef<HTMLElement>(null);
  const [firstBoxOpacity, setFirstBoxOpacity] = useState<number>(1);
  const [secondBoxOpacity, setSecondBoxOpacity] = useState<number>(0);
  const { scrollYProgress } = useScroll({ target: introRef });

  useEffect(() => {
    const updateOpacities = () => {
      const progress = scrollYProgress.get();
      const newFirstBoxOpacity = 1 - Math.min(progress / 0.5, 1);
      const newSecondBoxOpacity = Math.min((progress - 0.5) / 0.5, 1);

      setFirstBoxOpacity(newFirstBoxOpacity);
      setSecondBoxOpacity(newSecondBoxOpacity);
    };

    const unsubscribe = scrollYProgress.onChange(updateOpacities);

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <IntroStyle ref={introRef}>
      <div className="wrapper">
        <div className="container">
          <div className="textArea">
            <motion.div
              className="box"
              style={{ opacity: firstBoxOpacity }}
              transition={{ duration: 0.5 }}
            >
              <p className="hello">안녕하세요!</p>
              <p>신입 개발자 김현지 입니다 :)</p>
            </motion.div>
            <motion.div
              className="box"
              style={{ opacity: secondBoxOpacity }}
              transition={{ duration: 0.5 }}
            >
              <p>기본에 충실한 기술 스택을 구축해나가는,</p>
              <p>항상 발전하며 성장하는 개발자를 목표로 하고 있습니다.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </IntroStyle>
  );
};

export default Intro;
