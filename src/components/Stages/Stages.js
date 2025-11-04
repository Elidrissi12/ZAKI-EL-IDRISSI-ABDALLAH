import React from "react";
import { useI18n } from "../../i18n";

function Stages() {
  const { t } = useI18n();
  return (
    <section id="stages">
      <div className="Container">
        <div className="SectionTitle">{t('sections.stages')}</div>
        <div className="BigCard">
          <div className="stage-item">
            <h3>BCSkills — Safi</h3>
            <img src="/images/bcskills.jpg" alt="BCSkills building" loading="lazy" style={{ maxWidth: "220px", width: "100%", borderRadius: "8px", margin: "10px 0" }} />
            <p>
              Internship completed at <strong>BCSkills</strong> in <strong>Safi</strong>.
              Main responsibilities: contributing to application development,
              UI integration, and collaborating with the team to improve
              code quality and deliverables.
            </p>
          </div>
          <hr />
          <div className="stage-item">
            <h3>NORSYS Afrique — Marrakech</h3>
            <img src="/images/norsys.jpg" alt="NORSYS Afrique logo" loading="lazy" style={{ maxWidth: "220px", width: "100%", borderRadius: "8px", margin: "10px 0" }} />
            <p>
              Internship completed at <strong>NORSYS Afrique</strong> in <strong>Marrakech</strong>.
              Main responsibilities: contributing to web projects, implementing
              features, following best practices, and working in an agile
              environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stages;


