import { useObserver } from 'mobx-react-lite';
import authStore from '../stores/authStores';

export const useLogin = () => {
  return useObserver(() => ({
    email: authStore.email,
    password: authStore.password,
    setEmail: authStore.setEmail,
    setPassword: authStore.setPassword,
    login: authStore.login,
    isLoading: authStore.isLoading,
    error: authStore.error,
  }));
};