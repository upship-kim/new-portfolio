import React from 'react';
import styled from 'styled-components';
import { CgDarkMode } from 'react-icons/cg';
import SwitchContainer from '../../../containers/navigation/SwitchContainer';
const index = () => {
    return (
        <Container>
            <StyledSpan>
                <CgDarkMode size={30} />
                Dark/Light Mode
            </StyledSpan>
            <SwitchContainer />
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
