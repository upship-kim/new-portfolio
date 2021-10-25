import React, { useState } from 'react';
import { componentsData, headerTitle, menuData } from '../../../data/dataForm';

import Content from '../../Molecules/SectionWrapper/SectionWrapper';
import MeIcon from '../../../asset/picture/meicon.png';
import MenuTag from '../../Molecules/MenuTag/MenuTag';
import TopHeader from '../../Molecules/TopImage/TopImage';
import styled from 'styled-components';

//Todo: State 값에 따라 dynami
const RootTemplate = () => {
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
                        activeTag={state === item?.id ? true : false}
                    />
                ))}
            </TagRow>

            <Content component={componentsData[state]} />
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
    padding: 0 4rem;
`;
const TagRow = styled.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
`;
