// src/components/Certification/Certification.js

import React from "react";
import "./Certification.css";
import { useI18n } from "../../i18n";

function Certification() {
  const { t } = useI18n();
  return (
    <section id="certification">
      <h2>{t('sections.certifications')}</h2>
      <div className="certificates">
        {/* Certification 1 */}
        <a
          href="https://coursera.org/share/c4598902445d538624782f04fa214b23"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/react.png"
            alt="Scrum Master Profession certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>Scrum Master Profession</p>
        </a>

        {/* Certification 2 */}
        <a
          href="https://coursera.org/share/90804cd58eed9e1016b32a6b7552f5d9"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/java.png"
            alt="React Basics certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>React Basics</p>
        </a>
        <a
          href="https://coursera.org/share/9e52c915a744c707690a6ec0b4cdf9af"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/style.png"
            alt="CSS and Styling certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>CSS and Styling</p>
        </a>
        <a
          href="https://coursera.org/share/fc9a81062fba860b36f06005cbf02d9e"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/arduino.jpg"
            alt="Java and Object-Oriented Programming certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>Java and Object-Oriented Programming</p>
        </a>
        <a
          href="https://coursera.org/share/862eacfc17236a5eb70ba16f80d77f5a"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/azuremicrosoft.jpg"
            alt="Microsoft Azure certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>Microsoft Azure</p>
        </a>
        <a
          href="https://coursera.org/share/845235fe31fca41ce200c31060299284"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/SQL.jpg"
            alt="SQL Database certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>SQL Database</p>
        </a>
        <a
          href="https://coursera.org/share/427b959103da3953499bca422da63b3a"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/c.png"
            alt="C Programming certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>C Programming</p>
        </a>
        <a
          href="https://coursera.org/share/0ee2cdc93e9864dc9de3f1171853b73b"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/entreprise.jpg"
            alt="Enterprise Development certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>Enterprise Development</p>
        </a>
        <a
          href="https://coursera.org/share/45a83df8ba3522d4391fc96fea4d1d12"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/google.jpg"
            alt="Google Cloud certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>Google Cloud</p>
        </a>         <a
          href="https://coursera.org/share/204f600a826b0bd194eea972cb3f332a"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/scrum.png"
            alt="Agile and Scrum certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>Agile and Scrum</p>
        </a>
        <a
          href="https://coursera.org/share/c4598902445d538624782f04fa214b23"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/computer.jpg"
            alt="Computer Science certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>Computer Science</p>
        </a>

        <a
          href="https://coursera.org/share/c4598902445d538624782f04fa214b23"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/docker.PNG"
            alt="Docker certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>Docker</p>
        </a>
        <a
          href="https://coursera.org/share/c4598902445d538624782f04fa214b23"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/azure.PNG"
            alt="Azure Cloud certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>Azure Cloud</p>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card"
        >
          <img
            src="/images/virtualisation.png"
            alt="VMware Virtualization 101 certificate"
            loading="lazy"
            className="certificate-image"
          />
          <p>VMware Virtualization 101</p>
        </a>
        {/* Add more certifications as needed */}
      </div>
    </section>
  );
}

export default Certification;
