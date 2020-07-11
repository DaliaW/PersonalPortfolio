import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import styles from '../Footer/msg.css'



import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <div className="msgdiv"><p className="msg">🙋‍♀️ If you have any inquiries feel free to send me a message on LinkedIn through the icon down below 😄</p>
                <a className="anch"
                
                  key={id}
                  href={url || 'https://github.com/DaliaW'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
                </div>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
         <p> © {new Date().getFullYear()} - Created and designed with 💓 by </p>{' '}
          <a href="https://github.com/DaliaW" target="_blank" rel="noopener noreferrer">
           <p> Dalia Walid </p>
          </a>
          <p> <div> All rights Reserved </div> </p>
        </p>

      </Container>
    </footer>
  );
};

export default Footer;
