import { describe, test, expect } from 'vitest';

describe('Everything is fine', () => {
  test('Hi handsome. How are you?', () => {
    expect('Vitest').toEqual('Vitest');
  });
});
