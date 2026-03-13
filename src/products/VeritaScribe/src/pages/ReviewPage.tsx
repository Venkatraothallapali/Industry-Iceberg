import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import { useDemo } from '../context/DemoContext';
import { DataSource } from '../data/mockTemplates';
import favicon from '../assets/favicon.png';
import './ReviewPage.css';

const ReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { state, setDataSource, updateDataSourceField } = useDemo();
  const [localDataSource, setLocalDataSource] = useState<DataSource[]>([]);

  const selectedTemplate = state.selectedTemplate;
  
  // Initialize data source from context or create defaults based on template placeholders
  useLayoutEffect(() => {
    if (state.dataSource.length > 0) {
      setLocalDataSource(state.dataSource);
    } else if (selectedTemplate && selectedTemplate.placeholders.length > 0) {
      const defaultData = selectedTemplate.placeholders.map(placeholder => ({
        fieldName: placeholder,
        value: ''
      }));
      setLocalDataSource(defaultData);
      setDataSource(defaultData);
    } else {
      const fallbackData = [
        { fieldName: 'PRODUCT_NAME', value: '' },
        { fieldName: 'STRENGTH', value: '' },
        { fieldName: 'STORAGE_CONDITION', value: '' },
      ];
      setLocalDataSource(fallbackData);
      setDataSource(fallbackData);
    }
  }, [selectedTemplate, state.dataSource, setDataSource]);

  const getIconClass = (type: string) => {
    const classes: Record<string, string> = {
      'IND': 'ind',
      'NDA': 'nda', 
      'ANDA': 'anda',
      'DMF': 'dmf',
      'Photostability': 'photostability',
    };
    return classes[type] || 'ind';
  };

  const handleValueChange = (index: number, value: string) => {
    const updated = [...localDataSource];
    updated[index] = { ...updated[index], value };
    setLocalDataSource(updated);
    if (updated[index].fieldName) {
      updateDataSourceField(updated[index].fieldName, value);
    }
  };

  const handleFillDocument = () => {
    navigate('/veritascribe/demo');
  };

  return (
    <div className="review-page">
      {/* Navigation */}
      <nav className="review-nav">
        <div className="review-nav-container">
          <div 
            className="review-nav-brand"
            onClick={() => navigate('/')}
          >
            <img
              src={favicon}
              alt="VeritaScribe"
              className="review-nav-logo"
            />
            <span className="review-nav-title">VeritaScribe</span>
          </div>
        </div>
      </nav>

      <div className="review-content-wrapper">
        <h1 className="review-title">Review Your Selection</h1>

        <div className="review-grid">
          {/* Selected Template Section */}
          <div className="review-card">
            <div className="review-card-header">
              <FaCheckCircle className="review-card-icon" />
              <h2 className="review-card-title">Selected Template</h2>
            </div>
            {selectedTemplate ? (
              <div className="template-display">
                <div className={`template-icon-large ${getIconClass(selectedTemplate.type)}`}>
                  <FaFileAlt />
                </div>
                <h3 className="template-name-large">{selectedTemplate.name}</h3>
                <div className="template-type-badge">
                  {selectedTemplate.type}
                </div>
                <div className="template-preview">
                  <p className="template-preview-text">
                    {selectedTemplate.content.substring(0, 150)}...
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">No template selected</p>
            )}
          </div>

          {/* Data Source Section */}
          <div className="review-card">
            <div className="review-card-header">
              <FaCheckCircle className="review-card-icon" />
              <h2 className="review-card-title">Data Source</h2>
            </div>
            <div className="data-source-form">
              {localDataSource.map((item, index) => (
                <div key={index} className="form-group">
                  <label className="form-label">
                    {item.fieldName.replace(/_/g, ' ')}
                  </label>
                  <input
                    type="text"
                    value={item.value}
                    onChange={(e) => handleValueChange(index, e.target.value)}
                    className="form-input"
                    placeholder={`Enter ${item.fieldName.replace(/_/g, ' ').toLowerCase()}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fill Document Button */}
        <div className="review-actions">
          <button
            onClick={handleFillDocument}
            className="review-fill-btn"
          >
            Fill Document
            <FaFileAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;

