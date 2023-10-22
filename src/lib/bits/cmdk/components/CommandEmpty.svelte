<script lang="ts">
	import type { HTMLDivAttributes } from "$lib/internal";
	import { onMount } from "svelte";
	import { getState } from "../ctx";
	import { derived } from "svelte/store";

	type $$Props = HTMLDivAttributes;

	let isFirstRender = true;

	onMount(() => {
		isFirstRender = false;
	});

	const state = getState();
	const render = derived(state, ($state) => $state.filtered.count === 0);
</script>

{#if !isFirstRender && $render}
	<div data-cmdk-empty="" role="presentation" {...$$restProps}>
		<slot />
	</div>
{/if}
