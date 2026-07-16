import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🎉 <span>EventEase</span>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Events</a></li>
        <li><a href="/">RSVP</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;