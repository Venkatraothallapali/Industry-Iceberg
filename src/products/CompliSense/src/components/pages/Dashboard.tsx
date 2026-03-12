import { useEffect, useState } from "react";
import "./Dashboard.css";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Building2,
  FileText,
  TrendingUp,
  Activity,
  Globe,
  ClipboardCheck,
} from "lucide-react";

import MapChart from "../MapChart";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<any>({
    programAreas: [],
    classifications: { NAI: 0, VAI: 0, OAI: 0 },
    countries: [],
    trends: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const mockData = {
        programAreas: [
          { name: "Drugs", total: 45000 },
          { name: "Devices", total: 38000 },
          { name: "Biologics", total: 12000 },
          { name: "Food", total: 28000 },
          { name: "Cosmetics", total: 8000 },
          { name: "Veterinary", total: 6000 },
        ],

        classifications: {
          NAI: 45000,
          VAI: 35000,
          OAI: 15000,
        },

        countries: [
          { name: "United States", count: 120000 },
          { name: "India", count: 45000 },
          { name: "China", count: 35000 },
          { name: "Germany", count: 18000 },
          { name: "Japan", count: 15000 },
        ],

        trends: [
          { year: 2019, observations: 22000 },
          { year: 2020, observations: 24000 },
          { year: 2021, observations: 28000 },
          { year: 2022, observations: 32000 },
          { year: 2023, observations: 35000 },
          { year: 2024, observations: 38000 },
        ],
      };

      setData(mockData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  const classificationData = [
    { name: "NAI", value: data.classifications.NAI, color: "#059669" },
    { name: "VAI", value: data.classifications.VAI, color: "#D97706" },
    { name: "OAI", value: data.classifications.OAI, color: "#DC2626" },
  ];

  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dashboard-header">
        <div className="container">
          <h1 className="dashboard-title">CompliSense Dashboard</h1>
          <p className="dashboard-subtitle">
            FDA 483 Observations Analysis & Insights
          </p>
        </div>
      </div>

      {/* METRICS */}
      <div className="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-card blue">
              <FileText size={24} />
              <div>
                <div className="metric-number">261,811+</div>
                <div className="metric-label">Total Observations</div>
              </div>
            </div>

            <div className="metric-card green">
              <Building2 size={24} />
              <div>
                <div className="metric-number">6</div>
                <div className="metric-label">Program Areas</div>
              </div>
            </div>

            <div className="metric-card purple">
              <Globe size={24} />
              <div>
                <div className="metric-number">100+</div>
                <div className="metric-label">Countries</div>
              </div>
            </div>

            <div className="metric-card red">
              <TrendingUp size={24} />
              <div>
                <div className="metric-number">18%</div>
                <div className="metric-label">Annual Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHARTS */}
      <div className="charts-section">
        <div className="container">

          <div className="charts-grid">

            <div className="chart-container">
              <h3>Observations by Program Area</h3>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data.programAreas}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" fill="#1E40AF" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-container">
              <h3>Inspection Classifications</h3>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={classificationData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                  >
                    {classificationData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-container full-width">
            <h3>Observation Trends (2019-2024)</h3>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.trends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line
                  type="monotone"
                  dataKey="observations"
                  stroke="#1E40AF"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-container full-width">
            <h3>Global Distribution</h3>

            <MapChart
              countryData={data.countries}
              colors={["#1E40AF", "#10B981", "#8B5CF6", "#EF4444"]}
            />
          </div>

        </div>
      </div>

      {/* ACTIVITY */}
      <div className="activity-section">
        <div className="container">

          <h2 className="section-title">Recent Activity</h2>

          <div className="activity-grid">

            <div className="activity-item">
              <ClipboardCheck size={20} />

              <div>
                <div className="activity-title">
                  New FDA 483 Observations
                </div>

                <div className="activity-description">
                  245 new observations added this week
                </div>

                <div className="activity-time">2 hours ago</div>
              </div>
            </div>

            <div className="activity-item">
              <Activity size={20} />

              <div>
                <div className="activity-title">
                  Trend Analysis Updated
                </div>

                <div className="activity-description">
                  Q4 2024 compliance trends analyzed
                </div>

                <div className="activity-time">1 day ago</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;