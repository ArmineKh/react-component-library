import './App.css';
import { useRoutes } from 'react-router-dom'
import { Header } from "./component";
import { ROUTS } from './helpers/routs'

function App() {
  const routs = useRoutes(ROUTS);
  return (
    <div id="main-wrapper">
      <Header />
        {routs}
    </div>
  );
}

export default App;
