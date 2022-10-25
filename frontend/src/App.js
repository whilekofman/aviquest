import ListShowPage from "./components/ListShowPage";
import TaskList from "./components/TaskList";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import StatusBar from "./components/StatusBar";

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
