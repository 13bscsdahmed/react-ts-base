import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Profile: FC<{}> = () => {
  return(
    <>
      <div>this is profile route</div>
      <Outlet/>
    </>
  )
}

export default Profile;