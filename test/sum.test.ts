import sum from '@/sum';

describe('sum', () => {
	it('should return the sum of two numbers', () => {
		expect(sum(1, 2)).toBe(3);
		expect(sum(2, 3)).toBe(5);
		expect(sum(100, 200)).toBe(300);
	});

	it('should return the same number when adding 0', () => {
		expect(sum(1, 0)).toBe(1);
		expect(sum(200, 100)).toBe(300);
	});
});
