<script lang="ts">
	import { styleToString } from "$lib/internal/style.js";
	import { getCtx } from "../../ctx.js";
	import type { ViewportProps } from "./types.js";

	type $$Props = ViewportProps;

	export let asChild: $$Props["asChild"] = false;

	const {
		actions: { portal },
		states: { toasts }
	} = getCtx();

	const styles = styleToString({
		"pointer-events": "none"
	});

	$: attrs = {
		role: "region",
		style: $toasts.length ? undefined : styles,
		"data-bits-toaster-viewport": ""
	};
</script>

{#if asChild}
	<slot action={portal} {attrs} />
{:else}
	<div use:portal {...attrs} {...$$restProps}>
		<slot action={portal} {attrs} />
	</div>
{/if}
