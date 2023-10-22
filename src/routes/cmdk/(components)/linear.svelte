<script lang="ts">
	import * as Command from "$lib/bits/cmdk";
	let loading = false;
	import "@/styles/cmdk/linear.postcss";
</script>

<div class="linear">
	<Command.Root>
		<div data-cmdk-linear-badge="">Issue - FUN-343</div>
		<Command.Input />
		<Command.List>
			{#if loading}
				<Command.Loading>Hang on...</Command.Loading>
			{/if}
			<Command.Empty>No results found.</Command.Empty>
			<Command.Group heading="Fruits">
				<Command.Separator />
				<Command.Item>Apple</Command.Item>
				<Command.Item>Orange</Command.Item>
				<Command.Separator />
				<Command.Item>Pear</Command.Item>
				<Command.Item>Blueberry</Command.Item>
			</Command.Group>
			<Command.Item>Fish</Command.Item>
		</Command.List>
	</Command.Root>
</div>
