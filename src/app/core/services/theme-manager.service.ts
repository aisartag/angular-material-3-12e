import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal } from '@angular/core';
import { BrowserStorageService } from './browser-storage.service';

//se utilizzo di rxjs
// import { BehaviorSubject } from 'rxjs';

const LOCAL_STORAGE_KEY = 'angular-material-3-12e';

// ATTN!!! il nome deve corrispondere al bundleName
// {
//   "bundleName": "dark-theme",
//   "inject": false,
//   "input": "src/styles/themes/dark.scss"
// }
///////////////////////////////////////
const BUNDLE_NAME_DARK_FILE = 'dark-theme.css';

export type PreferredType = 'light' | 'dark' | 'auto';

@Injectable({
  providedIn: 'root',
})
export class ThemeManager {
  private document = inject(DOCUMENT);
  private browserStorage = inject(BrowserStorageService);
  private _window = this.document.defaultView;

  /*---------- utilizzo rxjs ***************************/
  // private _isDarkSub = new BehaviorSubject(false);
  // isDark$ = this._isDarkSub.asObservable();

  currentTheme = signal<{ theme: string; isDark: boolean }>({
    theme: 'light',
    isDark: false,
  });

  isDark = computed(() => this.currentTheme().isDark);

  constructor() {
    this.setTheme(this.getPreferredTheme());
    if (this._window !== null) {
      this._window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {
          const storedTheme = this.getStoredTheme();
          if (storedTheme !== 'light' && storedTheme !== 'dark') {
            this.setTheme(this.getPreferredTheme());
          }
        });
    }
  }

  private getStoredTheme = () => {
    try {
      return JSON.parse(this.browserStorage.get(LOCAL_STORAGE_KEY) ?? '{}')
        .theme;
    } catch (e: any) {
      return undefined;
    }
  };

  private setStoredTheme = (theme: string) => {
    let meta;
    try {
      const value = JSON.parse(
        this.browserStorage.get(LOCAL_STORAGE_KEY) ?? '{}'
      );
      if (typeof value === 'object') {
        meta = value;
      } else {
        throw '';
      }
    } catch (e: any) {
      meta = {};
    }

    meta.theme = theme;
    this.browserStorage.set(LOCAL_STORAGE_KEY, JSON.stringify(meta));
  };

  getPreferredTheme = (): PreferredType => {
    const storedTheme = this.getStoredTheme();
    console.log('gerStoredTheme', storedTheme);
    if (storedTheme) {
      console.log('return getStoredTheme', storedTheme);
      return storedTheme;
    }

    return 'auto';
  };

  setTheme = (theme: string) => {
    console.log('setTheme', theme);
    if (this._window !== null) {
      if (
        theme === 'auto' &&
        this._window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        this.document.documentElement.setAttribute('data-pkm-theme', 'dark');
        this.currentTheme.update((t) => ({ ...t, theme: theme, isDark: true }));
        // utilizzo rxjs
        // this._isDarkSub.next(true);
      } else {
        this.document.documentElement.setAttribute('data-pkm-theme', theme);
        this.currentTheme.update((t) => ({
          ...t,
          theme: theme,
          isDark: theme === 'dark',
        }));

        // utilizzo rxjs
        // this._isDarkSub.next(theme === 'dark');
      }
    }

    this.setMaterialTheme();
  };

  setMaterialTheme() {
    console.log('setMaterialTheme isDark', this.currentTheme().isDark);
    if (this.currentTheme().isDark) {
      // const href = BUNDLE_NAME_DARK_FILE;
      getLinkElementForKey('dark-theme').setAttribute(
        'href',
        BUNDLE_NAME_DARK_FILE
      );
      this.document.documentElement.classList.add('dark-theme');
    } else {
      this.removeStyle('dark-theme');
      this.document.documentElement.classList.remove('dark-theme');
    }
  }

  changeTheme(theme: string) {
    console.log('changeTheme***************', theme);
    this.setStoredTheme(theme);
    this.setTheme(theme);
  }

  removeStyle(key: string) {
    const existingLinkElement = getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      this.document.head.removeChild(existingLinkElement);
    }
  }
}

function getLinkElementForKey(key: string) {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string) {
  return document.head.querySelector(
    `link[rel="stylesheet"].${getClassNameForKey(key)}`
  );
}

function getClassNameForKey(key: string) {
  return `style-manager-${key}`;
}

function createLinkElementWithKey(key: string) {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}
