<script lang="ts">
	import { styleToString } from "$lib/internal/style.js";
	import type { InitToaster } from "../../ctx.js";
	import type { ToasterProps } from "./types.js";

	type $$Props = ToasterProps<T>;

	export let closeDelay: $$Props["closeDelay"] = undefined;
	export let type: $$Props["type"] = undefined;
	export let asChild: $$Props["asChild"] = false;

	type T = $$Generic<object>;

	export let toaster: InitToaster<T>;

	const {
		actions: { portal },
		states: { toasts },
		updateOption
	} = toaster;

	const styles = styleToString({
		"pointer-events": "none"
	});

	$: updateOption("closeDelay", closeDelay);
	$: updateOption("type", type);
	$: attrs = {
		role: "region",
		style: $toasts.length ? undefined : styles,
		"data-bits-toaster": ""
	};
</script>

{#if asChild}
	<slot action={portal} {attrs} toasts={$toasts} />
{:else}
	<ol use:portal {...attrs} {...$$restProps}>
		<slot action={portal} {attrs} toasts={$toasts} />
	</ol>
{/if}
