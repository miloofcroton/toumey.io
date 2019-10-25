import React from 'react';
import Link from 'next/link';

export default () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>{' '}
    |{' '}
    <Link href="/about/me">
      <a>About</a>
    </Link>{' '}
    |{' '}
    <Link href="/blog">
      <a>Blog</a>
    </Link>{' '}
    |{' '}
    <Link href="/cars">
      <a>Cars</a>
    </Link>{' '}
    |{' '}
    <Link href="/clock">
      <a>Clock</a>
    </Link>{' '}
    |{' '}
    <Link href="/users">
      <a>Users</a>
    </Link>
    |{' '}
    <Link href="/auth/login">
      <a>Login</a>
    </Link>{' '}
  </nav>
);
