import { writable } from 'svelte/store';

const initialCustomerState = {
  customers: [],
  currentCustomer: null
};

export const customer = writable(initialCustomerState);
