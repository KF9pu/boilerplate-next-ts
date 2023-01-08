import Head from "next/head";

import { LayoutProps } from "@interface/header";

export const Layout = ({ hasTabBar, children, title, hasFooter }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {hasTabBar ? <Header /> : null}
      <div>
        <div>{children}</div>
        {hasFooter ? <Footer /> : null}
      </div>
    </>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Logo</h1>
      <Navigation />
    </header>
  );
};

const Footer = () => {
  return <footer>Footer</footer>;
};

const Navigation = () => {
  return <nav>Navigation</nav>;
};

export default Layout;
