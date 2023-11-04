<script lang="ts">
	import { Toaster as ToasterPrimitive } from "$lib";
	import ToasterViewport from "./toaster-viewport.svelte";
	import Toast from "./toast.svelte";
	import ToastTitle from "./toast-title.svelte";
	import ToastClose from "./toast-close.svelte";

	type ToasterData = {
		title: string;
		description: string;
		type?: "default" | "destructive";
	};

	type $$Props = ToasterPrimitive.Props<ToasterData>;
	export let toaster: $$Props["toaster"];
</script>

<ToasterPrimitive.Root {toaster} let:toasts {...$$restProps}>
	<ToasterViewport>
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
	</ToasterViewport>
</ToasterPrimitive.Root>
