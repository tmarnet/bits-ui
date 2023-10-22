<script lang="ts">
	import { generateId, isUndefined } from "$lib/internal";
	import { derived } from "svelte/store";
	import { VALUE_ATTR, getCtx, getState, createGroup } from "../ctx";
	import type { GroupProps } from "../types";
	import { onMount } from "svelte";

	type $$Props = GroupProps;

	export let heading: $$Props["heading"] = undefined;
	export let value: string = "";
	export let forceVisible: $$Props["forceVisible"] = false;

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

	function groupAction(node: HTMLElement) {
		if (value) {
			context.value(id, value);
			node.setAttribute(VALUE_ATTR, value);
			return;
		}

		if (heading) {
			value = heading.trim().toLowerCase();
		} else if (node.textContent) {
			value = node.textContent.trim().toLowerCase();
		}

		context.value(id, value);
		node.setAttribute(VALUE_ATTR, value);
	}
</script>

<div
	use:groupAction
	data-cmdk-group=""
	role="presentation"
	hidden={$render ? undefined : true}
	data-value={value}
	{...$$restProps}
>
	{#if heading}
		<div data-cmdk-group-heading="" aria-hidden id={headingId}>
			{heading}
		</div>
	{/if}
	<div data-cmdk-group-items="" role="group" aria-labelledby={heading ? headingId : undefined}>
		<slot />
	</div>
</div>
