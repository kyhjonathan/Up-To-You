import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";
import { Button } from "@mui/material";

const NavigationBar = () => {
  const location = useLocation();

  return (
    <>
      <Navbar className="nav-bar">
        <Container>
          <Navbar.Brand>Up To You</Navbar.Brand>
          <Navbar.Collapse>
            <Nav
              style={{
                display: "flex",
                width: "80%",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                className="nav-button"
                component={Link}
                to="/"
                variant="outlined"
                color={location.pathname === "/" ? "primary" : "inherit"}
                // sx={{ marginRight: 2 }}
              >
                Home
              </Button>
              <Button
                className="nav-button"
                component={Link}
                to="/about"
                variant="contained"
                color={location.pathname === "/" ? "primary" : "inherit"}
              >
                About
              </Button>
              <Button
                className="nav-button"
                component={Link}
                to="/contact"
                variant="contained"
                color={location.pathname === "/" ? "primary" : "inherit"}
              >
                Contact
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
