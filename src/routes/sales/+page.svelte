<script>
	// import PaymentProcessor from '../../components/PaymentProcessor.svelte';
	// import { cart } from '../../store/cart.js'; // Assuming a cart store for the transaction
	import { user } from '../store/user.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		user.subscribe(($user) => {
			if (!$user.isLoggedIn) {
				goto('/login');
			}
		});
	});

	import { getDrawerStore } from '@skeletonlabs/skeleton';
	let totalAmount = 0;
	const drawerStore = getDrawerStore();

	function openDrawer() {
		drawerStore.open({
			width: 'w-[30rem]',
			position: 'right'
			/* Optional: any settings or metadata */
		});
	}
	// $cart.subscribe((items) => {
	// 	totalAmount = items.reduce((total, item) => total + item.price, 0);
	// });

	// Additional logic for handling the completion of the transaction
</script>

<main>
	<h2>Total Amount: ${totalAmount}</h2>
	<!-- <PaymentProcessor /> -->
	<!-- Additional UI for the sales process -->
	<button on:click={openDrawer}>Open Drawer</button>
</main>
