<script lang="ts">
	import { Toast as ToastPrimitive } from "$lib/index.js";
	import { cn } from "@/utils/index.js";
	let className: string | undefined | null = undefined;

	type $$Props = ToastPrimitive.ActionProps;
	type $$Events = ToastPrimitive.ActionEvents;

	export { className as class };
</script>

<ToastPrimitive.Action
	class={cn(
		"inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
		className
	)}
	on:click
	on:keydown
	{...$$restProps}
>
	<slot />
</ToastPrimitive.Action>
