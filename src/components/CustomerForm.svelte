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
	let telephone = '';
	let email = '';

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
			telephone,
			email,
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

<div class="card-body w-1/2 p-[1.5rem]">
	<form on:submit|preventDefault={handleCustomerRegistration}>
		<div class="input-group input-group-divider mb-[1.5rem] mt-[1.5rem] grid-cols-[10rem_1fr]">
			<div class="input-group-shim">First Name</div>
			<input type="text" placeholder="John" bind:value={firstName} />
		</div>
		<div class="input-group input-group-divider mb-[1.5rem] mt-[1.5rem] grid-cols-[10rem_1fr]">
			<div class="input-group-shim">Last Name</div>
			<input type="text" placeholder="Last Name" bind:value={lastName} />
		</div>
		<div class="input-group input-group-divider mb-[1.5rem] mt-[1.5rem] grid-cols-[10rem_1fr]">
			<div class="input-group-shim">Date of Birth</div>
			<input type="date" placeholder="Date of Birth" bind:value={dateOfBirth} />
		</div>
		<div class="input-group input-group-divider mb-[1.5rem] mt-[1.5rem] grid-cols-[10rem_1fr]">
			<div class="input-group-shim">ID Number</div>
			<input type="text" placeholder="Identity Number" bind:value={identityNumber} />
		</div>
		<div class="input-group input-group-divider mb-[1.5rem] mt-[1.5rem] grid-cols-[10rem_1fr]">
			<div class="input-group-shim">Passport Number</div>
			<input type="text" placeholder="Only if Foreign National" bind:value={passportNumber} />
		</div>
		<div class="input-group input-group-divider mb-[1.5rem] mt-[1.5rem] grid-cols-[10rem_1fr]">
			<div class="input-group-shim">Country of Issue</div>
			<input type="text" placeholder="Only if Foreign National" bind:value={countryOfIssue} />
		</div>
		<div class="input-group input-group-divider mb-[1.5rem] mt-[1.5rem] grid-cols-[10rem_1fr]">
			<div class="input-group-shim">Expiry Date</div>
			<input type="date" placeholder="Expiry Date" bind:value={expiryDate} />
		</div>
		<div class="input-group input-group-divider mb-[1.5rem] mt-[1.5rem] grid-cols-[10rem_1fr]">
			<div class="input-group-shim">Tel Number</div>
			<input
				type="tel"
				placeholder="+61 123 456 789"
				title="Input (tel)"
				multiple="true"
				bind:value={telephone}
			/>
		</div>
		<div class="input-group input-group-divider mb-[1.5rem] mt-[1.5rem] grid-cols-[10rem_1fr]">
			<div class="input-group-shim">Email Address</div>
			<input
				type="email"
				placeholder="john@example.com"
				title="Input (email)"
				autocomplete="email"
				bind:value={email}
			/>
		</div>
		<div class="input-group input-group-divider mb-[1.5rem] mt-[1.5rem] grid-cols-[10rem_1fr]">
			<div class="input-group-shim">Concession</div>
			<select class="select" bind:value={concessionType}>
				<option value="">Select Concession</option>
				<option value="pension_under_65">Pension Under 65</option>
				<option value="pension_over_65">Pension Over 65</option>
				<option value="disabled">Disabled</option>
				<option value="scholar">Scholar</option>
				<!-- Add other concession types as needed -->
			</select>
		</div>
		<button class="variant-filled btn" type="submit">Register</button>
	</form>
</div>
