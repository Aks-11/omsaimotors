import { Outlet } from 'react-router-dom';
import Header from './header';

const MainContent = () => {
  return (
    <>
      <div>
        <Header />
        <div className='outlet-body'>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default MainContent;
