import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const team = [
    {
      name: "Abhishek",
      linkedin: "https://www.linkedin.com/in/abhishek-h-h/",
    },
    {
      name: "Aravind",
      linkedin: "https://www.linkedin.com/in/aravind-shan/",
    },
    {
      name: "Gagan",
      linkedin: "https://www.linkedin.com/in/gagan-hs/",
    },
    {
      name: "Ganapati",
      linkedin: "https://www.linkedin.com/in/ganapati-v-s/",
    },
    {
      name: "Shrivathsa",
      linkedin: "https://www.linkedin.com/in/shrivathsa-s-shetty/",
    },
  ];

  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/doctors"}>Doctors</NavLink>
              </li>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>Notifications</NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li>
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
            </ul>
          </div>

          <div className="social">
            <h3>Social links</h3>
            <ul>
              <li className="facebook">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="youtube">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="instagram">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          Made by{" "}
          {team.map((member, index) => (
            <span key={member.name}>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {member.name}
              </a>
              {index < team.length - 2 && ", "}
              {index === team.length - 2 && " & "}
            </span>
          ))}{" "}
          © {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;