<script>
	import { cashDrawer } from '../utils/cashDrawer.js';
	import { transaction } from '../store/transaction.js';

	let amountDue;
	let amountReceived;
	let change = 0;

	function calculateChange() {
		change = amountReceived - amountDue;
	}

	function processCashPayment() {
		cashDrawer.open();
		transaction.add({ type: 'cash', amount: amountDue, change });
		// Additional logic for completing the transaction
	}
</script>

<form on:submit|preventDefault={processCashPayment}>
	<input type="number" bind:value={amountDue} min="0" placeholder="Amount Due" />
	<input
		type="number"
		bind:value={amountReceived}
		min="0"
		placeholder="Amount Received"
		on:input={calculateChange}
	/>
	<p>Change: ${change}</p>
	<button type="submit">Complete Cash Payment</button>
</form>
