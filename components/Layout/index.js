import Navbar from '../Navbar';
import Link from 'next/link';
import '../../styles/styles.css'

const Layout = props => (
  <main>
    <Navbar />
    {props.heading ?  <h2 className="page-title">{props.heading}</h2> : ''}
    {props.children}
    <footer>
      made with <Link href="#"><a>nextjs</a></Link>
    </footer>
    <style jsx>{`
    h2 {
      margin: 60px auto 40px;
    }
    footer::before {
      content: " ";
      position: absolute;
      bottom: 8px;
      left: -90px;
      right: 0;
      height: 1px;
      border-top: 1px solid #CB734D;
      width: 80px;
    }
    footer {
      position: fixed;
      right: 60px;
      bottom: 40px;
    }
    `}</style>
  </main>
);

export default Layout;