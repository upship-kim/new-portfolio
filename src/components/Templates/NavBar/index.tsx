import React from 'react';
import styled from 'styled-components';
import LinkList from '../../Organisms/LinkList';
import Profile from '../../Organisms/Profile';
import Switch from '../../Organisms/Switch';

const index = () => {
    return (
        <Container>
            <Wrapper>
                <Profile />
                <Line />
                <LinkList />
                <Line />
                <Switch />
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
