<script>
	import { paymentTerminal } from '../utils/paymentTerminal.js';
	import { transaction } from '../store/transaction.js';

	let amount;

	async function processCardPayment() {
		try {
			const result = await paymentTerminal.processPayment(amount);
			transaction.add(result);
			// Handle successful payment logic
		} catch (error) {
			// Handle payment failure
		}
	}
</script>

<form on:submit|preventDefault={processCardPayment}>
	<input type="number" bind:value={amount} min="0" placeholder="Amount" />
	<button type="submit">Pay with Card</button>
</form>
