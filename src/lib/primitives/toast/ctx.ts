import { getOptionUpdater, removeUndefined } from "$lib/internal";
import { createToaster, type CreateToasterProps, type Toasts } from "@melt-ui/svelte";
import { getContext, setContext } from "svelte";

const NAME = "Toaster";

export const ctx = {
	get,
	set
};

function get() {
	return getContext<Toasts>(NAME);
}

function set(props: CreateToasterProps) {
	const toast = createToaster({ ...removeUndefined(props) });
	setContext(NAME, toast);
	return {
		...toast,
		updateOption: getOptionUpdater(toast.options)
	};
}
