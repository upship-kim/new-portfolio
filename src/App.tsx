import { dark, light } from './color/theme';

import MainPage from './components/Page/MainPage/MainPage';
import React from 'react';
import { ThemeProvider } from 'styled-components';

function App() {
    return (
        <ThemeProvider theme={dark}>
            <MainPage />
        </ThemeProvider>
    );
}

export default App;
