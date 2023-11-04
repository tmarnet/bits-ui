<script lang="ts">
	import { Toaster as ToasterPrimitive } from "$lib";
	import { cn } from "@/utils";

	type $$Props = ToasterPrimitive.ViewportProps;

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<ToasterPrimitive.Viewport
	class={cn(
		"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
		className
	)}
	{...$$restProps}
>
	<slot />
</ToasterPrimitive.Viewport>
