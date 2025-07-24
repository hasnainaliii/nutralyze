import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';

function RootNavigator() {
  const token = true;
  if (token) {
    return <MainNavigation />;
  } else {
    return <AuthNavigation />;
  }
}

export default RootNavigator;
