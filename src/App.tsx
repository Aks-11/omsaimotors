import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainContent from './layouts';
import Home from './pages/home';
import MotorcyclesListing from './pages/motorcycles';
import ExploreBike from './pages/motorcycles/exploreBike';
import ServicePage from './pages/service';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainContent />}>
          <Route index element={<Navigate replace to='home' />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='motorcycles' element={<MotorcyclesListing />}></Route>
          <Route path='motorcycles/explore/:key' element={<ExploreBike />} />
          <Route path='service' element={<ServicePage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
