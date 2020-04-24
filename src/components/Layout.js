import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({
  title, heading, description, children,
}) => (
  <main>
    <Header title={title || heading} description={description} />

    <Navbar />

    {heading ? <h2 className="page-title">{heading}</h2> : ''}

    {children}

    <Footer />
  </main>
);

Layout.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
