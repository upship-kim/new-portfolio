import { dark, light } from './color/theme';

import React from 'react';
import RootTemplate from './components/Atoms/RootTemplate/RootTemplate';
import { ThemeProvider } from 'styled-components';

function App() {
    return (
        <ThemeProvider theme={dark}>
            <RootTemplate />
        </ThemeProvider>
    );
}

export default App;
