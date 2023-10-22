<script lang="ts">
	import { generateId } from "$lib/internal";
	import { onMount } from "svelte";
	import { VALUE_ATTR, getCtx, getGroup, getState } from "../ctx";
	import type { ItemProps } from "../types";
	import { derived } from "svelte/store";

	type $$Props = ItemProps;

	export let disabled: $$Props["disabled"] = false;
	export let value: string = "";
	export let onSelect: $$Props["onSelect"] = undefined;
	export let forceVisible: $$Props["forceVisible"] = false;

	const id = generateId();
	const groupContext = getGroup();
	const context = getCtx();
	const state = getState();

	const trueForceVisible = forceVisible ?? groupContext?.forceVisible;

	const render = derived(state, ($state) => {
		if (trueForceVisible) return true;
		if (context.filter() === false) return true;
		if (!$state.search) return true;
		return $state.filtered.items.has(id);
	});

	const selected = derived(state, ($state) => $state.value === value);

	onMount(() => {
		const unsubItem = context.item(id, groupContext?.id);
		return unsubItem;
	});

	function itemAction(node: HTMLElement) {
		if (!value && node.textContent) {
			value = node.textContent.trim().toLowerCase();
		}
		context.value(id, value);
		node.setAttribute(VALUE_ATTR, value);
	}

	function handleItemClick() {
		if (disabled) return;
		select();
		onSelect?.(value);
	}

	function select() {
		state.updateState("value", value, true);
	}
</script>

{#if $render}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-interactive-supports-focus -->
	<div
		{id}
		role="option"
		use:itemAction
		aria-disabled={disabled || undefined}
		aria-selected={$selected || undefined}
		data-disabled={disabled || undefined}
		data-selected={$selected || undefined}
		data-cmdk-item=""
		data-value={value}
		on:pointermove={disabled ? undefined : select}
		on:click={disabled ? undefined : handleItemClick}
		{...$$restProps}
	>
		<slot />
	</div>
{/if}
