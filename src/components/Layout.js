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



      <div className="container mt-80">
        <h2 className="page-title mb-20">{heading}</h2>
        {children}
      </div>

      <Footer />
    </main >
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
