import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import AppBar from "./components/appbar/index";
import { connect } from "react-redux";
import { SnackbarProvider } from "notistack";
import { get } from "lodash";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Home from "./view/Home";
import SignIn from "./view/SignIn";
import UpdateStore from "./hardCodedData/updateStore";
import User from "./view/User";
import { useHistory } from "react-router-dom";
import Footer from "./components/footer";
import style from "./style";

const useStyles = makeStyles({});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#ffffff"
    },
    optional: {
      main: "#2c2b2b"
    }
  },
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'),format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

function App({ isLoggedIn }) {
  let history = useHistory();
  const classes = useStyles();

  React.useEffect(() => {
    if (!isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn, history]);

  return (
    <div className={classes.container}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={5}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          preventDuplicate
        >
          <AppBar />
          <div className={classes.container}>
            {isLoggedIn ? (
              <Switch>
                <Route exact from="/" render={(props) => <Home {...props} />} />
                <Route exact from="/user" render={(props) => <User {...props} />} />
                <Route exact from="/addData" render={(props) => <UpdateStore {...props} />} />
              </Switch>
            ) : (
              <Switch>
                <Route exact from="/" render={(props) => <SignIn {...props} />} />
              </Switch>
            )}
          </div>
          <Footer />
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: get(state, "userData.isLoggedIn"),
});

export default connect(mapStateToProps, {})(App);
