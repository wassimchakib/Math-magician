import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Navbar;
