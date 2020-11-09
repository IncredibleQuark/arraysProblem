import { strict as assert } from 'assert';
import { inputArray, outputArray, solutionFunction1 } from "./index";

describe('Merging arrays test', () => {
	it('Given input array should return given output', () => {
		assert.deepStrictEqual(solutionFunction1(inputArray), outputArray);
	})
})
