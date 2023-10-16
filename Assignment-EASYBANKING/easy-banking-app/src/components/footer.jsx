import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className="footer pa-5">
        <div className="footer__intro">
          <img src="/imgs/logo-dark.svg" className="footer__logo" alt="image here" />
          <ul className="footer__social">
            <li><Link href="#" aria-label="Facebook"><img src="/imgs/icon-facebook.svg" alt="image here" /></Link></li>
            <li><Link href="#" aria-label="Youtube"><img src="/imgs/icon-youtube.svg" alt="image here" /></Link></li>
            <li><Link href="#" aria-label="Twitter"><img src="/imgs/icon-twitter.svg" alt="image here" /></Link></li>
            <li><Link href="#" aria-label="Pinterest"><img src="/imgs/icon-pinterest.svg" alt="image here" /></Link></li>
            <li><Link href="#" aria-label="Instagram"><img src="/imgs/icon-instagram.svg" alt="image here" /></Link></li>
          </ul>
        </div>
        <div className="footer__links">
          <ul>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
          <ul>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Support</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer__last">
          <button type="button" className="btn btn-primary">Request Invite</button>
          <p>&copy; Easybank. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  