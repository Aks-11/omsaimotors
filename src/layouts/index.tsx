import { Outlet } from 'react-router-dom';
import Header from './header';

const MainContent = () => {
  return (
    <>
      <Header />
      <div className='outlet-body'>
        <Outlet />
      </div>
    </>
  );
};
export default MainContent;
