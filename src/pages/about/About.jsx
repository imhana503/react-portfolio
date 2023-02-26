import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './about.css';

const About = () => {
  return(
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorenm ipsum dolor sit amet consetetur adipisicing elit.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Stroy"/>
          </div>
          <div className="about__section-content">
            <h1>Our Stroy</h1>
            <p>
            Lorenm ipsum dolor sit amet consetetur adipisicing elit. Maiores fugit adneque quo,
            quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetru esse quibusdm voluptaum otio nemo!
            </p>
            <p>
            Lorenm ipsum dolor sit amet consetetur adipisicing elit. Maiores fugit adneque quo,
            quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetru esse quibusdm voluptaum otio nemo!
            </p>
            <p>
            Lorenm ipsum dolor sit amet consetetur adipisicing elit. Maiores fugit adneque quo,
            quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetru esse quibusdm voluptaum otio nemo!
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">         
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
            Lorenm ipsum dolor sit amet consetetur adipisicing elit. Maiores fugit adneque quo,
            quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetru esse quibusdm voluptaum otio nemo!
            </p>
            <p>
            Lorenm ipsum dolor sit amet consetetur adipisicing elit. Maiores fugit adneque quo,
            quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetru esse quibusdm voluptaum otio nemo!
            </p>
            <p>
            Lorenm ipsum dolor sit amet consetetur adipisicing elit. Maiores fugit adneque quo,
            quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetru esse quibusdm voluptaum otio nemo!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision"/>
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission"/>
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
            Lorenm ipsum dolor sit amet consetetur adipisicing elit. Maiores fugit adneque quo,
            quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetru esse quibusdm voluptaum otio nemo!
            </p>
            <p>
            Lorenm ipsum dolor sit amet consetetur adipisicing elit. Maiores fugit adneque quo,
            quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetru esse quibusdm voluptaum otio nemo!
            </p>
            <p>
            Lorenm ipsum dolor sit amet consetetur adipisicing elit. Maiores fugit adneque quo,
            quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetru esse quibusdm voluptaum otio nemo!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;