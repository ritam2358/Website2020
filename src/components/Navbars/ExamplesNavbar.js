/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import auvlog from '../../assets/img/auv-logo-mini.png'
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 0 ||
        document.body.scrollTop > 0
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 1 ||
        document.body.scrollTop < 1
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor, "custom-nav")} 
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate custom-nav">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="AUV-IITK"
            tag={Link}
            className="custom-nav"
          >
            <img src={auvlog}></img>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/landing-page" tag={Link}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about-us" tag={Link}>
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/team" tag={Link}>
                Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                Sponsor
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="black"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={e => e.preventDefault()}
                role="button"
              >
                Vehicles
                      </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
                style={{backgroundColor:"#51BCDA"}}
              >
                <DropdownItem
                  // href="#pablo"
                  // onClick={e => e.preventDefault()}
                  style={{textAlign: "center"}}
                >
                  <Link to='/vehicles/anahita' style={{color: 'black'}}>
                  Anahita
                  </Link>
                  
                        </DropdownItem>
                <DropdownItem 
                  // href="#pablo"
                  // onClick={e => e.preventDefault()}
                  style={{textAlign: "center"}}
                  onClick={()=>{}}
                >
                  <Link to='/vehicles/varun' style={{color:'black'}}>
                  Varun
                  </Link>
                  
                        </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                Latest Posts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                Contact Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/auviitk"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/AUV-IITK"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
