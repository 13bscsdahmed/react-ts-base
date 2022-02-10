import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Login: FC<{}> = () => {
  return (
    <>
      <div>This is the login div</div>
      <Link to='dashboard'>Link to dashboard</Link>
    </>
  )
}
export default Login;