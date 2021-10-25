import { JsxChild, JsxElement } from 'typescript';
import React, { JSXElementConstructor, ReactChildren, ReactNode } from 'react';

import styled from 'styled-components';

interface SectionWrapperArgs {
    component: JSX.Element;
}

const SectionWrapper = ({ component }: SectionWrapperArgs) => {
    return <Container>{component}</Container>;
};

export default SectionWrapper;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: white;
`;
