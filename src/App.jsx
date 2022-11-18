import { createTheme, ThemeProvider } from '@mui/material';
import './App.scss';
import MyView from './views/my-view';

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
    <ThemeProvider theme={appTheme}>
      <div className="App">
        <MyView />
      </div>
    </ThemeProvider>
  );
}

export default App;
