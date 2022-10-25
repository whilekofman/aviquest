import ListShowPage from "./components/ListShowPage";
import Navigation from "./components/Navigation";
import StatusBar from "./components/StatusBar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCurrentUser } from "./store/session";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(()=> setLoaded(true));
  }, [dispatch])

  return loaded && (
    <>
      <Navigation />
    {/* <SplashPage /> */}
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
