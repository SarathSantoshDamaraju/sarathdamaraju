import Link from 'next/link';

const Footer = () => (
  <footer className="position--fixed">
    made with
    {' '}
    <Link href="#">
      <a>nextjs</a>
    </Link>
  </footer>
);

export default Footer;
