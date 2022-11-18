import { createTheme, ThemeProvider } from '@mui/material';
import styles from './App.module.scss';
import MyView from './views/my-view/my-view';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './services/api';

const appTheme = createTheme({
  palette: {
    primary: {
      main: '#282c34'
    },
    secondary: {
      main: '#61dafb'
    },
  }
})

function App() {
  return (
    <ApiProvider api={apiSlice}>
      <ThemeProvider theme={appTheme}>
        <div className={styles.App}>
          <MyView />
        </div>
      </ThemeProvider>
    </ApiProvider>
  );
}

export default App;
