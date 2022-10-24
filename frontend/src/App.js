import ListShowPage from "./components/ListShowPage";
import Navigation from "./components/Navigation";
import StatusBar from "./components/StatusBar";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
          <Route exact path="/login">
            <LoginForm />
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
