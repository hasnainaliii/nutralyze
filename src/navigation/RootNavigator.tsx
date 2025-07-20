import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';

function RootNavigator() {
  const token = false;
  if (token) {
    return <MainNavigation />;
  } else {
    return <AuthNavigation />;
  }
}

export default RootNavigator;
