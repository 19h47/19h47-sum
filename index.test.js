import sum from './index.js';

const tests = [];

for (let i = 0; i < 100; i++) {
	const total = Math.floor(Math.random() * 100);
	const number = Math.floor(Math.random() * 100);

	tests.push([total, number, total + number]);
}

test.each(tests)('%i plus %i equals %i', (total, number, expected) => {
	expect(sum(total, number)).toBe(expected);
});
