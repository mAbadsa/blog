import { FC } from 'react';
import Link from 'next/link';

import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterDescription,
  StyledNavLink,
} from './styles';

const Footer: FC<{ display: boolean }> = ({ display = true }) => {
  return (
    <>
      {!display && (
        <StyledFooter>
          <StyledFooterContainer>
            <StyledFooterDescription>
              <Link href="/" passHref>
                <StyledNavLink>{' DEV community '}</StyledNavLink>
              </Link>
              {
                '  — A constructive and inclusive social network for software developers. With you every step of your journey. '
              }
            </StyledFooterDescription>
            <StyledFooterDescription>
              {' Built on'}{' '}
              <Link href="https://www.forem.com" passHref>
                <StyledNavLink>{' Forem '}</StyledNavLink>
              </Link>{' '}
              {' — the '}
              <Link href="/t/opensource" passHref>
                <StyledNavLink>{' open source '}</StyledNavLink>
              </Link>{' '}
              {' software that powers '}{' '}
              <Link href="https://dev.to" passHref>
                <StyledNavLink>{' DEV '}</StyledNavLink>
              </Link>{' '}
              {' and other inclusive communities. '}
            </StyledFooterDescription>
            <StyledFooterDescription>
              {' Made with love and '}
              <Link href="https://dev.to/t/node" passHref>
                <StyledNavLink>{' Nodejs. '}</StyledNavLink>
              </Link>{' '}
              {' DEV Community © 2021 - 2022. '}
            </StyledFooterDescription>
          </StyledFooterContainer>
        </StyledFooter>
      )}
    </>
  );
};

export default Footer;
