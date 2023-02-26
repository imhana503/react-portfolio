import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
import './contact.css';

const Contact = () => {
  return(
    <>
      <Header title="Get In Touch" image={HeaderImage}>
      Lorenm ipsum dolor sit amet consetetur adipisicing elit.
      </Header>
      <section className="contact">
        <div className="container content__container">
          <div className="contact__wrapper">
            <a href="mailto:imhana503@naver.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
            <a href="http://m.me/ernest_achiever" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
            <a href="http://wa.me/+01092915190" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;