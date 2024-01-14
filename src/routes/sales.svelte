<script>
	import PaymentProcessor from '../components/PaymentProcessor.svelte';
	import { cart } from '../store/cart.js'; // Assuming a cart store for the transaction

	let totalAmount = 0;

	$cart.subscribe((items) => {
		totalAmount = items.reduce((total, item) => total + item.price, 0);
	});

	// Additional logic for handling the completion of the transaction
</script>

<main>
	<h2>Total Amount: ${totalAmount}</h2>
	<PaymentProcessor />
	<!-- Additional UI for the sales process -->
</main>
