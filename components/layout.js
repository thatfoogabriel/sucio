import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function layout({title, children}) {
  return (
    <>
      <Head>
        <title>{title ?  'Sucio - ' + title : 'Sucio'}</title>
        <meta name="descripton" content="Ecommerce Website"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

        <div className="flex min-h-screen flex-col justify-between">
          <header>
            <nav>
              <Link href="/">
                <a className='text-lg font-bold'>sucio</a>
              </Link>
            </nav>
          </header>
          <main>
            {children}
          </main>
          <footer>
            footer
          </footer>
        </div>
    </>
  );
}
