import { writable } from 'svelte/store';

const createUserStore = () => {
  const { subscribe, set, update } = writable({ isLoggedIn: false, userData: null });

  return {
    subscribe,
    login: async (username, pin) => {
      // Implement login logic (possibly calling an API)
      // On successful login:
      set({ isLoggedIn: true, userData: { /* user data */ } });
      // On failure:
      // throw new Error('Login failed');
      update(user => ({ ...user, username, authenticated: true }));
    },
    logout: () => {
      set({ isLoggedIn: false, userData: null });
    }
  };
}

export const user = createUserStore();
