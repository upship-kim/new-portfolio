import { Route, Switch } from 'react-router-dom';
import { dark, light } from './color/theme';
import styled, { ThemeProvider } from 'styled-components';

import ContentsTemplate from './components/Templates/ContentsTemplate';
import ContentsWrapper from './components/Atoms/ContentsWrapper/ContentsWrapper';
import Home from './pages/Home';
import NavBarTemplate from './components/Templates/NavBarTemplate';
import React from 'react';
import SectionWrapper from './components/Atoms/SectionWrapper/SectionWrapper';

function App() {
    return (
        <ThemeProvider theme={dark}>
            <ContentsWrapper>
                <SectionWrapper id="intro" component={NavBarTemplate()} />
                <SectionWrapper id="1" component={NavBarTemplate()} />
                <SectionWrapper id="2" component={NavBarTemplate()} />
                <SectionWrapper id="end" component={Home()} />
            </ContentsWrapper>
        </ThemeProvider>
    );
}

export default App;
