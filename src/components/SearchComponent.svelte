<script>
	import { onMount } from 'svelte';
	import { debounce } from 'lodash-es';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const { ipcRenderer } = require('electron');

	export let searchType; // e.g., 'users', 'products', etc.
	export let renderResult; // function to render each result
	export let searchResults = [];

	let searchQuery = '';
	const drawerStore = getDrawerStore();

	async function search(query) {
		const results = await ipcRenderer.invoke(`search-${searchType}`, query);
		searchResults = results;
		openDrawerWithResults();
	}

	const debouncedSearch = debounce((searchQuery) => {
		search(searchQuery);
	}, 300);

	onMount(() => {
		debouncedSearch(searchQuery);
	});

	export function renderHtml(result) {
		return renderResult
			? renderResult(result)
			: `<span class="badge bg-primary-500">💀</span>
                <span class="flex-auto">
                    <dt>${result.name} - ${result.surname}</dt>
                    <dd>${result.cardNumber}</dd>
                </span>`;
	}

	function openDrawerWithResults() {
		const drawerSettings = {
			id: 'search-results'
			// Add any other settings or metadata as needed
		};
		drawerStore.open(drawerSettings);
	}
</script>

<input type="text" bind:value={searchQuery} on:input={() => debouncedSearch(searchQuery)} />
