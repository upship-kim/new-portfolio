import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Contents from './components/common/Contents';
import Navigation from './components/Navigation';
import { light } from './color/theme';

function App() {
    return (
        <ThemeProvider theme={light}>
            <Container>
                <Navigation />
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
