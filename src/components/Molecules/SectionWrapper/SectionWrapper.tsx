import React from 'react';
import styled from 'styled-components';

interface ContentArgs {
    component: JSX.Element;
}

const Content = ({ component }: ContentArgs) => {
    return <Container>{component}</Container>;
};

export default Content;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${props => props.theme.contentBg};
    color: ${props => props.theme.text};
    border-radius: 10px;
    flex: 1;
    margin: 2rem 4rem;
    @media screen and (max-width: 768px) {
        justify-content: center;
        width: 90%;
        padding: 16px 0;
        margin: 0rem;
    }
`;
