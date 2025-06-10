import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";
import { Button } from "@mui/material";
import ProfileIcon from "../../components/ProfileIcon";

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
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={
                  {
                    // display: "flex",
                    // gap: "3rem",
                    // justifyContent: "center",
                    // flex: 1,
                  }
                }
              >
                <Button
                  className="nav-button"
                  component={Link}
                  to="/"
                  variant="contained"
                  color={location.pathname === "/" ? "primary" : "inherit"}
                  sx={{ borderRadius: "10px" }}
                >
                  Home
                </Button>
                <Button
                  className="nav-button"
                  component={Link}
                  to="/about"
                  variant="contained"
                  color={location.pathname === "/about" ? "primary" : "inherit"}
                  sx={{ borderRadius: "10px" }}
                >
                  About
                </Button>
                <Button
                  className="nav-button"
                  component={Link}
                  to="/contact"
                  variant="contained"
                  color={
                    location.pathname === "/contact" ? "primary" : "inherit"
                  }
                  sx={{ borderRadius: "10px" }}
                >
                  Contact
                </Button>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <ProfileIcon />{" "}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
