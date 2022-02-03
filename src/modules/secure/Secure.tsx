import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Secure: FC<{}> = () => {
  return (
    <>
      <div className='secure-container'>Secure 123</div>
      <div className='dashboard-container'>
        <Outlet/>
      </div>
    </>
  )
}

export default Secure;