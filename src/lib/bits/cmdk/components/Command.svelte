<script lang="ts">
	import { isBrowser, srOnlyStyles, styleToString } from "$lib/internal";
	import { createCommand } from "../ctx";
	import type { CommandProps } from "../types";
	type $$Props = CommandProps;

	export let label: $$Props["label"] = undefined;
	export let shouldFilter: $$Props["shouldFilter"] = true;
	export let filter: $$Props["filter"] = undefined;
	export let defaultValue: $$Props["defaultValue"] = undefined;
	export let value: $$Props["value"] = undefined;
	export let onValueChange: $$Props["onValueChange"] = undefined;
	export let loop: $$Props["loop"] = undefined;

	let thisCommandEl: HTMLDivElement | undefined = undefined;

	const { commandEl, handleRootKeydown, ids, state } = createCommand({
		label,
		shouldFilter,
		filter,
		defaultValue,
		value,
		onValueChange,
		loop
	});

	function updateCommandEl(currentEl: HTMLDivElement | undefined) {
		if (!isBrowser) return;
		if (currentEl) {
			commandEl.set(currentEl);
		}
	}

	$: updateCommandEl(thisCommandEl);

	$: console.log($state);
</script>

<!--  eslint-disable-next-line svelte/valid-compile -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
	bind:this={thisCommandEl}
	on:keydown={handleRootKeydown}
	role="application"
	data-cmdk-root=""
	id={ids.root}
	{...$$restProps}
>
	<label data-cmdk-label="" for={ids.input} id={ids.label} style={styleToString(srOnlyStyles)}>
		{label ?? ""}
	</label>
	<slot />
</div>
