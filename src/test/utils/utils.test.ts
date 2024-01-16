import { describe, expect, it, test } from 'vitest';

import { sum, sub } from '../../utils/utils';

describe('sub', () => {
  it('function sub existe', () => {
    expect(sub).toBeDefined();
  });
  it('function sub existe', () => {
    expect(sub(2, 2)).toBe(0);
  });
});

describe('stucture sum', () => {
  it('function sum existe', () => {
    expect(sum).toBeDefined();
  });

  test('sum is a function', () => {
    expect(sum).toBeTypeOf('function');
  });
});

describe('sum execution', () => {
  test('function sum with arguments 1 and 2 should return 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('function sum with negative arguments should return negative value', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
