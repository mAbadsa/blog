import type { NextPage } from 'next';
import SidebarLeft from '../components/SidebarLeft';

const Home: NextPage = () => {
  return (
    <>
      <SidebarLeft />
      <h1>HOMEPAGE</h1>
      <p>Basic homepage</p>
    </>
  )
}

export default Home
