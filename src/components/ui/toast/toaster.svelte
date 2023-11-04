<script lang="ts">
	import { Toaster as ToasterPrimitive } from "$lib";
	import ToasterViewport from "./toaster-viewport.svelte";
	import { initToaster } from "$lib";
	import Toast from "./toast.svelte";
	import ToastTitle from "./toast-title.svelte";
	import ToastClose from "./toast-close.svelte";

	type ToastData = {
		title: string;
		description: string;
		type?: "default" | "destructive";
	};

	const toaster = initToaster<ToastData>();
</script>

<ToasterPrimitive.Root {toaster} let:toasts>
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
