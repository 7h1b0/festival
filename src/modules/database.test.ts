import { store, getAllCurrencies, addCurrency } from './database';

describe('#database', () => {
  let setItemSpy: jest.SpyInstance<void, [string, string]>;
  let getItemSpy: jest.SpyInstance<string | null, [string]>;

  beforeAll(() => {
    setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
  });

  afterEach(() => {
    setItemSpy.mockReset();
    getItemSpy.mockReset();
  });

  describe('#store', () => {
    it('should store all currencies', () => {
      const currencies = [
        {
          festival: 'Fire',
          name: 'fail',
          rate: 0.1,
          id: 1,
        },
      ];

      store(currencies);

      expect(setItemSpy).toHaveBeenCalledWith(
        'currencies',
        JSON.stringify(currencies),
      );
    });
  });

  describe('#getAllCurrencies', () => {
    it('should return and parse all currencies', () => {
      const currencies = [
        {
          festival: 'Fire',
          name: 'fail',
          rate: 0.1,
          id: 1,
        },
      ];

      getItemSpy.mockReturnValue(JSON.stringify(currencies));

      expect(getAllCurrencies()).toEqual(currencies);
      expect(getItemSpy).toHaveBeenCalledWith('currencies');
    });

    it('should return a empty list by default', () => {
      expect(getAllCurrencies()).toEqual([]);
    });
  });

  describe('#addCurrency', () => {
    it('should store a new currency', () => {
      const currency = {
        festival: 'Fire',
        name: 'fail',
        rate: 0.1,
        id: 1,
      };

      addCurrency(currency);

      expect(setItemSpy).toHaveBeenCalledWith(
        'currencies',
        JSON.stringify([currency]),
      );
    });

    it('should not add a currency if festival is already taken', () => {
      const currency = {
        festival: 'Fire',
        name: 'fail',
        rate: 0.1,
        id: 1,
      };

      getItemSpy.mockReturnValue(JSON.stringify([currency]));

      addCurrency(currency);

      expect(setItemSpy).not.toHaveBeenCalled();
    });
  });
});
