<script lang="ts">
	import type { HTMLDivAttributes } from "$lib/internal";

	type $$Props = HTMLDivAttributes & {
		/** Estimated progress of async options */
		progress?: number;
	};

	export let progress: $$Props["progress"] = 0;
</script>

<div
	data-cmdk-loading=""
	role="progressbar"
	aria-valuenow={progress}
	aria-valuemin={0}
	aria-valuemax={100}
	aria-label="Loading..."
	{...$$restProps}
>
	<div aria-hidden>
		<slot />
	</div>
</div>
