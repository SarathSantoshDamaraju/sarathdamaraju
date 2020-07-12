import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

import { setTheme } from '../lib/themes';

function LayoutContent({ title, heading, description, children }) {
  React.useEffect(() => {
    // if theme is set, load it
    const currentTheme = window.localStorage.getItem('portfolio-theme');

    if (currentTheme) {
      setTheme(JSON.parse(currentTheme));
    }
  }, []);

  return (
    <main className="grand fade-in">
      <Header title={title || heading} description={description} />
      <Navbar />

      <div className="container">
        {heading ? <h2 className="page-title mb-20">{heading}</h2> : ''}
        {children}
      </div>

      <Footer className="position--fixed" />
    </main>
  );
}

LayoutContent.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Layout = ({ title, heading, description, children }) => (
  <LayoutContent title={title} heading={heading} description={description}>
    {children}
  </LayoutContent>
);

Layout.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  description: 'Portfolio website of krishna Sarath',
};

export default Layout;
