<script lang="ts">
	import type { HTMLDivAttributes } from "$lib/internal";
	import { derived } from "svelte/store";
	import { getState } from "../ctx";

	type $$Props = HTMLDivAttributes & {
		/** Whether to always show the separator */
		alwaysRender?: boolean;
	};

	export let alwaysRender: $$Props["alwaysRender"] = false;
	const state = getState();
	const render = derived(state, ($state) => !$state.search);
</script>

{#if $render || alwaysRender}
	<div data-cmdk-separator="" role="separator" {...$$restProps} />
{/if}
