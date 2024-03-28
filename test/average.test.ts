import average from '@/average';

describe('average', () => {
	it('should return the average of two numbers', () => {
		expect(average(1, 2)).toBe(1.5);
		expect(average(2, 3)).toBe(2.5);
		expect(average(100, 200)).toBe(150);
	});

	it('should return the same number when both numbers are the same', () => {
		expect(average(1, 1)).toBe(1);
		expect(average(200, 200)).toBe(200);
	});
});
