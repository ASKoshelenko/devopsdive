import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useTranslation } from 'react-i18next';
import flagEN from '../Assets/flagEN.png'; 
import flagUA from '../Assets/flagUA.png'; 
import flagRU from '../Assets/flagRU.png'; 


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const navRef = useRef();

  const { t, i18n } = useTranslation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        updateExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  window.addEventListener("scroll", scrollHandler);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      ref={navRef}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Nav.Item>
          <Nav.Link onClick={() => changeLanguage('en')}>
            <img src={flagEN} alt="English" style={{ width: '30px' }} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => changeLanguage('ua')}>
            <img src={flagUA} alt="Ukrainian" style={{ width: '30px' }} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => changeLanguage('ru')}>
            <img src={flagRU} alt="Russian" style={{ width: '30px' }} />
          </Nav.Link>
        </Nav.Item>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("navbar_home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("navbar_about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> {t("navbar_projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("navbar_resume")}
              </Nav.Link>
            </Nav.Item> 
          </Nav>
          {/* <Nav.Item>
            <Nav.Link onClick={() => changeLanguage('ua')}>
              <img src={flagUA} alt="Ukrainian" style={{ width: '30px' }} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => changeLanguage('en')}>
              <img src={flagEN} alt="English" style={{ width: '30px' }} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => changeLanguage('ru')}>
              <img src={flagRU} alt="Russian" style={{ width: '30px' }} />
            </Nav.Link>
          </Nav.Item> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
