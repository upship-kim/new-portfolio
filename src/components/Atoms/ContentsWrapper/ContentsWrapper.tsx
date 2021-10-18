import React from 'react';
import styled from 'styled-components';

interface ContentsWrapperArgs {}

const ContentsWrapper: React.FC<ContentsWrapperArgs> = ({ children }) => {
    return <Container>{children}</Container>;
};

export default ContentsWrapper;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
