const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-light">
      <a className="navbar-brand m-2" href="#">
        Active Counters{" "}
        <span className="badge bg-pill bg-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
