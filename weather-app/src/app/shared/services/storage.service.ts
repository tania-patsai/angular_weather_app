import {Injectable} from '@angular/core';

export class BrowserStorage {
  storage!: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  setValue<T = any>(key: string, data: T): void {
    this.storage.setItem(key, this.toJson(data));
  }

  getValue<T = any>(key: string): T | null {
    const item = this.storage.getItem(key);

    if (!item || item === 'undefined') {
      return null;
    }

    return this.fromJson(item);
  }

  private toJson<T = any>(data: T): string {
    return JSON.stringify(data);
  }

  private fromJson<T = any>(data: string): T {
    return JSON.parse(data);
  }
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private browserLocalStorage: BrowserStorage;

  constructor() {
    this.browserLocalStorage = new BrowserStorage(localStorage);
  }

  get local(): BrowserStorage {
    return this.browserLocalStorage;
  }
}
