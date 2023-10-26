import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Contact.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useState } from "react";
import axios from "axios";

const Contact = ({ data, socialData }) => {
  const { title, text, subTitle } = data;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Plot Reservation");
  const [message, setMessage] = useState("");

  const sendEmail = async () => {
    if (!name || !email || !subject || !message) {
      alert("Please fill the form");
      return;
    }
    await axios
      .post("https://loreandigital.com/api/send-email", {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Reach Us! </h3>
            <div id="st-alert"></div>
            <div className="st-contact-form">
              <div className="st-form-field">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="st-form-field">
                <select
                  className="st-form-field"
                  name="selectedFruit"
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="Plot Reservation">Plot Reservation</option>
                  <option value="More information">More information</option>
                </select>
              </div>
              <div className="st-form-field">
                {
                  <textarea
                    cols="30"
                    rows="10"
                    id="msg"
                    name="msg"
                    placeholder="Your Message"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                }
              </div>
              <button
                className="st-btn st-style1 st-color1"
                type="button"
                id="submit"
                name="submit"
                onClick={sendEmail}
              >
                Send Message
              </button>
            </div>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{text}</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link to="#">info@rahmacemetery.org </Link>
                  {/*<Link to="#">info@support.com</Link>*/}
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>
                    Rizwan Moosa <br />
                    +1 717 480 0416
                  </span>
                  {/* <span>+1 651 4284008</span> */}
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>
                    Rahma Cemetery <br /> 313 Forgedale Road, <br />
                    Fleetwood PA 19522
                  </span>
                </div>
              </div>
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Contact;
