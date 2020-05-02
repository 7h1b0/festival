import { setAsLastUsed, getLastUsed, removeLastUsed } from './preferences';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
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
    it('should set a given festival slug in localStorage', () => {
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
      expect(localStorageMock.getItem).toHaveBeenCalledWith('lastUsedFestival');
    });
  });

  describe('removeLastUsed', () => {
    it('should remove last festival data in localStorage', () => {
      removeLastUsed();
      expect(localStorageMock.removeItem).toHaveBeenCalledWith(
        'lastUsedFestival',
      );
    });
  });
});
