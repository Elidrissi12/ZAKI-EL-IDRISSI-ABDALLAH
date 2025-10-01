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
              Stage réalisé chez <strong>BCSkills</strong> à <strong>Safi</strong>.
              Missions principales: participation au développement d'applications,
              intégration d'interfaces et collaboration avec l'équipe pour
              améliorer la qualité du code et des livrables.
            </p>
          </div>
          <hr />
          <div className="stage-item">
            <h3>NORSYS Afrique — Marrakech</h3>
            <img src="/images/norsys.jpg" alt="NORSYS Afrique logo" loading="lazy" style={{ maxWidth: "220px", width: "100%", borderRadius: "8px", margin: "10px 0" }} />
            <p>
              Stage réalisé chez <strong>NORSYS Afrique</strong> à <strong>Marrakech</strong>.
              Missions principales: contribution à des projets web, mise en place
              de fonctionnalités, bonnes pratiques et travail en environnement
              agile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stages;


