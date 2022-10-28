import Styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

export const StyledHeader = Styled(Grid)`
  ${({ theme }) => `
  a {
    font-size: 16px;
  }
    ${[theme.breakpoints.down('md')]} {
    }
    ${[theme.breakpoints.down('sm')]} {
      padding: ${theme.spacing(3)}px;
    }
  `}
`;

export const StyledHeaderTypography = Styled(Typography)`
  ${({ theme }) => `
    flex: 1 1 0% !important;
    font-size: 1.875rem;
  `}
`;

export const StyledTextField = Styled(TextField)`
  ${({ theme }) => `
    outline: 0;
    line-height: 1.5;
    font-size: 1rem;
    resize: vertical;
    background-color: #fff;
    .MuiOutlinedInput-input {
      padding: ${theme.spacing(2)}px;
    }
    input:not([type='hidden']) {
      outline: 0;
    }
    input:focus {
      border-color: #3b49df;
    }
    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: #7d7d7d;
    }
  `}
`;

export const StyledSelectList = Styled(Select)`
  ${({ theme }) => `
    outline: 0;
    line-height: 1.5;
    font-size: 1rem;
    resize: vertical;
    background-color: #fff;
    .MuiOutlinedInput-input {
      padding: ${theme.spacing(2)}px;
    }
    input:not([type='hidden']) {
      outline: 0;
    }
    input:focus {
      border-color: #3b49df;
    }
    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: #7d7d7d;
    }
  `}
`;
