import React from 'react';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

interface LayoutProps {
  children: any;
  path?: any;
  pageTitle?: any;
  image?: any;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  path,
  children,
  pageTitle,
  image
}: LayoutProps) => {
  return (
    <Container>
      <Head title={pageTitle} image={image} />
      <Header path={path} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
