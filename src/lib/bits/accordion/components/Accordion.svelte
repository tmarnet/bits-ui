<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import type { Props } from "../types.js";
	import { setCtx, getAttrs } from "../ctx.js";

	type Multiple = $$Generic<boolean>;
	type $$Props = Props<Multiple>;

	export let multiple: $$Props["multiple"] = false as Multiple;
	export let value: $$Props["value"] = undefined;
	export let onValueChange: $$Props["onValueChange"] = undefined;
	export let disabled: $$Props["disabled"] = false;
	export let asChild: $$Props["asChild"] = false;

	const {
		elements: { root },
		states: { value: localValue },
		updateOption
	} = setCtx({
		multiple,
		disabled,
		defaultValue: value,
		onValueChange: (({ next }: { next: $$Props["value"] }) => {
			if (value !== next) {
				onValueChange?.(next);
				value = next;
			}
			return next;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		}) as any
	});

	// Svelte types get weird here saying set expects something that is both string and string[].
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	$: localValue.set(value as any);

	$: updateOption("multiple", multiple);
	$: updateOption("disabled", disabled);

	$: builder = $root;
	const attrs = getAttrs("root");
</script>

{#if asChild}
	<slot {builder} {attrs} />
{:else}
	<div use:melt={builder} {...$$restProps} {...attrs}>
		<slot {builder} {attrs} />
	</div>
{/if}
