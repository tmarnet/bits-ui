<script lang="ts">
	import { Toast as ToastPrimitive } from "$lib/index.js";
	import { cn } from "@/utils/index.js";
	import { toastVariants, type Variant } from "./index.js";
	let className: string | undefined | null = undefined;

	type $$Props = ToastPrimitive.Props & {
		variant?: Variant;
	};

	export { className as class };
	export let variant: $$Props["variant"] = "default";
	export let id: $$Props["id"];
</script>

<ToastPrimitive.Toast {id} class={cn(toastVariants({ variant }), className)} {...$$restProps}>
	<slot />
</ToastPrimitive.Toast>
