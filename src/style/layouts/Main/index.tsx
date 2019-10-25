import React from 'react';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

interface LayoutProps {
  children: any;
  path?: any;
  pageTitle?: any;
  ogImage?: any;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  path,
  children,
  pageTitle,
  ogImage
}: LayoutProps) => {
  return (
    <Container>
      <Head title={pageTitle} ogImage={ogImage} />
      <Header path={path} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
