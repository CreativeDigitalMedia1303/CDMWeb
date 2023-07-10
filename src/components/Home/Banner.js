import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import Whatsapp from "../../assets/img/Whatsapp.png";
import './Banner.css';
import TrackVisibility from 'react-on-screen';
const isMobile = window.innerWidth <= 767;
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const handleClick = () => {
    const phoneNumber = '+91 7259561303'; // Replace with your phone number
    const message = 'Hey can i know more about your services.'; // Replace with your default message
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
          <section className="banner" id="home">
         <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                     
                      <h2 className="brand-title" >
    Launch Your Brand into 
  
  </h2>
  <h2 className="brand-title" >
    Digital Orbit 
  
  </h2>
                      <button 
  className="tagline1"
  onClick={handleClick}
  style={{
    marginLeft: window.innerWidth > 767 ? '220px' : '10px',
    textAlign: 'left',
  }}
>
  <img
    src={Whatsapp}
    alt="Whatsapp"
    style={{ width: '50px', height: '50px', animation: 'none' }}
  />{' '}
  Let’s Connect
</button>


          

                      

                    </div>
                  )}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="Header Img" className="header-image" />
                    </div>
                  )}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      );
    };
    