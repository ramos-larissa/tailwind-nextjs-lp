import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Main } from '../components/Main';
import { Inter } from '@next/font/google';
import { About } from '../components/About';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Larissa | FullStack </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
    </div>
  );
}
