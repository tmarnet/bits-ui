import { getContext, setContext } from "svelte";
import {
	type CreateComboboxProps,
	type Combobox as ComboboxReturn,
	createCombobox
} from "@melt-ui/svelte";
import { getOptionUpdater, removeUndefined } from "$lib/internal/index.js";

const NAME = "Combobox";

export const ctx = {};

type GetReturn = ComboboxReturn;

function get() {
	return getContext<GetReturn>(NAME);
}

function set(props: CreateComboboxProps<unknown>) {
	const combobox = createCombobox(removeUndefined(props));
	setContext(NAME, combobox);
	return {
		...combobox,
		updateOption: getOptionUpdater(combobox.options)
	};
}
