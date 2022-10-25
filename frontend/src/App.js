import ListShowPage from "./components/ListShowPage";
import Navigation from "./components/Navigation";
import StatusBar from "./components/StatusBar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
          <Route exact path="/login">
          </Route>
          <Route exact path="/">
            <StatusBar />
            <ListShowPage />
          </Route>
      </Switch>
    </>
  );
}

export default App;
