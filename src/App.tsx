import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainContent from './layouts';
import Home from './pages/home';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainContent />}>
          <Route index element={<Navigate replace to='home' />}></Route>
          <Route path='home' element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
