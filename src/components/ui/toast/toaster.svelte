<script lang="ts">
	import { Toaster as ToasterPrimitive } from "$lib";
	import Toast from "./toast.svelte";
	import ToastTitle from "./toast-title.svelte";
	import ToastClose from "./toast-close.svelte";
	import { cn } from "@/utils";

	type ToasterData = {
		title: string;
		description: string;
		type?: "default" | "destructive";
	};

	type $$Props = ToasterPrimitive.Props<ToasterData>;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let toaster: $$Props["toaster"];
</script>

<ToasterPrimitive.Root
	{toaster}
	let:toasts
	class={cn(
		"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
		className
	)}
	{...$$restProps}
>
	{#each toasts as { id, data: { title, description, type } } (id)}
		<Toast {id} variant={type ? type : "default"}>
			<div class="grid gap-1">
				{#if title}
					<ToastTitle>{title}</ToastTitle>
				{/if}
				{#if description}
					<div>{description}</div>
				{/if}
			</div>
			<ToastClose />
		</Toast>
	{/each}
</ToasterPrimitive.Root>
