<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getCtx, getAttrs, getToastId } from "../../ctx.js";
	import type { DescriptionProps } from "./types.js";

	type $$Props = DescriptionProps;

	export let asChild: $$Props["asChild"] = false;

	const {
		elements: { description }
	} = getCtx();
	const id = getToastId();

	const attrs = getAttrs("description");
	$: builder = $description(id);
</script>

{#if asChild}
	<slot {builder} {attrs} />
{:else}
	<div use:melt={builder} {...attrs} {...$$restProps}>
		<slot {builder} {attrs} />
	</div>
{/if}
