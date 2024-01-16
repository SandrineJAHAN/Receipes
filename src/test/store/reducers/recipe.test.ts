import { describe, expect, test } from 'vitest';
import recipesReducer from '../../../store/reducers/recipes';

describe('reducer', () => {
  test('reducer is a function', () => {
    expect(recipesReducer).toBeTypeOf('function');
  });
});
