import React, { useState } from 'react';
import { componentsData, headerTitle, menuData } from '../../data/dataForm';

import Content from '../../components/Molecules/SectionWrapper/SectionWrapper';
import MeIcon from '../../asset/picture/meicon.png';
import MenuTag from '../../components/Molecules/MenuTag/MenuTag';
import TopHeader from '../../components/Molecules/TopImage/TopImage';
import styled from 'styled-components';

const MainPage = () => {
    const [state, setState] = useState<number>(0);
    const onChangeState = (id: number) => {
        setState(() => id);
    };
    return (
        <Container>
            <TopHeader
                image={MeIcon}
                alt={'topEmoticon'}
                title={headerTitle[state].title}
            />
            <TagRow>
                {menuData.map((item: any) => (
                    <MenuTag
                        key={item?.id}
                        item={item}
                        onClick={onChangeState}
                        activeTag={state === item?.id}
                    />
                ))}
            </TagRow>

            <Content component={componentsData[state]} />
        </Container>
    );
};

export default MainPage;

const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: ${props => props.theme.bg};
    padding: 0 4rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 1rem 0;
        height: 100%;
    }
`;
const TagRow = styled.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width: 768px) {
        justify-content: center;
        width: 80%;
        flex-wrap: wrap;
        margin-bottom: 2rem;
    }
`;
