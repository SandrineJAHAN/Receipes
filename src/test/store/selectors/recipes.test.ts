
import { describe, test, expect } from 'vitest';
// on importe la fonction à tester
import { findRecipe, getTitle } from '../../../store/selectors/recipes';
import data from '../../../data';

describe('test findRecipe stucture', () => {
  test('findRecipe exist', () => {
    expect(findRecipe).toBeDefined();
  });

  test('findRecipe is a function', () => {
    expect(findRecipe).toBeTypeOf('function');
  });
});

describe('test findRecipe execution', () => {
  test('function findRecipe with empty array and fake slug return undefined', () => {
    expect(findRecipe([], 'blabla')).toBeUndefined();
  });

  test('function findRecipe with recipe array and reel slug return the good recipe', () => {
    expect(findRecipe(data, 'pizza-margherita')).toBe(data[1]);
  });

  test('function findRecipe with recipe array and bad slug return undefined', () => {
    expect(findRecipe(data, 'tacos-mutchos')).toBeUndefined();
  });
});

describe('getTitle', () => {
  test('getTitle is a function', () => {
    expect(getTitle).toBeTypeOf('function');
  });

  test('getTitle return a standart title string', () => {
    expect(getTitle()).toBeTypeOf('string');
  });

  test('getTitle with state in parameters containing 2 recpies return a title with the number 2', () => {
    expect(getTitle(data)).toBe('Voici nos 2 recettes.');
  });
});
