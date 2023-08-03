import { Navbar } from "flowbite-react";

export default function MyNavbar() {
  return (
    <Navbar fluid>
      <Navbar.Brand>
        <span className="text-white">Joshua Bernal</span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link>
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link>
          <a>About</a>
        </Navbar.Link>
        <Navbar.Link>
          <a>Skills</a>
        </Navbar.Link>
        <Navbar.Link>
          <a href="https://www.google.com" target="_blank">
            Contact
          </a>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
