import {
  Theme,
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';
import {
  Palette,
  PaletteOptions,
  PaletteColor,
  PaletteColorOptions,
} from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    success?: PaletteColorOptions;
    warning?: PaletteColorOptions;
  }
  interface Palette {
    success?: PaletteColor;
    warning?: PaletteColor;
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    palette?: {
      success?: PaletteColor;
      warning?: PaletteColor;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    palette?: {
      success?: PaletteColor;
      warning?: PaletteColor;
    };
  }
}
