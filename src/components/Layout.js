import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  :root {
    --foreground-color:  ${(props) => props.theme.foreground_color};
    --background-color: ${(props) => props.theme.background_color}; 
    --text-color: ${(props) => props.theme.font_color};
  }
`;
const Layout = ({ title, heading, description, children }) => (
  <main>
    <GlobalStyle />
    <Header title={title || heading} description={description} />
    <Navbar />

    <div className="container">
      {heading ? <h2 className="page-title mb-20">{heading}</h2> : ''}
      {children}
    </div>

    <Footer className="position--fixed" />
  </main>
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
