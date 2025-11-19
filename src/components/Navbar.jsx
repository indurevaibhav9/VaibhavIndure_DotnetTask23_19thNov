import { Link } from "react-router-dom";

function Navbar()
{
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>My App</h2>
      <ul style={styles.menu}>
        <li><Link style={styles.link} to="/">Home</Link></li>
        <li><Link style={styles.link} to="/">Login</Link></li>
        <li><Link style={styles.link} to="/register">Register</Link></li>
        <li><Link style={styles.link} to="/user-profile">User Profile</Link></li>
        <li><Link style={styles.link} to="/task4">Task 4</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 25px",
    backgroundColor: "#282c34",
  },
  logo: {
    color: "white",
    margin: 0,
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  }
};

export default Navbar;
