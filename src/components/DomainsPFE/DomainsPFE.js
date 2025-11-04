import React from "react";

function DomainsPFE() {
  return (
    <section id="domains-pfe">
      <div className="Container">
        <div className="SectionTitle">Domaines de Stage PFE Recherchés</div>

        <div className="BigCard">
          <h3>Testing & Qualité Logicielle</h3>
          <p>
            Assurer la fiabilité, la performance et la maintenabilité des applications à travers des tests
            manuels, automatisés et de performance.
          </p>
          <ul>
            <li>Automatisation des tests fonctionnels et de performance avec <strong>Selenium</strong> et <strong>JMeter</strong>.</li>
            <li>Analyse et amélioration de la qualité du code avec <strong>SonarQube</strong>.</li>
            <li>Plan d'assurance qualité couvrant tests fonctionnels, performance et sécurité.</li>
            <li>Testing manuel : plans de test, suivi des anomalies avec <strong>Jira</strong>, méthodologies <strong>Agile/Scrum</strong>.</li>
            <li>Testing automatisé : <strong>Selenium</strong>, <strong>JUnit</strong>, <strong>SonarQube</strong>, <strong>Jest</strong> (unitaires & intégration), <strong>CI/CD</strong>.</li>
            <li>Test de performance : <strong>JMeter</strong>.</li>
            <li>Outils de collaboration : <strong>GitHub</strong>, <strong>GitLab</strong>, <strong>Jira</strong>, <strong>Confluence</strong>, <strong>Squash TM</strong>.</li>
          </ul>
        </div>

        <div className="BigCard" style={{ marginTop: 24 }}>
          <h3>CRM / ERP</h3>
          <p>
            Comprendre le cycle d’implémentation CRM/ERP, produire des livrables (FRD/FDD, Fit–Gap, UAT) et se
            préparer aux entretiens.
          </p>
          <ul>
            <li>Cycle : <strong>Discovery → Analyse/Design → Config/Dev → Tests/UAT → Formation/Déploiement → Go-Live & Support</strong>.</li>
            <li>CRM Marketing : campagnes, segmentation, nurturing, MKT–Sales, KPIs.</li>
            <li>CRM Ventes : comptes/contacts, leads & opportunités, catalogue/prix, commandes & facturation, reporting.</li>
            <li>CRM Service / Field : cas, SLA, escalade, self-service, OT, planification & dispatch.</li>
            <li>ERP — <strong>SAP MM (P2P)</strong> : PR → PO → GR → IV → paiement ; master data, KPIs.</li>
            <li>Docs & livrables : <strong>FRD, FDD, Fit-Gap, scénarios & cas de test UAT</strong>, bonnes pratiques & diagrammes.</li>
          </ul>
        </div>

        <div className="BigCard" style={{ marginTop: 24 }}>
          <h3>Développement Full Stack</h3>
          <p>
            Conception et réalisation d'applications web et desktop complètes, de l'architecture backend à l'interface
            utilisateur, en passant par la base de données et le déploiement.
          </p>
          <ul>
            <li>Backend : <strong>Node.js</strong>, <strong>NestJS</strong>, <strong>Django</strong>, <strong>Express</strong>, <strong>Python</strong>, <strong>Java</strong>, APIs REST, DB (<strong>PostgreSQL</strong>, <strong>MySQL</strong>, <strong>MongoDB</strong>).</li>
            <li>Frontend : <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, <strong>Material UI</strong>, <strong>Redux</strong>, <strong>Figma</strong>.</li>
            <li>Projets concrets : CRM interne (SBS), KTD (EBF), réservation, e-commerce, générateur de quiz, Hôtel Moderne.</li>
            <li>Déploiement & gestion : <strong>Git</strong>, <strong>GitHub</strong>, <strong>CI/CD</strong>, <strong>Docker</strong>, tests unitaires & intégration.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DomainsPFE;



