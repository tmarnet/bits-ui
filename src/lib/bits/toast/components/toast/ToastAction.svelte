<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getCtx, getAttrs, getToastId } from "../../ctx.js";
	import type { ActionEvents, ActionProps } from "./types.js";
	import { createDispatcher } from "$lib/internal/events.js";

	type $$Props = ActionProps;
	type $$Events = ActionEvents;

	export let asChild: $$Props["asChild"] = false;
	const dispatch = createDispatcher();

	const {
		elements: { close }
	} = getCtx();
	const id = getToastId();

	const attrs = getAttrs("action");
	$: builder = $close(id);
</script>

{#if asChild}
	<slot {builder} {attrs} />
{:else}
	<button
		use:melt={builder}
		{...attrs}
		{...$$restProps}
		on:m-click={dispatch}
		on:m-keydown={dispatch}
	>
		<slot {builder} {attrs} />
	</button>
{/if}
