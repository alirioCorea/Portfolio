import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { useState, useEffect } from 'react'
import BannerImg from '../assets/img/header-img-2.svg'

export default function Banner() {
    const toRotate=['Developer', 'Designer'];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setDeleting] = useState(false);
    const [text, setText] = useState('');
    const period =5000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
  
    useEffect(() => {
        let ticker=setInterval(() => {
            tick();
        }, delta);
        return () => {clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i =loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText= isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText){
            setDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
   <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portolio</span>
                    <h1>{`Hi I'm Josué Corea`}<br/><span className='wrap'>{`Web ${text}`}</span></h1>
                    <p>High school graduate with experience in software development, using technologies such as CSS, HTML, Java, GitHub together with Slack; collaborating as a designer, layout designer and developer I am looking for an opportunity to collaborate, support and become an expert in the area, I am passionate about technology, I like challenges and never stop learning.</p>
                    <button onClick={()=>console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5} className='banner-img'> 
                    <img src={BannerImg} alt='banner-img' />
                </Col>
            </Row>
        </Container>
   </section>
  )
}
