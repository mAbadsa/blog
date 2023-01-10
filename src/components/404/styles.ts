import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ImageBox = styled('div')`
  box-sizing: border-box;
  width: 350px;
  img {
    max-width: 85%;
    width: 300px;
    border: 25px solid #36377c !important;
    border-radius: 36px !important;
  }
`;
