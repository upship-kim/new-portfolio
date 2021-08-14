import React from 'react';
import styled from 'styled-components';
import Switch from '../../common/Atom/Switch';
import { CgDarkMode } from 'react-icons/cg';
const index = () => {
    return (
        <Container>
            <StyledSpan>
                <CgDarkMode size={30} />
                Dark/Light Mode
            </StyledSpan>
            <Switch />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`;
const StyledSpan = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 0.8rem;
    align-items: center;
`;
export default index;
