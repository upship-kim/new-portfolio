import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import Navigator from './Navigator';
import Switch from './Switch';

const Navigation = () => {
    return (
        <Container>
            <Wrapper>
                <Profile />
                <Line />
                <Navigator />
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
export default Navigation;
