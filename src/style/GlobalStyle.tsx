import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #fff;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video{
    font-family: 'Noto Sans KR', sans-serif;
    color: #333;
  }
  a {
    text-decoration: none;
  }
  h2 {
    font-size: 2.8em;
    font-weight: 600;
  }
  main {
    /* padding-top: 80px; */
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    @media only screen and (max-width:1200px){
      padding: 0 20px;
    }
  }
  .progress-bar {
    position: fixed;
    z-index: 999;
    top: 80px;
    left: 0;
    right: 0;
    height: 6px;
    background: #CCE0FF;
    transform-origin: 0%;
    @media only screen and (max-width: 768px) {
      top: 40px;
    }
  }
  @media only screen and (max-width:768px) {
    body {
      font-size: 12px;
    }
    .container {
      width: 90vw;
      padding: 0;
    }
    main {
      /* padding-top: 40px; */
    }
  }
  @media only screen and (max-width: 480px) {
    main {
  
    }
  }
`;
export default GlobalStyle;
