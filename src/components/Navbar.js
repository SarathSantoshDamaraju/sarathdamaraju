import Link from 'next/link';

const Navbar = () => (
  <nav>
    <div>
      <Link href="/">
        <a>
          <img alt="logo" src="/logo.svg" />
        </a>
      </Link>
    </div>
    <div>
      <ul className="navLinks">
        <li className="navLink">
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li className="navLink">
          <Link href="/journals">
            <a>Journals</a>
          </Link>
        </li>
        <li className="navLink">
          <Link href="/reads">
            <a>Reading</a>
          </Link>
        </li>
        <li className="navLink">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>
      {`
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

        .navLink > a {
          font-size: 16px;
        }

        .navLinks a,
        a:hover,
        a:visited {
          color: #fff;
        }

        .navLinks a:active {
          color: #cb734d;
        }

        .navLinks a:hover {
          text-decoration: underline;
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
      `}
    </style>
  </nav>
);

export default Navbar;
