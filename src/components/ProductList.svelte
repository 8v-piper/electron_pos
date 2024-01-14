<script>
	import { onMount } from 'svelte';
	import { products } from '../store/product.js'; // Assuming you have a product store
	import { cart } from '../store/cart.js';

	// Fetch products on component mount
	let popularProducts = [];
	let productList = [];

	products.subscribe((data) => {
		productList = data;
	});

	onMount(async () => {
		// Fetch products from the backend or load from local data
		// For demonstration, let's assume we're loading from a local array
		const loadedProducts = [
			{ id: 1, name: 'Day Pass', price: 10.0 },
			{ id: 2, name: 'Single Trip Ticket', price: 2.5 }
			// ... more products
		];
		products.set(loadedProducts);
	});

	function addToCart(product) {
		cart.add(product);
		// Logic to add the product to the shopping cart
	}

	$: {
		popularProducts = $products.filter((product) => product.isPopular);
	}
</script>

<section>
	{#each popularProducts as product}
		<div class="product">
			<h2>{product.name}</h2>
			<p>{product.description}</p>
			<p>${product.price}</p>
			<!-- Add more product details as needed -->
		</div>
	{/each}
</section>

<section>
	{#each productList as product}
		<div class="product">
			<h2>{product.name}</h2>
			<p>{product.description}</p>
			<p>${product.price}</p>
			<!-- Add more product details as needed -->
			<button on:click={() => addToCart(product)}>Add to Cart</button>
		</div>
	{/each}
</section>
