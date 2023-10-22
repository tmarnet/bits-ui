import type { HTMLDivAttributes } from "$lib/internal";
import type * as Dialog from "$lib/bits/dialog";
import type { Writable } from "svelte/store";
import type { HTMLInputAttributes } from "svelte/elements";

export type LoadingProps = HTMLDivAttributes & {
	/** Estimated progress of loading asynchronous options */
	progress?: number;
};

export type EmptyProps = HTMLDivAttributes & {};

export type SeparatorProps = HTMLDivAttributes & {
	/**
	 * Whether this separator should always be rendered. Useful if
	 * you disable automatic filtering
	 */
	alwaysRender?: boolean;
};

export type DialogProps = Dialog.Props & {};

type BaseCommandProps = {
	/**
	 * Accessible label for the command menu. Not visible.
	 */
	label?: string;

	/**
	 * Optionally set to `false` to turn off the automatic filtering and sorting.
	 * If `false`, you must conditionally render valid items based on the search query yourself.
	 */
	shouldFilter?: boolean;

	/**
	 * Custom filter function for whether each command menu item should match the given query.
	 * It should return a number between 0 and 1, with 1 being the best match and 0
	 * being hidden entirely.
	 * By default, used the `command-score` library.
	 */
	filter?: (value: string, search: string) => number;

	/**
	 * Optional default item value whe it is initially rendered.
	 */
	defaultValue?: string;

	/**
	 * Optional controlled state of the selected command menu item.
	 */
	value?: Writable<string>;

	/**
	 * Event handler called when the selected command menu item changes.
	 */
	onValueChange?: (value: string) => void;

	/**
	 * Optionally set to `true` to turn on looping of the command menu items
	 * using the arrow keys.
	 */
	loop?: boolean;
};

export type CommandProps = Expand<BaseCommandProps> & HTMLDivAttributes;

export type CommandOptionStores = {
	[K in keyof Omit<Required<BaseCommandProps>, "value" | "defaultValue">]: Writable<
		CommandProps[K]
	>;
};

export type Context = {
	value: (id: string, value: string) => void;
	item: (id: string, groupId: string | undefined) => void;
	group: (id: string) => () => void;
	filter: () => boolean;
	label: string;
	commandEl: Writable<HTMLDivElement | null>;
	ids: CommandIds;
	updateState: <K extends keyof State>(key: K, value: State[K], scrollIntoView?: boolean) => void;
};

export type ContextStore = Writable<Context>;

export type State = {
	search: string;
	value: string;
	filtered: {
		count: number;
		items: Map<string, number>;
		groups: Set<string>;
	};
};

export type StateStore = Writable<State> & {
	updateState: <K extends keyof State>(key: K, value: State[K], scrollIntoView?: boolean) => void;
};

export type Group = {
	id: string;
	forceVisible: boolean;
};

export type CommandIds = {
	root: string;
	input: string;
	label: string;
	list: string;
};

export type InputProps = {
	/** Callback function called when the search value changes */
	onValueChange?: (search: string) => void;
} & HTMLInputAttributes;

export type GroupProps = {
	/** Optional heading to render for the group */
	heading?: string;

	/** If no heading provided, you must provide a value that is unique for this group */
	value?: string;

	/** Whether or not this group is forcefully rendered regardless of filtering */
	forceVisible?: boolean;
} & HTMLDivAttributes;

export type ItemProps = {
	/** Whether this item is currently disabled. */
	disabled?: boolean;
	/** Event handler for when this item is selected, either via click or keyboard selection. */
	onSelect?: (value: string) => void;
	/**
	 * A unique value for this item.
	 * If no value is provided, it will be inferred from `children` or the rendered `textContent`. If your `textContent` changes between renders, you _must_ provide a stable, unique `value`.
	 */
	value?: string;
	/** Whether this item is forcibly rendered regardless of filtering. */
	forceVisible?: boolean;
} & HTMLDivAttributes;
