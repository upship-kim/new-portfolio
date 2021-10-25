import { Route, Switch } from 'react-router-dom';
import { dark, light } from './color/theme';
import styled, { ThemeProvider } from 'styled-components';

import ContentsTemplate from './components/Templates/ContentsTemplate';
import Home from './pages/Home';
import React from 'react';
import RootTemplate from './components/Atoms/RootTemplate/RootTemplate';
import SectionWrapper from './components/Molecules/SectionWrapper/SectionWrapper';

function App() {
    return (
        <ThemeProvider theme={dark}>
            <RootTemplate />
        </ThemeProvider>
    );
}

export default App;
