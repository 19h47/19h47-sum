import sum from './index.js';

const tests = [];

for (let i = 0; i < 100; i++) {
	const x = Math.floor(Math.random() * 100);
	const y = Math.floor(Math.random() * 100);

	tests.push([x, y, x + y]);
}

test.each(tests)('%i plus %i equals %i', (x, y, expected) => {
	expect(sum(x, y)).toBe(expected);
});
