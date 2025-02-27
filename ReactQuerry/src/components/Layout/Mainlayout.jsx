
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const MainLayout = () => {
  return (
    <>
      <Header/>
      <main className='container mx-auto p-6'>
        <Outlet />
        </main>
      <Footer/>
    </>
  );
};

