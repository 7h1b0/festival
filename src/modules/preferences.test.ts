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
      setAsLastUsed(2);
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'lastUsedFestival',
        '2',
      );
    });
  });

  describe('getLastUsed', () => {
    it('should fetch the value in localStorage', () => {
      localStorageMock.getItem.mockReturnValueOnce('0');

      expect(getLastUsed()).toBe(0);
      expect(localStorageMock.getItem).toBeCalledWith('lastUsedFestival');
    });

    it('should return -1 if nothing is found in localstorage', () => {
      localStorageMock.getItem.mockReturnValueOnce('');

      expect(getLastUsed()).toBe(-1);
      expect(localStorageMock.getItem).toBeCalledWith('lastUsedFestival');
    });
  });
});
