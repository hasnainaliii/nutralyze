import { useAuth } from '../context/Context';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';

function RootNavigator() {
  const { token } = useAuth();
  if (token) {
    return <MainNavigation />;
  } else {
    return <AuthNavigation />;
  }
}

export default RootNavigator;
