import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainContent from './layouts';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainContent />}></Route>
      </Routes>
    </>
  );
}

export default App;
