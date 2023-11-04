<script lang="ts">
	import { Toast as ToastPrimitive } from "$lib/index.js";
	import { cn } from "@/utils/index.js";
	let className: string | undefined | null = undefined;

	type $$Props = ToastPrimitive.DescriptionProps;

	export { className as class };
</script>

<ToastPrimitive.Description class={cn("text-sm opacity-90", className)} {...$$restProps}>
	<slot />
</ToastPrimitive.Description>
