<script>
	import { customer } from '../store/customer.js';

	let firstName = '';
	let lastName = '';
	let dateOfBirth = '';
	let identityNumber = '';
	let passportNumber = '';
	let countryOfIssue = '';
	let expiryDate = '';
	let concessionType = '';

	async function handleCustomerRegistration() {
		// Logic to register a new customer
		// This might involve communicating with the customer store and the backend
		const newCustomer = {
			firstName,
			lastName,
			dateOfBirth,
			identityNumber,
			passportNumber,
			countryOfIssue,
			expiryDate,
			concessionType
		};
		try {
			await customer.add(newCustomer);
			// Clear form or provide further instructions upon successful registration
		} catch (error) {
			// Handle errors, possibly setting an error message for the user
		}
	}
</script>

<form on:submit|preventDefault={handleCustomerRegistration}>
	<input type="text" placeholder="First Name" bind:value={firstName} />
	<input type="text" placeholder="Last Name" bind:value={lastName} />
	<input type="date" placeholder="Date of Birth" bind:value={dateOfBirth} />
	<input type="text" placeholder="Identity Number" bind:value={identityNumber} />
	<input type="text" placeholder="Passport Number" bind:value={passportNumber} />
	<input type="text" placeholder="Country of Issue" bind:value={countryOfIssue} />
	<input type="date" placeholder="Expiry Date" bind:value={expiryDate} />
	<select bind:value={concessionType}>
		<option value="">Select Concession</option>
		<option value="pension_under_65">Pension Under 65</option>
		<option value="pension_over_65">Pension Over 65</option>
		<option value="disabled">Disabled</option>
		<option value="scholar">Scholar</option>
		<!-- Add other concession types as needed -->
	</select>
	<button type="submit">Register</button>
</form>
