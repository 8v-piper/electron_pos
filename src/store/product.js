import { writable } from 'svelte/store';

const products = writable([]);

// Example function to fetch products from the backend or a configuration file
async function fetchProducts() {
  // Fetch products and update the store
  // products.set(fetchedProducts);
}

// Fetch products on store initialization
fetchProducts();

export { products };
