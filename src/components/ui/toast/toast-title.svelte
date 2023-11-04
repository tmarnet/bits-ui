<script lang="ts">
	import { Toast as ToastPrimitive } from "$lib/index.js";
	import { cn } from "@/utils/index.js";
	let className: string | undefined | null = undefined;

	type $$Props = ToastPrimitive.TitleProps;

	export { className as class };
</script>

<ToastPrimitive.Title class={cn("text-sm font-semibold", className)} {...$$restProps}>
	<slot />
</ToastPrimitive.Title>
