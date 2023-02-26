import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import res from '../data.json';

type Data = {
	uid: string;
	css: string;
	code: number;
	svg: {
		path: string;
		width: number;
	};
	search: string[];
};

type Index = string | null;
type Mode = string | 'perfect' | 'part' | 'start' | 'end' | 'all' | null;

const someData: Data[] = res;

/**
 * My original search engine.
 * @param index What you want to search
 * @param which What you want to search about.
 * @param mode How you want to search
 */
function search(index: Index, mode: Mode) {
	if (!index) {
		return [];
	}
	/**
	 * Return Datas which is formatted.
	 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
	 * @param thisArg  An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
	 * @returns {Data[]}
	 */
	const modelData = (
		predicate: (value: Data, index: number, array: Data[]) => unknown,
		thisArg?: unknown
	): Data[] => {
		return someData.filter(predicate, thisArg).sort((a, b) => {
			return a.css.localeCompare(b.css);
		});
	};
	const perfect = modelData((data) => data.css === index);
	const part = modelData((data) => data.css.includes(index));
	const start = modelData((data) => data.css.startsWith(index));
	const end = modelData((data) => data.css.endsWith(index));
	//TODO: add more searching rule like EXCLUDE, AND, and OR.

	switch (mode) {
		case 'part':
			return part;
		case 'perfect':
			return perfect;
		case 'start':
			return start;
		case 'end':
			return end;
		case 'all':
			return modelData((data) => data);
		default:
			return start;
	}
}

export const GET = (async ({ url }) => {
	const queryParam = url.searchParams;
	return json(search(queryParam.get('q'), queryParam.get('mode')));
}) satisfies RequestHandler;
