<script>
	import '../app.pcss';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import Drawer from '@skeletonlabs/skeleton/Drawer.svelte';
	import renderHtml from '../components/SearchComponent.svelte';
	import searchResults from '../components/SearchComponent.svelte';

	initializeStores();

	$: positionClasses = $drawerStore.open ? 'translate-x-[50%]' : '';
</script>

<Drawer>
	{#if $drawerStore.id === 'search-results'}
		<dl class="list-dl">
			{#each searchResults as result}
				<div>
					{@html renderHtml(result)}
				</div>
			{/each}
		</dl>
	{:else}
		<!-- Fallback content or other drawer contents based on different IDs -->
	{/if}
</Drawer>

<slot class="transition-transform {positionClasses}" />
