import cinepic1 from "../images/cinepic_01.jpg";
import cinepic2 from "../images/cinepic_02.jpg";
import cinepic3 from "../images/cinepic_03.jpg";
import cinepic4 from "../images/cinepic_04.jpg";
import cinepic5 from "../images/cinepic_05.jpg";
import cinepic6 from "../images/cinepic_06.jpg";
import cinepic7 from "../images/cinepic_07.jpg";
import cinepic8 from "../images/cinepic_08.jpg";
import cinepic9 from "../images/cinepic_09.jpg";
import cinepic10 from "../images/cinepic_10.jpg";

import movieverse1 from "../images/movieverse_01.jpg";
import movieverse2 from "../images/movieverse_02.jpg";
import movieverse3 from "../images/movieverse_03.jpg";
import movieverse4 from "../images/movieverse_04.jpg";
import movieverse5 from "../images/movieverse_05.jpg";
import movieverseQr from "../images/movieVerse_qr.jpg";

import repairrun1 from "../images/repairrun_01.jpg";
import repairrun2 from "../images/repairrun_02.jpg";
import repairrun3 from "../images/repairrun_03.jpg";
import repairrun4 from "../images/repairrun_04.jpg";
import repairrun5 from "../images/repairrun_05.jpg";

import blizzard1 from "../images/blizzard_01.jpg";
import blizzard2 from "../images/blizzard_02.jpg";
import blizzard3 from "../images/blizzard_03.jpg";

type GitHubLink = {
  [key: string]: string;
};

interface Project {
  name: string;
  duration: string;
  images: string[];
  text: string;
  function: string;
  url: string;
  skills: string[];
  github: GitHubLink[];
  notion: string;
  qr?: string; // 무비버스에서만 사용되므로 optional
}

const projectList: Project[] = [
  {
    name: "Cinepic",
    duration: "2024.01.15 ~ 2024.02.21 (6人)",
    images: [
      `${cinepic1}`,
      `${cinepic2}`,
      `${cinepic3}`,
      `${cinepic4}`,
      `${cinepic5}`,
      `${cinepic6}`,
      `${cinepic7}`,
      `${cinepic8}`,
      `${cinepic9}`,
      `${cinepic10}`,
    ],
    text:
      "<p>Cinepic은 사용자가 등록한 취향정보와 북마크 내역을 바탕으로" +
      "<b>사용자 맞춤 영화를 추천</b>해주는 사이트입니다." +
      " 영화 추천외에도 <b>다양한 영화 및 독립영화상영극장 정보를 제공</b>하고 <b>영화 커뮤니티 공간을 제공</b>하는 서비스가 있습니다.</p>" +
      "<p>약 한달이라는 제한된 시간 내에 기존 기술 스택에 <b>머신러닝 및 엘라스틱 서치를 적용</b>해야 한다는" +
      " 도전이 주어졌습니다. 이에 따라, 이전 프로젝트에서 다뤘던 영화 주제를 다시 선택하게되었습니다. 단순히 머신러닝과 엘라스틱 서치를 추가하는 것을 넘어서," +
      " <b>추가 기능을 구현하고 UI를 개선하여 사용자 경험을 더욱 향상</b>시켰습니다.</p>" +
      "<p>기존 프로젝트와의 원활한 비교를 위해 <b>AWS</b>를 통해 꼭 배포하고자 했습니다. AWS 프리티어의 제한 사항을 고려하여 <b>Flask, Spring Boot, Elasticsearch, React</b>를 효과적으로 운영하기 위해" +
      " 전체 영화 데이터를 약 700건으로 제한하고, <b>Elasticsearch의 메모리 설정을 조정</b>하여 서버 안정성을 확보했습니다.</p>",
    function:
      "사용자 맞춤 영화 추천/ 독립영화상영극장 정보 제공/ 700여가지의 다양한 영화 정보 제공/ 영화를 좋아하는 사람들의 소통 공간을 제공해주는 서비스 ",
    url: "https://cinepic2024.site",
    skills: [
      "HTML/",
      "SCSS/",
      "React/",
      "Spring Boot-JPA/",
      "MySQL/",
      "Flask/",
      "scikit-learn/",
      "Elasticsearch/",
      "AWS",
    ],
    github: [
      { "프론트+백엔드": "https://github.com/hjck4433/finalprj_total_cinepic" },
      { 플라스크: "https://github.com/hjck4433/finalprj_python_cinepic" },
    ],
    notion:
      "https://hjck4433.notion.site/Project-Cinepic-0980a88679b649f686ae7a6343d87214",
  },
  {
    name: "MovieVerse",
    duration: "2023.11.20 ~ 2023.01.03 (5人)",
    images: [
      `${movieverse1}`,
      `${movieverse2}`,
      `${movieverse3}`,
      `${movieverse4}`,
      `${movieverse5}`,
    ],
    text:
      "<p>Movieverse는 <b>현재 인기 있는 상영작 및 OTT 별 영화 정보</b> 및 영화 <b>커뮤니티 서비스</b>를 제공합니다.</p>" +
      "<p>정해진 스케쥴에 따라 <b>Spring 에서 Flask로 요청</b>을 보내 크롤링 및 KMDB(한국영화데이터베이스) API를" +
      " 활용해 인기있는 영화 및 최신영화의 정보를 수집하고 <b>반환된 결과를 DB에 저장</b> 후 <b>React의 요청에 맞춰 정보를 반환</b>하는 구조로 설계하였습니다.</p>" +
      "<p><b>보안 강화를 위해 JWT를 도입하여 사용자 정보를 암호화 및 인증/인가 처리를 진행</b>했습니다." +
      " 또한, 규칙을 정해 로그인 후 일정기간이 경과하면 재 로그인 할 수 있도록 하였습니다. <b>API KEY와 같은 중요 정보는 환경변수를 통해 관리</b>하여 보안성을 높였습니다.</p>" +
      "<p><b>AWS를 통해 배포하고 가비아와 Route53을 이용하여 도메인을 연결</b>하였습니다. ACM에서 <b>SSL 인증서를 발급 받고 로드" +
      "밸런서를 이용하여 https연결을 구성</b> 하였습니다. 또한 React Native, WebView 그리고 Expo를 활용하여 구글 플레이스토어용 앱을 빌드 하였습니다." +
      " <b>20명의 비공개 테스터 및 14일 연속 테스트 유지 조건을 만족시켜 구글 플레이스토어에 앱을 등록</b>할 수 있었습니다.</p>",
    function:
      "최신 영화 및 현재상영작 / OTT 별 인기 영화 정보를 제공하고 영화를 좋아하는 사람들의 소통 공간을 제공해주는 서비스",
    url: "https://movieverse2024.site",
    qr: `${movieverseQr}`,
    skills: [
      "HTML/",
      "SCSS/",
      "React/",
      "Spring Boot-JPA/",
      "MySQL/",
      "Flask/",
      "bs4/",
      "AWS/",
      "Expo",
    ],
    github: [
      {
        "프론트+백엔드":
          "https://github.com/hjck4433/totalprj-movieverse-total",
      },
      { 플라스크: "https://github.com/Leejaewon2/movie_verse_python" },
    ],
    notion:
      "https://hjck4433.notion.site/Project-MovieVerse-901d0fc59c3b4f938820ecaa9d055c68",
  },
  {
    name: "RepairRun",
    duration: "2023.10.20 ~ 2023.11.15 (5人)",
    images: [
      `${repairrun1}`,
      `${repairrun2}`,
      `${repairrun3}`,
      `${repairrun4}`,
      `${repairrun5}`,
    ],
    text:
      "<p>ReapirRun은 <b>수선이 필요한 사용자와 수선 업체(파트너)를 매칭</b>해주는 서비스입니다.</p>" +
      "<p>처음으로 프론트엔드와 백엔드를 통합하여 진행한 프로젝트였습니다. 맡은 부분에 대하여 <b>프론트/백" +
      "작업을 모두 수행하면서, 각 파트의 역할과 상호 연결성에 대해" +
      " 직접 경험하고 이해 할 수 있는 중요한 기회</b>가 되었습니다.</p>" +
      "<p>사용자와 파트너 로그인에 따라 메뉴 구성이 달라지도록 설정하였습니다. 구조는 동일하지만 특정 조건에 따라 미묘한 변화가 있을 경우," +
      " <b>컴포넌트를 재활용하면서 프롭스를 통해 다양한 상황에 맞게 조정</b>했습니다.</p>" +
      "<p>파트너 회원가입 시, 수선 항목 12개의 초기값 설정을 위해 <b>'addBatch()'와 'excuteBatch()' 메소드를" +
      " 사용하여 쿼리를 일괄 처리함으로써, 네트워크 오버헤드를 줄이고 데이터베이스 처리 속도를 향상</b>시켰습니다.</p>",
    function:
      "빠르게 수선물을 수거하고 처리해주는 검증된 파트너를 매칭해주는 수선 매칭 서비스",
    url: "-",
    skills: ["HTML/", "SCSS/", "React/", "Spring Boot-JDBC/", "Oracle"],
    github: [
      { 프론트엔드: "https://github.com/hjck4433/miniprj-repairrun" },
      { 백엔드: "https://github.com/hjck4433/kh-mini-repairrun-back" },
    ],
    notion:
      "https://hjck4433.notion.site/Project-RepairRun-ae275a8ce16047799facf9aea002175a?pvs=74",
  },
  {
    name: "Blizzard Main / Login (Clone Coding)",
    duration: "2023.10.21 ~ 2023.10.16 (1人)",
    images: [`${blizzard1}`, `${blizzard2}`, `${blizzard3}`],
    text:
      "<p>블리자드의 메인페이지와 로그인 페이지를 클론 코딩하였습니다.</p>" +
      "<p><b>React학습에 앞서 필요한 기초인 HTML, CSS, Javascript의 이해를 다질 수 있는 좋은 기회</b>였습니다." +
      " 또한 <b>미디어 쿼리를 활용하여 반응형 페이지를 구현</b>함으로써, 이후의 프로젝트들에서도 반응형 디자인을 사전에" +
      " 고려하여 웹사이트 구조를 설계하는 데 큰 도움이 되었습니다.</p>" +
      "<p>백엔드 서버가 필요하지 않은 프로젝트였기 때문에, <b>Netlify를 사용하여 GitHub과 연동하고 자동 배포를 구성</b>했습니다." +
      " 비록 간단한 클론 코딩 과제였지만, 결과물을 실제로 배포하고 구현한 화면을 공유하는 것은 즐거운 경험이었습니다.</p>",
    function: "블리자드 메인페이지 및 로그인 페이지 카피",
    url: "https://imaginative-dusk-c76a08.netlify.app/",
    skills: ["HTML/", "SCSS/", "Javascript"],
    github: [
      {
        클론코드: "https://github.com/hjck4433/project_copy_site",
      },
    ],
    notion:
      "https://hjck4433.notion.site/Blizzard-copysite-9476e1d78a4a4703badbd0d0ffbdc205",
  },
];
export default projectList;
