<script>
	import CardPayment from './CardPayment.svelte';
	import CashPayment from './CashPayment.svelte';

	let paymentMethod = 'card'; // Default to card payment

	// You can expand this to handle different payment processing logic
</script>

<div>
	<label>
		<input type="radio" bind:group={paymentMethod} value="card" /> Card Payment
	</label>
	<label>
		<input type="radio" bind:group={paymentMethod} value="cash" /> Cash Payment
	</label>

	{#if paymentMethod === 'card'}
		<CardPayment />
	{/if}
	{#if paymentMethod === 'cash'}
		<CashPayment />
	{/if}
</div>
