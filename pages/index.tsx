import type { NextPage } from 'next';
import SidebarList from '../components/SidebarList';

const Home: NextPage = () => {
  return (
    <>
      <SidebarList />
      <h1>HOMEPAGE</h1>
      <p>Basic homepage</p>
    </>
  )
}

export default Home
