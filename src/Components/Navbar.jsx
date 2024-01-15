import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaTradeFederation } from "react-icons/fa6";
import { Link }  from 'react-router-dom'

function MainNavbar() {
  return (
    <Navbar expand="lg" bg="secondary" >
      <Container>
        <Navbar.Brand>
            <FaTradeFederation />
            Commerce-App &emsp;

          <Navbar.Text>
             <Link to='/'>
                Home page
             </Link>
          </Navbar.Text>

        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             <Link to='/about'>
                About
             </Link>
          </Navbar.Text>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default MainNavbar;