import { Route, Switch } from 'react-router-dom';
import { dark, light } from './color/theme';
import styled, { ThemeProvider } from 'styled-components';

import ContentsTemplate from './components/Templates/ContentsTemplate';
import ContentsWrapper from './components/Atoms/ContentsWrapper/ContentsWrapper';
import Home from './pages/Home';
import IntroTemplate from './components/Templates/IntroTemplate/IntroTemplate';
import React from 'react';
import SectionWrapper from './components/Atoms/SectionWrapper/SectionWrapper';

function App() {
    return (
        <ThemeProvider theme={dark}>
            <ContentsWrapper>
                {/* <SectionWrapper component={IntroTemplate()} /> */}
            </ContentsWrapper>
        </ThemeProvider>
    );
}

export default App;
