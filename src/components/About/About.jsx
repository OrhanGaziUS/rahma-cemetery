import PropTypes from "prop-types";
import "./About.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import Gmap from "../GoogleMap/Gmap";
import { Link as ScrollLink } from "react-scroll";

const About = ({ data }) => {
  const { imgLink, title, subtitle, text, details, cvPdf } = data;
  return (
    <section id="about" className="st-about-wrap">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"Location"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="st-about-img-wrap">
              {/* Haritayı bunun altındaki dive e koycaksın */}
              <div
                className="st-about-img st-bg"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <Gmap />
              </div>
            </div>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div
                  className={`st-text-block st-style1`}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <div className="st-text-block-text">
                    <p>
                      Rahma Meadow of Mercy Cemetery is a Muslim-only cemetery
                      in Lehigh Valley, PA. This cemetery can serve Muslims in
                      the surrounding areas. Please contact us for more details.
                    </p>
                  </div>
                  <div>{/*<h3>CODE</h3>*/}</div>

                  <div className="st-text-block-btn">
                    <a
                      className="st-btn st-style1 st-color1"
                      target="_blank"
                      href={
                        "https://www.google.com/maps/place/17+Fleetwood+Rd,+Fleetwood,+PA+19522/@40.4634164,-75.7543734,17z/data=!3m1!4b1!4m6!3m5!1s0x89c5d48f084e9047:0xbaedf6d781ea2da!8m2!3d40.4634164!4d-75.7517985!16s%2Fg%2F11c4z58f6t?entry=ttu"
                      }
                    >
                      See on Google Maps!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.object,
};

export default About;
