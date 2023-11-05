import type { CreateToasterProps } from "@melt-ui/svelte";
import type { InitToaster } from "../../ctx";
import type { HTMLDivAttributes } from "$lib/internal";

type Props<T> = CreateToasterProps & {
	/**
	 * The toaster store returned from the `initToaster`
	 * function.
	 */
	toaster: InitToaster<T>;

	/**
	 * Whether to delegate rendering of the component to
	 * a custom element.
	 *
	 * If `true`, you will need to accept the `action` & `attrs`,
	 * slot props, and apply them to the custom element.
	 *
	 * @example
	 * ```svelte
	 * <Toaster.Root asChild let:action let:attrs>
	 * 	<div use:action {...attrs}>
	 *   	<!-- ... -->
	 * 	</div>
	 * </Toaster.Root>
	 * ```
	 */
	asChild?: boolean;
} & HTMLDivAttributes;

export type {
	Props,
	//
	Props as ToasterProps
};
