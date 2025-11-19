import React from "react";

function Footer()
{
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} My React App. All Rights Reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#282c34",
    padding: "15px 0",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  text: {
    color: "white",
    margin: 0,
    fontSize: "14px",
  },
};

export default Footer;
