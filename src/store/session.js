import { writable } from 'svelte/store';


function createSessionStore() {
    const { subscribe, set, update } = writable({
        suspended: false,
        data: null
    });
    
    return {
        subscribe,
        suspendSession: (sessionData) => {
            set({ suspended: true, data: sessionData });
        },

        resumeSession: () => {
            update(session => ({ ...session, suspended: false }));
        },

        clearSession: () => {
            set({ suspended: false, data: null });
        }
    };
}
    
export const session = createSessionStore();