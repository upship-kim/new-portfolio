import Career from '../components/Organisms/Career/Career';
import EatIn from '../asset/projects/EatIn.gif';
import Intro from '../components/Organisms/Intro/Intro';
import Projects from '../components/Organisms/Projects/Projects';
import Skills from '../components/Organisms/Skills/Skills';
import newsViewer from '../asset/projects/newsViewer.gif';
import reactBlog from '../asset/projects/reactBlog.gif';
import upshipWeb from '../asset/projects/upshipWeb.gif';
import goodBeginning from '../asset/projects/goodBeginning.png'

const headerTitle = [
    { title: '오늘보다 내일이 더 기대되는 김상배 입니다' },
    { title: '주로 사용하는 Skll Stack 입니다' },
    { title: '현재까지 진행한 주요 프로젝트 입니다' },
    { title: '개발자로서의 커리어를 위해 노력하고 있습니다.' },
];

const menuData = [
    {
        tagText: 'Intro',
        id: 0,
    },
    {
        tagText: 'Skills',
        id: 1,
    },
    {
        tagText: 'Project',
        id: 2,
    },
    {
        tagText: 'Career',
        id: 3,
    },
];

const componentsData = [<Intro />, <Skills />, <Projects />, <Career />];

const introIntroduce = [
    '안녕하세요 :)',

    '사용자 중심의 편리함과 유익한 웹 어플리케이션의 개발을 추구하는',

    'Web Front-end Developer 김상배 입니다.',

    '현재 웹과 앱을 통한 디지털 치료제를 개발하고 있는 기업에 재직중에 있으며,',

    '스스로에 대한 성장과 더불어 좋은 아키텍쳐와 코드, 좋은 동료에 대해 관심이 있습니다.',

    '(Email: tkdqook@gmail.com)',
];

const skillsDatas = {
    language: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'NodeJs'],
    library: ['React', 'React-Native'],
    etc: ['Git', 'Postman', 'Slack', 'MongoDB'],
};

const ProjectData = [
    {
        title: '굿비기닝',
        body: {
            stack: 'TypeScript / React-Native(Expo Cli) / Redux / Redux-Saga / JWT / Axios ',
            descript: '회원가입, 로그인, 카메라 촬영, 촬영본 조회 및 저장, 무한 스크롤링',
            img: goodBeginning,
            memo: `영유아 행동발달 분석 서비스로 구글 플레이스토어, 애플 앱스토어에 '굿비기닝' 출시 완료`,
        },
    },
    {
        title: 'Upship-블로그',
        body: {
            stack: 'JavaScript / React / Node.js / MongoDB / Redux / Redux-Saga / Axios',
            descript: '회원가입, 로그인, 게시물 CRUD, 페이징',
            img: reactBlog,
            url: 'https://youtu.be/ArirruxRcAw',
        },
    },
    {
        title: 'Upship-web 커뮤니티',
        body: {
            stack: 'Java / JavaScript / Oracle / JQuery / HTML5 / CSS3 / AJAX',
            descript:
                '회원가입, 로그인, 게시물 CRUD, 댓글, 좋아요, 정렬, 페이징, 검색, 업로드, 다운로드',
            img: upshipWeb,
            url: 'https://youtu.be/W5STgULeSa4',
        },
    },
    {
        title: '최신 뉴스 뷰어',
        body: {
            stack: 'JavaScript / React / Axios ',
            descript: '실시간 뉴스 출력 (외부 API 데이터 연동)',
            img: newsViewer,
            url: 'https://youtu.be/WSpaAauCpOY',
        },
    },
    {
        title: 'Eat-In 식자재 쇼핑몰',
        body: {
            stack: 'HTML5 / CSS3 / JQuery / Bootstrap3',
            descript: '카테고리, 메인 상품 캐러셀, 최근 본 상품',
            img: EatIn,
            url: 'https://youtu.be/oO_Yb2lErqQ',
        },
    },
];

const careerData = [
    {
        title: '웹 & 앱 SI 기업 재직',
        date: '재직기간: 2021.12 ~ ',
        role: `담당업무: Web Front-End Development`,
    },
    {
        title: '디지털 헬스케어 IT서비스 기업 퇴사',
        date: '재직기간: 2021.06 ~ 2022.12',
        role: `담당업무: Web Front-End Development 
                (웹 & 앱 개발 및 배포 경험 있음)`,
    },
    {
        title: `'Java & JavaScript library을 활용한 반응형 웹 개발자 양성과정' 수료`,
        date: '교육기간: 2020.06 ~ 2020.12',
        role: '교육기관: 쌍용교육센터(강남)',
    },
];

export {
    menuData,
    headerTitle,
    componentsData,
    introIntroduce,
    skillsDatas,
    ProjectData,
    careerData,
};
