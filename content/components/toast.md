---
title: Toast
description: A non-modal, non-blocking way to inform the user of an occurrence.
---

<script>
	import { ComponentPreview, TooltipDemo } from '@/components'
</script>

<ComponentPreview name="tooltip-demo" comp="Tooltip">

<TooltipDemo slot="preview" />

</ComponentPreview>

## Structure

```svelte
<script lang="ts">
	import { Tooltip } from 'bits-ui';
</script>

<ToolTip.Root>
	<Tooltip.Trigger />
	<Tooltip.Content>
		<Tooltip.Arrow />
	</Tooltip.Content>
</Tooltip.Root>
```

🚧 **UNDER CONSTRUCTION** 🚧
