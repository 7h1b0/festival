import { renderHook, act } from '@testing-library/react-hooks';
import useRoundValue from './useRoundValue';

it('should round 1.455 to 1.46', () => {
  const { result } = renderHook(() => useRoundValue(0));

  act(() => result.current[1](1.455));

  expect(result.current[0]).toBe(1.46);
});

it('should round 1.454 to 1.45', () => {
  const { result } = renderHook(() => useRoundValue(0));

  act(() => result.current[1](1.454));

  expect(result.current[0]).toBe(1.45);
});

it('should unchanged integer', () => {
  const { result } = renderHook(() => useRoundValue(0));

  act(() => result.current[1](1));

  expect(result.current[0]).toBe(1);
});
