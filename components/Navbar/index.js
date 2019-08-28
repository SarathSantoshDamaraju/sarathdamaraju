import Link from 'next/link';

const Navbar = () => (
  <nav>
    <div>
      <Link href="/">
        <a>
          <img src="/static/logo.svg" />
        </a>
      </Link>
    </div>
    <div>
      <ul className="navLinks">
        <li className="navLink"><Link href="work"><a>Work</a></Link></li>
        <li className="navLink"><Link href="journal"><a>Journal</a></Link></li>
        <li className="navLink"><Link href="#"><a>Reading</a></Link></li>
        <li className="navLink"><Link href="#"><a>Contact</a></Link></li>
      </ul>
    </div>
    <style jsx>{`
/* navbar */


nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.navLinks {
  list-style: none;
  display: flex;
  width: 400px;
  justify-content: space-between;
}

.navLinks a,
a:hover,
a:visited {
  color: #fff;
}

.navLinks a:active {
  color: #CB734D;
}

.navLinks a:hover {
  text-decoration: underline
}

@media only screen and (max-width: 600px) {
  nav {
    flex-direction: column;
  }

  .navLinks {
    width: 280px;
    padding: 0;
  }
}
  `}</style>
  </nav>
);

export default Navbar;