import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@material-ui/core';

import NavLink from '@components/NavLink';
import { Container, ImageBox } from './styles';

const NotFound: NextPage = () => {
  return (
    <Container>
      <ImageBox>
        <Image src={'/assets/images/404.jpg'} alt="logo" width="350" height="350" />
      </ImageBox>
      <Typography
        variant="inherit"
        align="center"
        style={{ fontSize: '22px', fontWeight: 300, margin: '36px' }}
      >
        This page does not exist
        <br />
        <br />
        <Link href="/" passHref>
          <NavLink>Return to Home Page</NavLink>
        </Link>
      </Typography>
    </Container>
  );
};

export default NotFound;
