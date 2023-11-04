import type { CustomEventHandler } from "$lib";
import type { Expand, HTMLDivAttributes } from "$lib/internal";
import type { HTMLButtonAttributes } from "svelte/elements";

type Props = {
	/**
	 * The id of the toast, received from the `toasts` provided
	 * by the `Toaster` component.
	 *
	 * @example
	 * ```svelte
	 * <Toaster.Root {toaster} let:toasts>
	 * 	{#each $toasts as { id, data }}
	 * 		<Toast.Root {id}>
	 * 			<!-- ... -->
	 * 		</Toast.Root>
	 * 	{/each}
	 * </Toaster.Root>
	 */
	id: string;

	/**
	 * Whether to delegate rendering of the component
	 * to a custom element.
	 *
	 * If `true`, you will need to accept the `builder` slot
	 * prop and apply the action and spread the attrs to the
	 * custom element.
	 *
	 * @example
	 * ```svelte
	 * <Toast.Root {id} asChild let:builder>
	 * 	<div use:builder.action {...builder}>
	 *   	<!-- ... -->
	 * 	</div>
	 * </Toast.Root>
	 * ```
	 */
	asChild?: boolean;
} & HTMLDivAttributes;

type TitleProps = {
	/**
	 * Whether to delegate rendering of the component
	 * to a custom element.
	 *
	 * If `true`, you will need to accept the `builder` slot
	 * prop and apply the action and spread the attrs to the
	 * custom element.
	 *
	 * @example
	 * ```svelte
	 * <Toast.Title asChild let:builder>
	 * 	<div use:builder.action {...builder}>
	 *   	<!-- ... -->
	 * 	</div>
	 * </Toast.Title>
	 * ```
	 */
	asChild?: boolean;
} & HTMLDivAttributes;

type DescriptionProps = {
	/**
	 * Whether to delegate rendering of the component
	 * to a custom element.
	 *
	 * If `true`, you will need to accept the `builder` slot
	 * prop and apply the action and spread the attrs to the
	 * custom element.
	 *
	 * @example
	 * ```svelte
	 * <Toast.Description asChild let:builder>
	 * 	<div use:builder.action {...builder}>
	 *   	<!-- ... -->
	 * 	</div>
	 * </Toast.Description>
	 * ```
	 */
	asChild?: boolean;
} & HTMLDivAttributes;

export type ActionProps = {
	/**
	 * Whether to delegate rendering of the component
	 * to a custom element.
	 *
	 * If `true`, you will need to accept the `builder` slot
	 * prop and apply the action and spread the attrs to the
	 * custom element.
	 *
	 * @example
	 * ```svelte
	 * <Toast.Action asChild let:builder>
	 * 	<button use:builder.action {...builder}>
	 *   	<!-- ... -->
	 * 	</button>
	 * </Toast.Action>
	 * ```
	 */
	asChild?: boolean;
} & HTMLButtonAttributes;

export type CloseProps = {
	/**
	 * Whether to delegate rendering of the component
	 * to a custom element.
	 *
	 * If `true`, you will need to accept the `builder` slot
	 * prop and apply the action and spread the attrs to the
	 * custom element.
	 *
	 * @example
	 * ```svelte
	 * <Toast.Close asChild let:builder>
	 * 	<button use:builder.action {...builder}>
	 *   	<!-- ... -->
	 * 	</button>
	 * </Toast.Close>
	 * ```
	 */
	asChild?: boolean;
} & HTMLButtonAttributes;

export type Events<T extends Element = HTMLDivElement> = {
	focusout: CustomEventHandler<FocusEvent, T>;
	pointerenter: CustomEventHandler<PointerEvent, T>;
	pointerleave: CustomEventHandler<PointerEvent, T>;
};

export type CloseEvents<T extends Element = HTMLButtonElement> = {
	click: CustomEventHandler<MouseEvent, T>;
	keydown: CustomEventHandler<KeyboardEvent, T>;
};

export type ActionEvents = Expand<CloseEvents>;

export type {
	Props,
	TitleProps,
	DescriptionProps,
	//
	Props as ToastProps,
	TitleProps as ToastTitleProps,
	DescriptionProps as ToastDescriptionProps
};
