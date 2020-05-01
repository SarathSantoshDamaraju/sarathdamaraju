import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

function Header({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Header.defaultProps = {
  description: 'Portfolio website of krishna Sarath',
};

export default Header;
