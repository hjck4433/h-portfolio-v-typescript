import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ModalStyle = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 888;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.8s;
  }

  section {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: white;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
    header {
      position: relative;
      padding: 16px 64px 16px 16px;
      background-color: royalblue;
      font-weight: 600;
      text-align: left;
      color: #fff;
      svg {
        position: absolute;
        right: 16px;
        font-size: 1.2em;
        color: #fff;
        cursor: pointer;
      }
    }
    div {
      padding: 16px;
      border-bottom: 2px solid #dee2e6;
      text-align: center;
      color: #333;
      white-space: pre-line;
      line-height: 1.4;
    }
    footer {
      padding: 12px 16px;
      text-align: right;
    }
  }

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

interface ModalProp {
  open: boolean;
  close: () => void;
  children: string;
}

const Modal: React.FC<ModalProp> = ({ open, close, children }) => {
  return (
    <ModalStyle>
      <div className={open ? "openModal modal" : "modal"}>
        {open && (
          <section>
            <header>
              Google PlayStore
              <FontAwesomeIcon icon={faXmark} onClick={close} />
            </header>
            <div>
              <img src={children} alt="qr코드" />
              <p>Qr을 스캔하면 PlayStore로 이동합니다</p>
            </div>
          </section>
        )}
      </div>
    </ModalStyle>
  );
};
export default Modal;
