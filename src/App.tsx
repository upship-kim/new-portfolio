import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { light } from './color/theme';
import ContentsTemplate from './components/Templates/ContentsTemplate';
import NavBarTemplate from './components/Templates/NavBarTemplate';

function App() {
    return (
        <ThemeProvider theme={light}>
            <Container>
                <NavBarTemplate />
                <ContentsTemplate />
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
