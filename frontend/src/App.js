import ListShowPage from "./components/ListShowPage";
import TaskList from "./components/TaskList";

import Navigation from "./components/Navigation";
import StatusBar from "./components/StatusBar";
import SplashPage from "./components/SplashPage";

function App() {
  return (
    <>
    <Navigation />
    {/* <SplashPage /> */}
    <StatusBar />
    <ListShowPage />
    </>
  );
}

export default App;
