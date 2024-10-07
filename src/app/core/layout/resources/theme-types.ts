import { PreferredType } from '../../services/theme-manager.service';

export interface ThemeIcon {
  preferredTheme: PreferredType;
  iconName: string;
}

export const THEME_ICONS: ThemeIcon[] = [
  { preferredTheme: 'light', iconName: 'light_mode' },
  { preferredTheme: 'dark', iconName: 'dark_mode' },
  { preferredTheme: 'auto', iconName: 'monitor' },
];
