import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header className="header" style={styles.heading}>
      <h1 style={styles.content}>Welcome</h1>
    </header>
  );
}

export default Header;
