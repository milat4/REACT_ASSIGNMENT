import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <div className="overlay">&nbsp;</div>
    <header>
      <div className="container">
        <div className="header">
          <a href="#" className="logo" aria-label="Logo">
            <img src="/imgs/logo.svg" alt="logo" />
          </a>
          <span className="mobile-btn hamburger">
            <img src="/imgs/icon-hamburger.svg" alt="menu" />
          </span>
          <span className="mobile-btn close d-none">
            <img src="/imgs/icon-close.svg" alt="close" />
          </span>
          <nav className="mobile-menu">
            <ul className="primary">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
            <ul className="secondary">
              <li>
                <button className="btn btn-primary mine">
                  Request Invite
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;
