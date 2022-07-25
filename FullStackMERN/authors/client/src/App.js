//import './App.css';
import { Route, Routes } from 'react-router-dom';
import CreatePage from './views/CreatePage';
import Dashboard from './views/Dashboard';
import EditPage from './views/EditPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/new" element={<CreatePage/>}/>
        <Route path="/edit/:id" element={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
