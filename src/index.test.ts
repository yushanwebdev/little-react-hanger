import { act, renderHook } from 'testing-library/react-hooks';
import { useBoolean } from './useBoolean';
import useStateful from './useStateful';

describe('useStateful', () => {
  it('should change value', () => {
    const { result } = renderHook(() => useStateful('initial'));
    expect(result.current.value).toBe('initial');

    act(() => result.current.setValue('changed'));

    expect(result.current.value).toBe('changed');
  });
});

describe('useBoolean', () => {
  it('should set true', () => {
    const { result } = renderHook(() => useBoolean(false));
    const { setTrue } = result.current;

    expect(result.current.value).toBe(false);

    act(() => setTrue());

    expect(result.current.value).toBe(true);
  });

  it('should set false', () => {
    const { result } = renderHook(() => useBoolean(true));
    const { setFalse } = result.current;

    expect(result.current.value).toBe(true);

    act(() => setFalse());

    expect(result.current.value).toBe(false);
  });

  it('should toggle', () => {
    const { result } = renderHook(() => useBoolean(true));
    const { toggle } = result.current;

    expect(result.current.value).toBe(true);

    act(() => toggle());
    expect(result.current.value).toBe(false);

    act(() => toggle());
    expect(result.current.value).toBe(true);
  });

  describe('hooks optimizations', () => {
    it('should keep actions reference equality after value change', () => {
      // given
      const { result } = renderHook(() => useBoolean(true));
      const { setFalse } = result.current;
      expect(result.current.setFalse).toBe(setFalse);

      // when
      act(() => setFalse());

      // then
      expect(setFalse).toBe(result.current.setFalse);
    });
  });
});
