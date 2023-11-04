<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getCtx, getAttrs, getToastId } from "../../ctx.js";
	import type { TitleProps } from "./types.js";

	type $$Props = TitleProps;

	export let asChild: $$Props["asChild"] = false;

	const {
		elements: { title }
	} = getCtx();
	const id = getToastId();

	const attrs = getAttrs("title");
	$: builder = $title(id);
</script>

{#if asChild}
	<slot {builder} {attrs} />
{:else}
	<div use:melt={builder} {...attrs} {...$$restProps}>
		<slot {builder} {attrs} />
	</div>
{/if}
