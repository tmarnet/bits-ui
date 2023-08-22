<script lang="ts">
	import Overlay from "$lib/internal/overlay.svelte";
	import { melt } from "@melt-ui/svelte";
	import type { Transition } from "$lib/internal/types.js";
	import { ctx } from "../ctx.js";
	import type { ContentEvents, ContentProps } from "../types.js";

	type T = $$Generic<Transition>;
	type In = $$Generic<Transition>;
	type Out = $$Generic<Transition>;
	type $$Props = ContentProps<T, In, Out>;
	type $$Events = ContentEvents;

	export let transition: ContentProps<T, In, Out>["transition"] = undefined;
	export let transitionConfig: ContentProps<T, In, Out>["transitionConfig"] = undefined;
	export let inTransition: ContentProps<T, In, Out>["inTransition"] = undefined;
	export let inTransitionConfig: ContentProps<T>["inTransitionConfig"] = undefined;
	export let outTransition: ContentProps<T, In, Out>["outTransition"] = undefined;
	export let outTransitionConfig: ContentProps<T, In, Out>["outTransitionConfig"] = undefined;

	export let asChild = false;
	const {
		elements: { menu },
		states: { open }
	} = ctx.get();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions / applied by melt's builder-->

{#if $open}
	<div use:melt={$menu} {...$$restProps} on:m-keydown>
		<slot builder={$menu} />
	</div>
{/if}
