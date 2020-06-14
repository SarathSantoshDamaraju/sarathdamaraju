import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const Theme = React.createContext();

export const useTheme = () => React.useContext(Theme);

export function ThemeProvider({ theme, children }) {
  const [val, setTheme] = React.useState(theme);
  return <Theme.Provider value={[val, setTheme]}>{children}</Theme.Provider>;
}

ThemeProvider.propTypes = {
  theme: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function LayoutContent({ title, heading, description, children }) {
  const [theme, setTheme] = useTheme();

  React.useEffect(() => {
    setTheme(window.localStorage.getItem('theme'));
  }, [theme, setTheme]);

  return (
    <main className={`fade-in ${theme === 'light' ? 'light' : 'dark'}`}>
      <Header title={title || heading} description={description} />
      <Navbar themeSwitcher={useTheme} />

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
  <ThemeProvider theme="light">
    <LayoutContent title={title} heading={heading} description={description}>
      {children}
    </LayoutContent>
  </ThemeProvider>
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
