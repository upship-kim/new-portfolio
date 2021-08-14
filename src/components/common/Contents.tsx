import React from 'react';
import styled from 'styled-components';

const Contents = () => {
    return <Container>contents</Container>;
};

const Container = styled.div`
    display: flex;
    flex: 4;
    background: ${props => props.theme.bg};
    padding: 2rem;
`;
export default Contents;
