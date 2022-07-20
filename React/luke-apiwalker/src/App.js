//import logo from './logo.svg';
import './App.css';
import HeaderForm from './components/HeaderForm';
import { Route, Routes } from 'react-router-dom';
import People from './views/People';
import Planets from './views/Planets';
import Starships from './views/Starships';
import Error from './views/Error';

function App() {
  return (
    <div>
      <h1>Luke APIWalker</h1>
      <HeaderForm/>

      <Routes>
        <Route path="/people/:id" element={<People/>}/>
        <Route path="/planets/:id" element={<Planets/>}/>
        <Route path="/starships/:id" element={<Starships/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>

    </div>
  );
}

export default App;
