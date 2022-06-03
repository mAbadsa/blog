import { muiTheme } from 'storybook-addon-material-ui';
import * as nextImage from 'next/image';
import theme from '../../styles/theme';

// import '../styles/globals.css';

export const decorators = [muiTheme([theme])];

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
