import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from './useToggle';

it('should toggle the state', () => {
  const { result } = renderHook(() => useToggle(true));

  expect(result.current[0]).toBeTruthy();
  act(() => result.current[1]());
  expect(result.current[0]).toBeFalsy();
});

it('should return false by default', () => {
  const { result } = renderHook(() => useToggle());
  expect(result.current[0]).toBeFalsy();
});
