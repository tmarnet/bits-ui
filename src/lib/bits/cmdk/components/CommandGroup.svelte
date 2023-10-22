<script lang="ts">
	import { generateId, isHTMLElement, isUndefined } from "$lib/internal";
	import { derived } from "svelte/store";
	import { VALUE_ATTR, getCtx, getState, createGroup } from "../ctx";
	import type { GroupProps } from "../types";
	import { onMount } from "svelte";

	type $$Props = GroupProps;

	export let heading: $$Props["heading"] = undefined;
	export let value: $$Props["value"] = undefined;
	export let forceVisible: $$Props["forceVisible"] = false;

	let groupEl: HTMLElement;
	let headingEl: HTMLElement;

	const { id } = createGroup(isUndefined(forceVisible));

	const context = getCtx();
	const state = getState();
	const headingId = generateId();

	const render = derived(state, ($state) => {
		if (forceVisible) return true;
		if (context.filter() === false) return true;
		if (!$state.search) return true;
		return $state.filtered.groups.has(id);
	});

	onMount(() => {
		const unsubGroup = context.group(id);
		return unsubGroup;
	});

	function handleGroupEffect(deps: Array<string | HTMLElement>) {
		const newValue = (() => {
			for (const part of deps) {
				if (typeof part === "string") {
					return part.trim().toLowerCase();
				}

				if (isHTMLElement(part)) {
					return part.textContent?.trim().toLowerCase();
				}
				return value;
			}
		})();

		context.value(id, newValue);
		groupEl.setAttribute(VALUE_ATTR, newValue);
		value = newValue;
	}

	$: handleGroupEffect([value, heading, headingEl]);
</script>

<div bind:this={groupEl} data-cmdk-group="" role="presentation" hidden={$render ? undefined : true} {...$$restProps}>
	{#if heading}
		<div bind:this={headingEl} cmdk-group-heading="" aria-hidden id={headingId}>
			{heading}
		</div>
	{/if}
	<div data-cmdk-group-items="" role="group" aria-labelledby={heading ? headingId : undefined}>
		<slot />
	</div>
</div>
