import MainPage from './components/Page/MainPage/MainPage';
import { ThemeProvider } from 'styled-components';
import { dark } from './color/theme';

function App() {
    return (
        <ThemeProvider theme={dark}>
            <MainPage />
        </ThemeProvider>
    );
}

export default App;
