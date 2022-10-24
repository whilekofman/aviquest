import ListShowPage from "./components/ListShowPage";
import TaskList from "./components/TaskList";

import Navigation from "./components/Navigation";
import StatusBar from "./components/StatusBar";
import { Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';



function App() {
  return (
    <>
    <Navigation />
    <StatusBar />
    <ListShowPage />
    </>
  );
}

export default App;
