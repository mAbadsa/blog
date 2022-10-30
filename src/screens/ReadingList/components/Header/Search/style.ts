import Styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

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
