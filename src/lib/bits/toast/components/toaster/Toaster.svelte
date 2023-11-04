<script lang="ts">
	import type { InitToaster } from "../../ctx.js";
	import type { ToasterProps } from "./types.js";

	type $$Props = ToasterProps<T>;

	export let closeDelay: $$Props["closeDelay"] = undefined;
	export let type: $$Props["type"] = undefined;

	type T = $$Generic<object>;

	export let toaster: InitToaster<T>;

	const {
		states: { toasts },
		updateOption
	} = toaster;

	$: updateOption("closeDelay", closeDelay);
	$: updateOption("type", type);
</script>

<slot toasts={$toasts} />
