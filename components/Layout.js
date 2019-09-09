import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <main>

    <Header
      title={props.title || props.heading}
      description={props.description}
    />

    <Navbar />

    {props.heading ? <h2 className="page-title">{props.heading}</h2> : ''}

    {props.children}

    <Footer />
  </main>
);

Layout.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

Layout.defaultProps = {
  heading: 'KD',
  description: 'Portfolio website of Krishna Sarath'
}

export default Layout;