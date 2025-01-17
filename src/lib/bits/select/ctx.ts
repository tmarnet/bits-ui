import { type CreateSelectProps, type Select as SelectReturn, createSelect } from "@melt-ui/svelte";
import { getContext, setContext } from "svelte";
import {
	createBitAttrs,
	generateId,
	getOptionUpdater,
	removeUndefined
} from "$lib/internal/index.js";

const NAME = "select";
const GROUP_NAME = "select-group";
const ITEM_NAME = "select-item";

const PARTS = ["arrow", "content", "group", "item", "input", "label", "trigger", "value"] as const;

export const getAttrs = createBitAttrs(NAME, PARTS);

type GetReturn = SelectReturn;

export function getCtx() {
	return getContext<GetReturn>(NAME);
}

export function setCtx(props: CreateSelectProps) {
	const select = createSelect(removeUndefined(props));
	setContext(NAME, select);
	return {
		...select,
		updateOption: getOptionUpdater(select.options)
	};
}

export function setGroupCtx() {
	const id = generateId();
	setContext(GROUP_NAME, id);
	const {
		elements: { group }
	} = getCtx();
	return { group, id };
}

export function setItemCtx(value: unknown) {
	const select = getCtx();
	setContext(ITEM_NAME, value);
	return select;
}

export function getGroupLabel() {
	const id = getContext<string>(GROUP_NAME);
	const {
		elements: { groupLabel }
	} = getCtx();
	return { groupLabel, id };
}

export function getItemIndicator() {
	const {
		helpers: { isSelected }
	} = getCtx();
	const value = getContext<unknown>(ITEM_NAME);
	return {
		value,
		isSelected
	};
}

export function setArrow(size = 8) {
	const select = getCtx();
	select.options.arrowSize?.set(size);
	return select;
}
