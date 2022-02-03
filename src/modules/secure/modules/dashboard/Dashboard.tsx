import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Dashboard: FC<{}> = () => {
  return (
    <>
      <div>this is dashboard div</div>
      <Outlet/>
    </>
  )
}

export default Dashboard;