import { JsxChild, JsxElement } from 'typescript';
import React, { JSXElementConstructor, ReactChildren, ReactNode } from 'react';

import styled from 'styled-components';

interface SectionWrapperArgs {
    component: JSX.Element;
    id: string;
}

const SectionWrapper = ({ id, component }: SectionWrapperArgs) => {
    return (
        <Container id={id}>
            <div>{component}</div>
        </Container>
    );
};

export default SectionWrapper;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 30vh;
    background: white;
`;
