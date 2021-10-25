import React, { useState } from 'react';

import Content from '../../Molecules/SectionWrapper/SectionWrapper';
import Intro from '../../Organisms/Intro/Intro';
import MeIcon from '../../../asset/picture/meicon.png';
import MenuTag from '../../Molecules/MenuTag/MenuTag';
import TopHeader from '../../Molecules/TopImage/TopImage';
import { menuData } from '../../../data/dataForm';
import styled from 'styled-components';

//Todo: State 값에 따라 dynami
const RootTemplate = () => {
    const [state, setState] = useState<number>(0);

    return (
        <Container>
            <TopHeader
                image={MeIcon}
                alt={'topEmoticon'}
                title={'프론트엔드 개발자 김상배 입니다.'}
            />
            <TagRow>
                {menuData.map((item: any) => (
                    <MenuTag
                        tagText={item?.tagText}
                        activeTag={state === item?.id ? true : false}
                    />
                ))}
            </TagRow>
            <Content component={<Intro />} />
        </Container>
    );
};

export default RootTemplate;

const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: ${props => props.theme.bg};
`;
const TagRow = styled.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
`;
