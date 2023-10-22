<script lang="ts">
	// import { Button, buttonVariants } from "@/components/ui/button";
	// import * as Dialog from "@/components/ui/dialog";
	// import * as Input from "@/components/ui/input";
	// import * as Label from "@/components/ui/label";
	import * as Command from "$lib/bits/cmdk";

	let loading = false;
</script>

<Command.Root>
	<Command.Input />
	<Command.List>
		{#if loading}
			<Command.Loading>Hang on...</Command.Loading>
		{/if}

		<Command.Empty>No results found.</Command.Empty>

		<Command.Group heading="Fruits">
			<Command.Item>Apple</Command.Item>
			<Command.Item>Orange</Command.Item>
			<Command.Separator />
			<Command.Item>Pear</Command.Item>
			<Command.Item>Blueberry</Command.Item>
		</Command.Group>

		<Command.Item>Fish</Command.Item>
	</Command.List>
</Command.Root>

<!-- <Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: "outline" })}>Edit Profile</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Edit profile</Dialog.Title>
			<Dialog.Description>
				Make changes to your profile here. Click save when you're done.
			</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4 py-4">
			<div class="grid grid-cols-4 items-center gap-4">
				<Label.Root class="text-right">Name</Label.Root>
				<Input.Root id="name" value="Hunter Johnston" class="col-span-3" />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label.Root class="text-right">Username</Label.Root>
				<Input.Root id="username" value="@huntabyte" class="col-span-3" />
			</div>
		</div>
		<Dialog.Footer>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root> -->
