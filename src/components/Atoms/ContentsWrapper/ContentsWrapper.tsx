import MeIcon from '../../../asset/picture/meicon.png';
import React from 'react';
import TopHeader from '../../Molecules/TopImage/TopImage';
import styled from 'styled-components';

interface ContentsWrapperArgs {}

const ContentsWrapper: React.FC<ContentsWrapperArgs> = ({ children }) => {
    return (
        <Container>
            <TopHeader
                image={MeIcon}
                alt={'topEmoticon'}
                //Todo: State 값에 따라 dynamic title
                title={'프론트엔드 개발자 김상배 입니다.'}
            />
            {children}
        </Container>
    );
};

export default ContentsWrapper;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.bg};
`;
