import React from 'react';
import styled from 'styled-components';

const index = () => {
    return (
        <Container>
            <div>아이콘 - nav</div>
            <div>아이콘 - navasdfasdf</div>
            <div>아이콘 - nasdv</div>
            <div>아이콘 - ss</div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 2.5rem;
    text-align: left;
    align-content: center;
`;
export default index;
