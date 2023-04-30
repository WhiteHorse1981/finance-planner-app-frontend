import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken, balance } from 'redux/auth/auth-selectors';

export default function PublicRoute() {
  const token = useSelector(selectToken);
  const balanceUser = useSelector(balance);

  return token && balanceUser !== 0 ? (
    <Navigate to="/personal-plan" />
  ) : (
    <Outlet />
  );
}
