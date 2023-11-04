import {
	createToaster,
	type CreateToasterProps,
	type Toasts as ToasterReturn
} from "@melt-ui/svelte";
import { createBitAttrs, getOptionUpdater, removeUndefined } from "$lib/internal/index.js";
import { getContext, setContext } from "svelte";

const NAME = "toaster";
const TOAST_NAME = "toast";
const PARTS = ["root", "action", "close", "description", "title", "toast"] as const;

export const getAttrs = createBitAttrs(TOAST_NAME, PARTS);

type GetReturn<T> = ToasterReturn<T>;
export type InitToaster<T> = ReturnType<typeof setCtx<T>>;

export function initToaster<T = object>(): InitToaster<T> {
	return setCtx<T>();
}

export function setCtx<T = object>(props: CreateToasterProps = {}) {
	const toaster = createToaster<T>(removeUndefined(props));
	setContext(NAME, toaster);
	return {
		...toaster,
		updateOption: getOptionUpdater(toaster.options)
	};
}

export function getToast<T = object>() {
	const {
		helpers: { addToast }
	} = getCtx<T>();

	function toast(props: T) {
		return addToast({ data: props });
	}

	return {
		toast
	};
}

export function setToastId(id: string) {
	setContext(TOAST_NAME, id);
}

export function getToastId() {
	return getContext<string>(TOAST_NAME);
}

export function getCtx<T = object>() {
	return getContext<GetReturn<T>>(NAME);
}
