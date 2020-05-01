import { setAsLastUsed, getLastUsed } from './preferences';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

describe('preferences', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });

  afterEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
  });

  describe('setAsLastUsed', () => {
    it('should set a given festival Id in localStorage', () => {
      setAsLastUsed('test');
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'lastUsedFestival',
        'test',
      );
    });
  });

  describe('getLastUsed', () => {
    it('should fetch the value in localStorage', () => {
      localStorageMock.getItem.mockReturnValueOnce('test-js');

      expect(getLastUsed()).toBe('test-js');
      expect(localStorageMock.getItem).toBeCalledWith('lastUsedFestival');
    });
  });
});
