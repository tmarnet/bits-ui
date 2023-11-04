<script lang="ts">
	import * as Button from "@/components/ui/button";
	import { getToast } from "../ui/toast";

	type TData = {
		title: string;
		description: string;
	};

	const { toast } = getToast<TData>();

	function makeToast() {
		toast({
			title: "Hello world",
			description: "This is a toast message"
		});
	}
</script>

<Button.Root on:click={makeToast}>Get started</Button.Root>
