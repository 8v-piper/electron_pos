<script>
	import '../app.pcss';
	import { onMount } from 'svelte';
	import { user } from '../store/user';
	import { goto } from '$app/navigation';
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
	import {
		AppShell,
		AppRail,
		AppRailTile,
		AppRailAnchor,
		Drawer,
		getDrawerStore
	} from '@skeletonlabs/skeleton';
	import renderHtml from '../components/SearchComponent.svelte';
	import searchResults from '../components/SearchComponent.svelte';
	import { page } from '$app/stores';

	const drawerStore = getDrawerStore();
	let isLoggedIn;

	// Example function to open the drawer
	function openDrawer() {
		drawerStore.open();
	}
	$: positionClasses = $drawerStore.open ? 'translate-x-[50%]' : '';

	let currentTile = 0;

	$: if ($user) {
		console.log('Current user state:', $user);
	}

	onMount(() => {
		user.subscribe(($user) => {
			isLoggedIn = $user.isLoggedIn;

			if (!isLoggedIn) {
				goto('/login');
			}
		});
	});
</script>

{#if isLoggedIn}
	<AppShell>
		<svelte:fragment slot="sidebarLeft">
			<AppRail>
				<svelte:fragment slot="lead">
					<!-- Leading content, often used for branding or main navigation -->
					<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>(Home Icon)</AppRailAnchor>
				</svelte:fragment>

				<!-- App Rail Tiles -->
				<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="Tile 1">
					<svelte:fragment slot="lead">(Icon)</svelte:fragment>
					<span>Tile 1</span>
				</AppRailTile>
				<!-- Additional tiles here -->
				<AppRailTile on:click={user.logout} title="Logout">
					<svelte:fragment slot="lead">(Logout Icon)</svelte:fragment>
					<span>Logout</span>
				</AppRailTile>
				<svelte:fragment slot="trail">
					<!-- Trailing content, often used for secondary actions like settings or account management -->
					<AppRailAnchor href="/settings" selected={$page.url.pathname === '/settings'}
						>(Settings Icon)</AppRailAnchor
					>
				</svelte:fragment>
			</AppRail>
		</svelte:fragment>

		<svelte:fragment slot="pageHeader">
			<!-- Page Header Content -->
			Page Header
		</svelte:fragment>

		<!-- Main content will be rendered here -->
		<slot />

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
	</AppShell>
{:else}
	<slot /> <!-- Renders the current route without AppShell -->
{/if}
