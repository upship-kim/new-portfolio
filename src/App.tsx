import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { light } from './color/theme';
import Contents from './components/Templates/Contents';
import NavBar from './components/Templates/NavBar';

function App() {
    return (
        <ThemeProvider theme={light}>
            <Container>
                <NavBar />
                <Contents />
            </Container>
        </ThemeProvider>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

export default App;
