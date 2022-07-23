//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './views/Dashboard';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/:id" element={<DetailsPage/>}/>
        <Route path="/:id/edit" element={<UpdatePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
