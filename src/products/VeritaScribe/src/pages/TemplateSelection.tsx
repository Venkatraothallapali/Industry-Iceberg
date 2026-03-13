import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaFileAlt } from 'react-icons/fa';
import { useDemo } from '../context/DemoContext';
import { templates, Template } from '../data/mockTemplates';
import favicon from '../assets/favicon.png';
import './TemplateSelection.css';

const TemplateSelection: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedTemplate } = useDemo();
  const [selected, setSelected] = useState<Template | null>(null);

  // Debug: Check if templates are loading
  console.log('TemplateSelection component mounted');
  console.log('Available templates:', templates.length);
  console.log('Templates data:', templates);

  // Reset selected template when component mounts (navigating back to template page)
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useLayoutEffect(() => {
    setSelected(null);
    setSelectedTemplate(null);
}, []);

  const handleSelect = (template: Template) => {
    setSelected(template);
    setSelectedTemplate(template);
  };

  const handleContinue = () => {
    if (selected) {
      navigate('/veritascribe/demo');
    }
  };

  // 🔥 Color class based on Template NAME (not category)
  const getIconClass = (name: string) => {
    const classes: Record<string, string> = {
      'Protocol for Photostability': 'photostability',
      'IND Application Template': 'ind',
      'NDA Template': 'nda',
      'ANDA Template': 'anda',
      'DMF Template': 'dmf',
    };

    return classes[name] || 'ind';
  };

  return (
    <div className="template-selection-page">

      
      {/* Navigation */}
      <nav className="template-nav">
        <div className="template-nav-container">
          <div 
            className="template-nav-brand"
            onClick={() => navigate('/veritascribe')}
          >
            <img
              src={favicon}
              alt="VeritaScribe"
              className="template-nav-logo"
            />
            <span className="template-nav-title">VeritaScribe</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="template-content-wrapper">
        <div className="template-header">
          <h1 className="template-title">Select Template</h1>
          <p className="template-subtitle">
            Choose a standardized regulatory document template
          </p>
        </div>

        {/* Template Grid */}
        <div className="template-grid">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => handleSelect(template)}
              className={`template-card ${
                selected?.id === template.id ? 'selected' : ''
              }`}
            >
              <div className={`template-icon ${getIconClass(template.name)}`}>
                <FaFileAlt />
              </div>

              <h3 className="template-name">{template.name}</h3>
              {template.name === 'Protocol for Photostability' && (
                <div className="template-category">Photostability</div>
              )}
              {template.name === 'IND Application Template' && (
                <div className="template-category">IND</div>
              )}
              {template.name === 'NDA Template' && (
                <div className="template-category">NDA</div>
              )}
              {template.name === 'ANDA Template' && (
                <div className="template-category">ANDA</div>
              )}
              {template.name === 'DMF Template' && (
                <div className="template-category">DMF</div>
              )}
            </div>
          ))}
        </div>

        {/* Preview Section */}
        {selected && (
          <div className="template-preview">
            <h2 className="preview-title">template preview</h2>
            <div className="preview-content">
              <pre className="preview-text">
                {selected.content.split('\n').map((line, idx) => {
                  const hasPlaceholder = selected.placeholders.some(p => line.includes(`[${p}]`));
                  return (
                    <div
                      key={idx}
                      className={hasPlaceholder ? 'placeholder-line' : ''}
                    >
                      {line}
                    </div>
                  );
                })}
              </pre>
            </div>
            <div className="preview-legend">
              <span className="legend-indicator"></span>
              <span>
                Yellow highlights indicate placeholders to be filled
              </span>
            </div>
          </div>
        )}

        {/* Continue Button */}
        <div className="template-actions">
          <button
            onClick={handleContinue}
            disabled={!selected}
            className={`template-continue-btn ${
              selected ? 'enabled' : 'disabled'
            }`}
          >
            Continue
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;