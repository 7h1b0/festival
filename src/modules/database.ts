import { Currency } from './currency';

type Database = {
  findAll: () => Promise<Currency[]>;
  add: (obj: Pick<Currency, Exclude<keyof Currency, 'id'>>) => Promise<Event>;
  remove: (id: number) => Promise<Event>;
};

const CURRENCIES_TABLE = 'currencies';

function promisifyRequest<T>(request: IDBRequest): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = (event: any) => resolve(event.target.result);
    request.onerror = reject;
  });
}

function scope(db: IDBDatabase, table: string): Database {
  return {
    findAll: () =>
      promisifyRequest(
        db
          .transaction([table])
          .objectStore(table)
          .getAll(),
      ),
    add: obj =>
      promisifyRequest(
        db
          .transaction([table], 'readwrite')
          .objectStore(table)
          .add(obj),
      ),
    remove: (id: number) =>
      promisifyRequest(
        db
          .transaction([table], 'readwrite')
          .objectStore(table)
          .delete(id),
      ),
  };
}

export default function getDb(): Promise<Database> {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('festival', 1);
    request.onerror = reject;
    request.onsuccess = (event: any): void => {
      const db = event.target.result;
      resolve(scope(db, CURRENCIES_TABLE));
    };

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      db.createObjectStore(CURRENCIES_TABLE, {
        keyPath: 'id',
        autoIncrement: true,
      });
    };
  });
}
