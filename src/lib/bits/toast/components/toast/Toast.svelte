<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getCtx, getAttrs, setToastId } from "../../ctx.js";
	import type { ToastProps } from "./types";
	import { createDispatcher } from "$lib/internal/events.js";

	type $$Props = ToastProps;
	export let id: $$Props["id"];
	export let asChild: $$Props["asChild"] = false;

	const dispatch = createDispatcher();

	setToastId(id);
	const {
		elements: { content }
	} = getCtx();

	$: builder = $content(id);
	const attrs = getAttrs("root");
</script>

{#if asChild}
	<slot {builder} {attrs} />
{:else}
	<div
		use:melt={builder}
		{...attrs}
		{...$$restProps}
		on:m-focusout={dispatch}
		on:m-pointerenter={dispatch}
		on:m-pointerleave={dispatch}
	>
		<slot {builder} {attrs} />
	</div>
{/if}
