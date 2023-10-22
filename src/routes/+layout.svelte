<script lang="ts">
	import { dev } from "$app/environment";
	import { TailwindIndicator } from "@/components";
	import { setInitialClassState } from "@/components/light-switch/light-switch";
	import "@/styles/app.postcss";
</script>

<svelte:head>
	<!-- This causes the new eslint-plugin-svelte: https://github.com/sveltejs/eslint-plugin-svelte/issues/492 -->
	{@html `<\u{73}cript nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<slot />

{#if dev}
	<TailwindIndicator />
{/if}
