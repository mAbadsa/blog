import '@material-ui/core/styles';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    gray?: Palette['primary'];
  }
  interface PaletteOptions {
    gray?: PaletteOptions['primary'];
  }
}
