import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Dashboard: FC<{}> = () => {
  return (
    <>
      <div>this is dashboard div</div>
      <Link to='/dashboard/todos'>Link to todos</Link>
      <Link to='/dashboard'>Link to dashboard</Link>
      <Outlet />
    </>
  );
};

export default Dashboard;
