<script lang="ts">
	import { Toast as ToastPrimitive } from "$lib/index.js";
	import { cn } from "@/utils/index.js";
	import { X } from "lucide-svelte";
	let className: string | undefined | null = undefined;

	type $$Props = ToastPrimitive.CloseProps;
	type $$Events = ToastPrimitive.CloseEvents;

	export { className as class };
</script>

<ToastPrimitive.Close
	class={cn(
		"absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
		className
	)}
	on:click
	on:keydown
	data-toast-close=""
	{...$$restProps}
>
	<X class="h-4 w-4" />
</ToastPrimitive.Close>
