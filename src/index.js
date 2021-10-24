import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import reportWebVitals from './reportWebVitals';
import './Index.scss';
import App from './App';
import Theme from "./helpers/theme";

function Mount() {


  return (
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <App />
          </SnackbarProvider>
        </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Mount />, document.getElementById("app-mount"));

reportWebVitals(console.log);
