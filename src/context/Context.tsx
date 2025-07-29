import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContextType, User } from '../constants/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext<AuthContextType | null>(null);

function Context({ children }: { children: React.ReactNode }) {
  const [user, SetUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const ADMIN = {
    email: 'ADMIN',
    password: 'HASNAIN',
  };

  useEffect(() => {
    async function loadAuth() {
      const storedToken = await AsyncStorage.getItem('token');
      const storedUser = await AsyncStorage.getItem('user');

      if (storedToken && storedUser) {
        setToken(storedToken);
        SetUser(JSON.parse(storedUser));
      }
      setLoading(false);
    }

    loadAuth();
  }, []);

  async function login(setingToken: string, setingUser: User) {
    setToken(setingToken);
    SetUser(setingUser);

    await AsyncStorage.setItem('token', setingToken);
    await AsyncStorage.setItem('user', JSON.stringify(setingUser));
  }

  async function logout() {
    setToken(null);
    SetUser(null);

    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
  }

  const value: AuthContextType = {
    user,
    token,
    loading,
    login,
    logout,
    ADMIN,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default Context;

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error('useAuth must be used within AuthContext.Provider');
  return context;
};
