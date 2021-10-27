import React from 'react';
import styled from 'styled-components';

const ContentWrapper: React.FC = ({ children }) => {
    return <Container>{children}</Container>;
};

export default ContentWrapper;

const Container = styled.div`
    display: flex;
    flex: 1;
    padding: 0rem 2rem;
    flex-direction: row;
`;
