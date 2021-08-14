import React from 'react';
import styled from 'styled-components';
import Switch from './Atom/Switch';
const Contents = () => {
    return (
        <Container>
            contents
            <Switch />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex: 4;
    background: ${props => props.theme.bg};
    padding: 2rem;
`;
export default Contents;
