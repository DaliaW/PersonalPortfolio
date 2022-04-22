import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import Tilt from 'react-tilt';
import styles from '../About/about.css';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title={<h2 className="about">About Me</h2>} />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <Tilt
                options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}
              >
                <div className="about-wrapper__image">
                  <AboutImg alt="profile picture" filename={img} />
                </div>
              </Tilt>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I am a 5th year Computer Engineering student at the German University in Cairo. 👩‍💻'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I have a strong passion for creating things that leave a positive impact on people, Things that aim for something better, and have a valuable meaning in it  ✨. I am quietly confident, curious about new technology, and I have a strong determination to solve whatever problems in my way.💪'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'I love learning these topics: AI, web development, Android development, Video creation, 2D & 3D animations. I am seeking to learn more and more in my field to widen my knowledge and sharpen my skills.✍'}
                </p>

                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href="https://drive.google.com/file/d/1CYqharjxDlPxbNTEUNsOb5AWUuShDjOu/view?usp=sharing"
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
