import Career from '../components/Organisms/Career/Career';
import Intro from '../components/Organisms/Intro/Intro';
import Projects from '../components/Organisms/Projects/Projects';
import Skills from '../components/Organisms/Skills/Skills';

const headerTitle = [
    { title: '프론트엔드 개발자 김상배 입니다.' },
    { title: '스킬에 대한 페이지' },
    { title: '프로젝트 이만큼~' },
    { title: '커리어는 이래요 ' },
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

export { menuData, headerTitle, componentsData };
