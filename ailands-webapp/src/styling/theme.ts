import { createTheme } from '@mui/material';
import {
  plains, forest, swamp, island, mountain,
} from './constants';

interface LandTheme {
  primary: string
}
interface LandThemes {
  plains: LandTheme;
  forest: LandTheme;
  swamp: LandTheme;
  island: LandTheme;
  mountain: LandTheme
}
declare module '@mui/material/styles' {
  interface Theme {
    lands: LandThemes
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    lands: LandThemes
  }
}
const theme = createTheme({
  lands: {
    plains, forest, swamp, island, mountain,
  },
});

export default theme;
