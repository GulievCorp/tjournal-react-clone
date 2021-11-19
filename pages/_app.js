import '../styles/globals.css';
import 'macro-css';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      {' '}
      {/* Тоже самое что и реактовчкий провайдер */}
      {/* Базовые стили которые должны быть CSSBASELINE */}
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default MyApp;
