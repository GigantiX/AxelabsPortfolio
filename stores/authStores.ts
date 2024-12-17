import { makeAutoObservable } from "mobx";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

class AuthStore {
  email = '';
  password = '';
  isLoading = false;
  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  setEmail(value: string) {
    this.email = value;
  }

  setPassword(value: string) {
    this.password = value;
  }

  async login() {
    this.isLoading = true;
    this.error = '';
    try {
      await signInWithEmailAndPassword(auth, this.email, this.password);
    } catch (error: any) {
      this.error = error.message;
    } finally {
      this.isLoading = false;
    }
  }
}

const authStore = new AuthStore();
export default authStore;