import Head from 'next/head';
import React from 'react';

export default function layout({children}) {
  return (
    <>
      <Head>
        <title>Sucio Store</title>
        <meta name="descripton" content="Ecommerce Website"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

        <div>
            <header>
            header
            </header>
            <main>
            {children}
            </main>
            <footer>
            footer
            </footer>
        </div>
    </>
  )
}
