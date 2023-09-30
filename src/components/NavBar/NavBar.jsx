import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import styles from "./NavBar.module.scss";

const NavBar = () => {

  const {data, loading} = useCollection("categories")

  return (
    <div className={styles.wrapper}>
        <Navbar.Brand>
          <Link className={styles.logo} to="/">Verduleria</Link>
        </Navbar.Brand>
          <nav>
            <div className={styles.menu}>
              <Nav.Link>
                <Link className={styles.botonMenu} to="/">Home</Link>
              </Nav.Link>
              {
                loading ? null : (
                  <NavDropdown title="Categorias" id="basic-nav-dropdown" className={styles.botonMenu}>
                    {data[0].categories.map((category, index) => {
                      return (
                        <NavDropdown.Item key={index}>
                          <Link className={styles.botonMenu} to={`/category/${category}`}>{category}</Link>
                        </NavDropdown.Item>
                      )    
                    })}
                </NavDropdown>
              )}
            </div>

          </nav>
          <CartWidget />
    </div>
  );
};

export default NavBar;
