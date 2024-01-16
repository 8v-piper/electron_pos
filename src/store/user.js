import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

// const createUserStore = () => {
//   const { subscribe, set, update } = writable({ isLoggedIn: false, userData: null });

//   return {
//     subscribe,
//     login: async (username, pin) => {
//       // Implement login logic (possibly calling an API)
//       // On successful login:
//       set({ isLoggedIn: true, userData: { /* user data */ } });
//       // On failure:
//       // throw new Error('Login failed');
//       update(user => ({ ...user, username, authenticated: true }));
//     },
//     logout: () => {
//       set({ isLoggedIn: false, userData: null });
//     }
//   };
// }

// export const user = createUserStore();


//Hardcode for testing
const createUserStore = (isBrowser) => {
  const { subscribe, set } = writable(getInitialUserState());

  function getInitialUserState() {
      // Check if we're running in the browser and retrieve the stored session
      if (isBrowser) {
          const session = localStorage.getItem('user_session');
          return session ? JSON.parse(session) : { isLoggedIn: false, userData: null };
      }
      return { isLoggedIn: false, userData: null };
  }

  return {
      subscribe,
      login: async (username, pin) => {
          // Hardcoded user credentials for testing
          const hardcodedUser = {
              username: 'test',
              pin: '1234' // Note: This is only for testing purposes
          };

          // Check if input credentials match the hardcoded user
          if (username === hardcodedUser.username && pin === hardcodedUser.pin) {
              const userSession = { isLoggedIn: true, userData: { username: hardcodedUser.username } };
              set(userSession);

              // Store session in localStorage
              if (isBrowser) {
                  localStorage.setItem('user_session', JSON.stringify(userSession));
              }
          } else {
              throw new Error('Login failed');
          }
      },
      logout: () => {
          set({ isLoggedIn: false, userData: null });

          // Clear session from localStorage
          if (isBrowser) {
              localStorage.removeItem('user_session');
              goto('/login');
          }
      }
  };
};

export const user = createUserStore(typeof window !== 'undefined');