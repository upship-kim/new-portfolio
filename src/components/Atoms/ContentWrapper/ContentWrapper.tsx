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
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        padding: 1rem;
        align-items: center;
    }
`;
