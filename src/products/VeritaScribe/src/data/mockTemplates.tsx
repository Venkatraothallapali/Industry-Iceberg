import React from "react";
import "./mockTemplates.css";

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
}

const templates: Template[] = [
  {
    id: "1",
    name: "IND Application Template",
    description:
      "Comprehensive IND application template with all required sections for FDA submission.",
    category: "IND",
    icon: "📋",
  },
  {
    id: "2",
    name: "NDA Template",
    description:
      "Complete NDA submission template for new drug applications.",
    category: "NDA",
    icon: "📚",
  },
  {
    id: "3",
    name: "ANDA Template",
    description:
      "Generic drug ANDA submission template.",
    category: "ANDA",
    icon: "⚠️",
  },
  {
    id: "4",
    name: "DMF Template",
    description:
      "Drug Master File template for regulatory submissions.",
    category: "DMF",
    icon: "🔬",
  },
  {
    id: "5",
    name: "Protocol for Photostability",
    description:
      "Photostability study protocol template.",
    category: "Photostability",
    icon: "📄",
  },
  {
    id: "6",
    name: "Quality Assurance",
    description:
      "QA documentation and compliance template.",
    category: "Quality",
    icon: "✅",
  },
];

const MockTemplates: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Document Templates</h1>

      <div className="template-grid">
        {templates.map((template) => (
          <div key={template.id} className="template-card">
            <div className="template-icon">{template.icon}</div>

            <h3 className="template-title">{template.name}</h3>

            <p className="template-description">
              {template.description}
            </p>

            <span className="template-category">
              {template.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockTemplates;