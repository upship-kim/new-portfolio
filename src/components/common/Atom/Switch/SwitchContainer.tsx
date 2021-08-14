import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SwitchContainer = () => {
    const [state, setState] = useState<boolean>(false);

    const onChange = () => {
        setState(() => !state);
    };

    return (
        <Container style={state ? {} : { opacity: '0.8' }}>
            <Wrapper
                onClick={onChange}
                style={state ? {} : { justifyContent: 'flex-end' }}
            >
                <Circle />
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    opacity: 0.4;
    width: 4rem;
    height: 2rem;
    padding: 0.3rem;
    border-radius: 1.2rem;
    background: ${props => props.theme.bg};
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    border-radius: 1rem;
    background: ${props => props.theme.navBg};
`;
const Circle = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.3rem;
    border-radius: 100%;
    background: ${props => props.theme.bg};
`;

export default SwitchContainer;
