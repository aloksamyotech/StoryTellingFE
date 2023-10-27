/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const ViewStoryNavbar = () => {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/");
  };
  return (
    <>
      <section>
        <Navbar className="navbar-dark bg-primary " expand="lg">
          <Container>
            <NavbarBrand className ="cursor-pointer" onClick={redirectToHome}>
              <h3 className="text-white">AapBeeti</h3>
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar-info">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-info">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/argon-react.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar-info">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square mr-1" />
                    <span className="nav-link-inner--text">Facebook</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter mr-1" />
                    <span className="nav-link-inner--text">Twitter</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-instagram mr-1" />
                    <span className="nav-link-inner--text">Instagram</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default ViewStoryNavbar;
