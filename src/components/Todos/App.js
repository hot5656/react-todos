// App.js
import {
  // BrowserRouter as Router,
  // for SPA
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import ProcessPage from "./ProcessPage";
import CompletePage from "./CompletePage";
import { ThemeProvider } from "styled-components";
// import useTodos from "./useTodos";

const theme = {
  colors: {
    primary_300: "#ff7979",
    primary_400: "#e33e3e",
    primary_500: "#af0505",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/process">
            <ProcessPage />
          </Route>
          <Route path="/complete">
            <CompletePage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
