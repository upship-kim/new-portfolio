import React from 'react';
import styled from 'styled-components';
import LinkListBlock from '../../Organisms/LinkListBlock';
import ProfileBlock from '../../Organisms/ProfileBlock';
import SwitchBlock from '../../Organisms/SwitchBlock';

const index = () => {
    return (
        <Container>
            <Wrapper>
                <ProfileBlock />
                <Line />
                <LinkListBlock />
                <Line />
                <SwitchBlock />
            </Wrapper>
        </Container>
    );
};
const Container = styled.div`
    display: flex;
    flex: 1;
    background: gray;
    color: ${props => props.theme.navText};
`;
const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 2rem;
    justify-content: space-between;
`;
const Line = styled.hr`
    color: #dddddd;
    width: 100%;
    padding: 0;
`;
export default index;
