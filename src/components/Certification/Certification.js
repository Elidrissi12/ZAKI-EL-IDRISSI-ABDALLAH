// src/components/Certification/Certification.js

import React from "react";
import "./Certification.css";

function Certification() {
  return (
    <section id="certification">
      <h2>Certifications</h2>
      <div className="certificates">
        {/* Certification 1 */}
        <a
          href="https://coursera.org/share/b02f169c6d47ed5a6b9efa5f82811413"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/react.png"
            alt="Certification 1"
            className="certificate-image"
          />
          <p>Scrum Master Profession</p>
        </a>

        {/* Certification 2 */}
        <a
          href="https://coursera.org/share/bc4e7884d85063187c799b86c1c0d699"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/java.png"
            alt="Certification 2"
            className="certificate-image"
          />
          <p>React Basics</p>
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/unix.jpg"
            alt="Certification 1"
            className="certificate-image"
          />
          <p>Certification 4</p>
        </a>
        <a
          href="https://coursera.org/share/90804cd58eed9e1016b32a6b7552f5d9"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/uml.jpg"
            alt="Certification 1"
            className="certificate-image"
          />
          <p>Java and Object-Oriented Programming</p>
        </a>
        <a
          href="https://www.coursera.org/account/accomplishments/certificate/KVTJ36RDQEVZ"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/spring.jpg"
            alt="Certification 1"
            className="certificate-image"
          />
          <p>Certification 6</p>
        </a>
        <a
          href="https://www.coursera.org/account/accomplishments/verify/US29KC889GYL"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/SQL.jpg"
            alt="Certification 1"
            className="certificate-image"
          />
          <p>Certification 7</p>
        </a>
        <a
          href="https://www.coursera.org/account/accomplishments/verify/L6SH3HLAUQE8"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/c.png"
            alt="Certification 1"
            className="certificate-image"
          />
          <p>Certification 8</p>
        </a>
        <a
          href="https://www.coursera.org/account/accomplishments/verify/DDN2WVM4V7CL"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/js.png"
            alt="Certification 1"
            className="certificate-image"
          />
          <p>Certification 9</p>
        </a>
        <a
          href="coursera.org/account/accomplishments/verify/AEBNEJY47UAP"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/web.jpg"
            alt="Certification 1"
            className="certificate-image"
          />
          <p>Certification 10</p>
        </a> <a
          href="https://www.coursera.org/account/accomplishments/verify/BLQ1XZUZ044M"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/html.png"
            alt="Certification 1"
            className="certificate-image"
          />
          <p>Certification 11</p>
        </a>
        <a
          href="https://www.coursera.org/account/accomplishments/verify/HQRD7UAHGYZX"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/adv.png"
            alt="Certification 1"
            className="certificate-image"
          />
          <p>Certification 12</p>
        </a>

        <a
          href="https://www.coursera.org/account/accomplishments/verify/8V7FGFZMB1WU"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/docker.PNG"
            alt="Certification 1"
            className="certificate-image"
          />
          <p>Certification 1</p>
        </a>
        <a
          href="https://www.coursera.org/account/accomplishments/verify/UODNESKTEZHP"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/azure.PNG"
            alt="Certification 1"
            className="certificate-image"
          />
          <p>Certification 1</p>
        </a>
        {/* Add more certifications as needed */}
      </div>
    </section>
  );
}

export default Certification;
