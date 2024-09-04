import {TestBed} from '@angular/core/testing';
import {MatIconTestingModule} from '@angular/material/icon/testing';
import {BrowserStorage, StorageService} from './storage.service';

describe('StorageService', () => {
  let service: StorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('BrowserStorage', () => {
  let storage: BrowserStorage;
  const storageValue = {value: 'test value'};
  const stringifyStorageValue = JSON.stringify(storageValue);
  const storageKey = 'test';
  let store: any = {};
  const mockStorage = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatIconTestingModule],
    });
    storage = new BrowserStorage(localStorage);

    spyOn(localStorage, 'getItem').and.callFake(mockStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockStorage.removeItem);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(storage).toBeTruthy();
  });

  it('setValue should set value to storage', () => {
    storage.setValue(storageKey, storageValue);
    expect(localStorage.getItem(storageKey)).toEqual(stringifyStorageValue);
  });

  describe('getValue should get', () => {
    it('value from storage', () => {
      localStorage.setItem(storageKey, stringifyStorageValue);
      expect(localStorage.getItem(storageKey)).toEqual(stringifyStorageValue);
      expect(storage.getValue(storageKey)).toEqual(storageValue);
    });

    it('NULL from storage if there is no value', () => {
      expect(localStorage.getItem('test two')).toBeNull();
      expect(storage.getValue('test two')).toBeNull();
    });

    it('should return NULL if undefined is provided', () => {
      expect(localStorage.getItem('undefined')).toBeNull();
      expect(storage.getValue('undefined')).toBeNull();
    });
  });
});

