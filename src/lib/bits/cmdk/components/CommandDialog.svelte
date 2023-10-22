<script lang="ts">
	import { Dialog } from "$lib";
	import type { CommandProps } from "../types";
	import Command from "./Command.svelte";

	type $$Props = CommandProps & {
		overlayClasses?: string;
		contentClasses?: string;
		open: Dialog.Props["open"];
		onOpenChange: Dialog.Props["onOpenChange"];
	};

	export let open: $$Props["open"] = false;
	export let onOpenChange: $$Props["onOpenChange"] = undefined;
	export let label: $$Props["label"] = undefined;
	export let overlayClasses: $$Props["overlayClasses"] = undefined;
	export let contentClasses: $$Props["contentClasses"] = undefined;
	export let shouldFilter: $$Props["shouldFilter"] = undefined;
	export let filter: $$Props["filter"] = undefined;
	export let defaultValue: $$Props["defaultValue"] = undefined;
	export let value: $$Props["value"] = undefined;
	export let onValueChange: $$Props["onValueChange"] = undefined;
	export let loop: $$Props["loop"] = undefined;
</script>

<Dialog.Root bind:open {onOpenChange}>
	<Dialog.Portal>
		<Dialog.Overlay data-cmdk-overlay="" class={overlayClasses} />
		<Dialog.Content aria-label={label} data-cmdk-dialog="" class={contentClasses}>
			<Command
				{label}
				{shouldFilter}
				{filter}
				{defaultValue}
				{onValueChange}
				{loop}
				{value}
				{...$$restProps}
			/>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
