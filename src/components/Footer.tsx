const Footer = () => (
  <footer className="footer">
    <p>&#169; {new Date().getFullYear()} My Blog</p>
    <div className="social-links">
      {/* Add your social links here */}
      <a href="#" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      {/* Add more links as needed */}
    </div>
  </footer>
);

export default Footer;
