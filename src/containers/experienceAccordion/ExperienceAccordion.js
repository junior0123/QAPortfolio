import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="experience-accord">
        {/* Renderizamos las secciones directamente sin Accordion */}
        {this.props.sections.map((section) => (
          <div key={section.title}>
            {/* Título de la sección */}
            <h2
              className="experience-section-title"
              style={{ color: theme.text, marginBottom: "20px" }}
            >
              {section.title}
            </h2>

            {/* Lista de experiencias */}
            {section.experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                index={index}
                totalCards={section.experiences.length}
                experience={experience}
                theme={theme}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default ExperienceAccordion;
