import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube, 
faPinterest } from '@fortawesome/free-brands-svg-icons'
import { Footer, Header, GenereicPara, GenericH2 } from '../styles/IndexStyles';
import { Link } from "gatsby";
export default ({ children }) => (
 <div>
    <Header>
 <GenericH2 no>
 <Link className="none" to="/" style={{color: '#fff'}}>GoodHacker</Link>
 </GenericH2>
 <div className="menu_items">
 <Link className="none" to="/works"><GenereicPara lessSize lessSpacing grey>
Works</GenereicPara></Link>
 <Link className="none" to="/about"><GenereicPara lessSize lessSpacing grey>
About</GenereicPara></Link>
 </div>
 </Header>
    {children}
 <Footer>
 <div class="icons">
 <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
 <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth />
 <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth />
 <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
 <FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
 <FontAwesomeIcon icon={faPinterest} size="2x" fixedWidth />
 </div>
 <div class="copyright">
 <span>&copy; 2024, GoodHacker | </span>
 <span>Made with ❤ and ☕ in Egypt</span>
 </div>
 </Footer>
 </div>
)