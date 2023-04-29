import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/auth/operation';
import { useAuth } from '../../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </button>
    </div>
  );
};
