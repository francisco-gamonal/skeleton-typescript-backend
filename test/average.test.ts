import { expect, test } from 'vitest';

import average from '@/average';

test('average', () => {
	expect(average(1, 2)).toBe(1.5);
});
