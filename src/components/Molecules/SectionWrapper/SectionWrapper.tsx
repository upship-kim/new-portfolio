import { JsxChild, JsxElement } from 'typescript';
import React, { JSXElementConstructor, ReactChildren, ReactNode } from 'react';

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
    width: 90%;
    background: ${props => props.theme.contentBg};
    color: ${props => props.theme.text};
    border-radius: 10px;
    flex: 1;
    margin: 3rem 4rem;
    padding: 2rem 2rem;
`;
