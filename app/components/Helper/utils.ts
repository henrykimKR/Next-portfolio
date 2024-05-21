// utils.ts

export const copyText = (entryText: string) => {
	navigator.clipboard.writeText(entryText);
};
