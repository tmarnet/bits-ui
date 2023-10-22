<script lang="ts">
	import { generateId, isHTMLElement } from "$lib/internal";
	import { onMount } from "svelte";
	import { VALUE_ATTR, getCtx, getGroup, getState } from "../ctx";
	import type { ItemProps } from "../types";
	import { derived } from "svelte/store";

	type $$Props = ItemProps;

	export let disabled: $$Props["disabled"] = false;
	export let value: string = "";
	export let onSelect: $$Props["onSelect"] = undefined;
	export let forceVisible: $$Props["forceVisible"] = false;

	let trueValue: string;

	$: trueValue = handleItemEffect([value, itemEl]);

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

	const selected = derived(state, ($state) => $state.value === trueValue);

	let itemEl: HTMLElement;

	onMount(() => {
		const unsubItem = context.item(id, groupContext?.id);
		return unsubItem;
	});

	function handleItemEffect(deps: Array<string | undefined | HTMLElement>) {
		const newValue = (() => {
			for (const part of deps) {
				if (typeof part === "string") {
					return part.trim().toLowerCase();
				}

				if (isHTMLElement(part) && part.textContent) {
					return part.textContent.trim().toLowerCase();
				}
				return value;
			}
			return value;
		})();

		context.value(id, newValue);
		itemEl.setAttribute(VALUE_ATTR, newValue);
		value = newValue;
		return newValue;
	}

	function handleItemClick() {
		if (disabled) return;
		select();
		onSelect?.(trueValue);
	}

	function select() {
		state.updateState("value", trueValue, true);
	}
</script>

{#if $render}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-interactive-supports-focus -->
	<div
		bind:this={itemEl}
		{id}
		data-cmdk-item=""
		role="option"
		aria-disabled={disabled || undefined}
		aria-selected={$selected || undefined}
		data-disabled={disabled || undefined}
		data-selected={$selected || undefined}
		on:pointermove={disabled ? undefined : select}
		on:click={disabled ? undefined : handleItemClick}
		{...$$restProps}
	>
		<slot />
	</div>
{/if}
