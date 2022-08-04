import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import AuthBackend from "./components/AuthBackend";
import AuthFrontend from "./components/AuthFrontend";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Main from "./containers/Main";
import PhoneData from "./containers/PhoneData";
import Registration from "./containers/Registration";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <AuthFrontend>
                <Main />
                <Footer />
              </AuthFrontend>
            }
          />
          <Route
            path="/login"
            element={
              <AuthFrontend>
                <Login />
                <Footer />
              </AuthFrontend>
            }
          />
          <Route
            path="/registration"
            element={
              <AuthFrontend>
                <Registration />
                <Footer />
              </AuthFrontend>
            }
          />
          <Route
            path="/home"
            element={
              <AuthBackend>
                <Home />
              </AuthBackend>
            }
          />
          <Route
            path="/phone-detail/:phone_slug"
            element={
              <AuthBackend>
                <PhoneData />
              </AuthBackend>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
