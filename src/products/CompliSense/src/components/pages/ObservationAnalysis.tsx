import { useState } from "react";
import {
  Search,
  FileText,
  TrendingUp,
  Download,
  Filter,
  CheckCircle,
  AlertCircle,
  Shield,
} from "lucide-react";

import "./ObservationAnalysis.css";

const ObservationAnalysis = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProgramArea, setSelectedProgramArea] = useState("");
  const [selectedSystem, setSelectedSystem] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const PROGRAM_AREAS = [
    "Drugs",
    "Food",
    "Cosmetics",
    "Biologics",
    "Medical Devices",
    "Veterinary",
    "Tobacco",
  ];

  const SYSTEMS = [
    "Production System",
    "Quality System",
    "Material System",
    "Packaging and Labelling System",
    "Laboratory Control System",
    "Facilities & Equipment System",
  ];

  const YEARS = [2024, 2023, 2022, 2021, 2020, 2019];

  const mockObservations = [
    {
      id: 1,
      observation:
        "Failure to establish and follow adequate written procedures",
      programArea: "Drugs",
      system: "Quality System",
      year: 2024,
      classification: "VAI",
      company: "Pharma Corp",
      location: "New York, NY",
    },
    {
      id: 2,
      observation: "Equipment not adequately cleaned or maintained",
      programArea: "Medical Devices",
      system: "Production System",
      year: 2024,
      classification: "NAI",
      company: "MedTech Inc",
      location: "California, CA",
    },
  ];

  return (
    <div className="analysis-page">
      <div className="analysis-header">
        <h1 className="analysis-title">Observation Analysis</h1>
        <p className="analysis-subtitle">
          Search and analyze FDA 483 observations across all program areas
        </p>
      </div>

      <div className="analysis-container">

        {/* Filters */}

        <div className="analysis-filters">

          <div className="search-container">
            <Search className="icon-sm" />
            <input
              type="text"
              className="search-input"
              placeholder="Search observations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-grid">

            <div className="filter-group">
              <label>Program Area</label>
              <select
                value={selectedProgramArea}
                onChange={(e) => setSelectedProgramArea(e.target.value)}
              >
                <option value="">All Areas</option>
                {PROGRAM_AREAS.map((area) => (
                  <option key={area}>{area}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>System</label>
              <select
                value={selectedSystem}
                onChange={(e) => setSelectedSystem(e.target.value)}
              >
                <option value="">All Systems</option>
                {SYSTEMS.map((system) => (
                  <option key={system}>{system}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="">All Years</option>
                {YEARS.map((year) => (
                  <option key={year}>{year}</option>
                ))}
              </select>
            </div>

            <button className="filter-btn">
              <Filter className="icon-sm" />
              Apply Filters
            </button>

          </div>
        </div>

        {/* Results */}

        <div className="analysis-results">

          <div className="results-header">
            <h2>Search Results</h2>

            <button className="export-btn">
              <Download className="icon-sm" />
              Export Results
            </button>
          </div>

          <div className="observations-list">

            {mockObservations.map((obs) => (
              <div key={obs.id} className="observation-card">

                <div className="observation-header">

                  <div className="observation-title">
                    <FileText className="icon-md" />
                    <h3>{obs.observation}</h3>
                  </div>

                  <span
                    className={`classification-badge ${obs.classification.toLowerCase()}`}
                  >
                    {obs.classification}
                  </span>

                </div>

                <div className="observation-details">
                  <div>Program Area: {obs.programArea}</div>
                  <div>System: {obs.system}</div>
                  <div>Company: {obs.company}</div>
                  <div>Location: {obs.location}</div>
                  <div>Year: {obs.year}</div>
                </div>

                <div className="observation-actions">

                  <button className="action-btn">
                    <TrendingUp className="icon-sm" />
                    View Trend
                  </button>

                  <button className="action-btn">
                    <FileText className="icon-sm" />
                    Full Details
                  </button>

                </div>
              </div>
            ))}

          </div>

          {mockObservations.length === 0 && (
            <div className="no-results">
              <AlertCircle className="icon-xl" />
              <h3>No observations found</h3>
              <p>Try adjusting filters</p>
            </div>
          )}

        </div>

        {/* Stats */}

        <div className="analysis-stats">

          <h2>Analysis Statistics</h2>

          <div className="stats-grid">

            <div className="stat-card">
              <FileText className="icon-lg" />
              <div>
                <div className="stat-number">261,811</div>
                <div>Total Observations</div>
              </div>
            </div>

            <div className="stat-card">
              <Shield className="icon-lg" />
              <div>
                <div className="stat-number">45%</div>
                <div>NAI Classification</div>
              </div>
            </div>

            <div className="stat-card">
              <CheckCircle className="icon-lg" />
              <div>
                <div className="stat-number">35%</div>
                <div>VAI Classification</div>
              </div>
            </div>

            <div className="stat-card">
              <AlertCircle className="icon-lg" />
              <div>
                <div className="stat-number">20%</div>
                <div>OAI Classification</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ObservationAnalysis;