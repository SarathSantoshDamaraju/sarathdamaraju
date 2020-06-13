import Link from 'next/link';

const navItems = [
  {
    name: 'work',
    link: '/work',
  },
  {
    name: 'about',
    link: '/contact',
  },
];

const Navbar = () => (
  <nav className="nav">
    <div className="nav__element">
      <Link href="/">
        <a>
          <img alt="logo" src="/logo.svg" />
        </a>
      </Link>
    </div>

    <div className="nav__element">
      <ul className="nav__menu display--flex justify--space-between align--centre">
        {navItems.map((item) => (
          <li className="nav__menu--item" key={item.name}>
            <Link href={item.link}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}

        <li className="nav__menu--item">
          <svg className="theme-switcher" viewBox="0 0 21.939 19">
            <path
              fill="rgba(28,31,36,1)"
              className="theme-switcher__polygon"
              d="M 15.29978275299072 0 C 16.01431465148926 0 16.67456817626953 0.3811978697776794 17.03183364868164 1.000000238418579 L 21.36196136474609 8.5 C 21.71922492980957 9.118802070617676 21.71922492980957 9.881197929382324 21.36196136474609 10.5 L 17.03183364868164 18 C 16.67456817626953 18.61880111694336 16.01431465148926 19 15.29978275299072 19 L 6.639527797698975 19 C 5.924996376037598 19 5.264742374420166 18.61880111694336 4.907476902008057 18 L 0.5773502588272095 10.49999904632568 C 0.2200846523046494 9.881196975708008 0.2200847566127777 9.118801116943359 0.5773505568504333 8.499999046325684 L 4.907478809356689 0.9999995827674866 C 5.264744281768799 0.3811976313591003 5.92499828338623 0 6.639529228210449 0 Z"
            />
          </svg>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
