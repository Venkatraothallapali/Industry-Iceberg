import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Building2, FileText, TrendingUp, Activity, Globe, ClipboardCheck } from 'lucide-react';
import MapChart from '../components/ComplisenseMapChart';
import './ComplisenseDashboard.css';

// Type definitions
interface CountryCount {
  name: string;
  count: number;
}

interface TrendData {
  year: number;
  observations: number;
  fda483s: number;
}

interface ObservationRecord {
  inspectionId: number;
  feiNumber: string;
  LegalName: string;
  companyName?: string;
  inspectionEndDate: string;
  programArea: string;
  ActCFRNumber: string;
  cfrNumber?: string;
  system: string;
  longDescription: string;
  warningLetter: {
    recordId: string;
    download: string;
    url: string;
    recordDate: string;
  };
}

interface InvestigatorType {
  name: string;
  investigator_name?: string;
  total_inspections: number;
  inspection_count?: number;
  countries_count: number;
  inspected_countries: string;
}

interface ProgramAreaCounts {
  [key: string]: number;
}

interface InspectionClassifications {
  NAI: number;
  VAI: number;
  OAI: number;
}

// Dark/Thick color palette for professional dashboards
const COLORS = [
  '#1E40AF', // Deep Blue
  '#059669', // Emerald Green
  '#7C3AED', // Deep Purple
  '#DC2626', // Deep Red
  '#D97706', // Amber
  '#0891B2', // Cyan
  '#BE185D', // Pink
  '#B45309', // Orange
  '#1E3A8A', // Navy Blue
  '#047857', // Dark Green
  '#6B21A8', // Dark Purple
  '#991B1B', // Dark Red
  '#92400E', // Dark Amber
  '#0E7490', // Dark Cyan
  '#9F1239'  // Dark Pink
];

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="complisense-tooltip-container">
        <p className="complisense-tooltip-title">
          {typeof label === 'number' ? `Year: ${label}` : label}
        </p>
        <div className="complisense-tooltip-content">
          {payload
            .sort((a: any, b: any) => (b.value || 0) - (a.value || 0))
            .map((entry: any, index: number) => (
              <div 
                key={index} 
                className="complisense-tooltip-item"
              >
                <div className="complisense-tooltip-item-left">
                  <div 
                    className="complisense-tooltip-color-dot"
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <span className="complisense-tooltip-label">
                    {entry.name}:
                  </span>
                </div>
                <span 
                  className="complisense-tooltip-value"
                  style={{ color: entry.color }}
                >
                  {entry.value ? entry.value.toLocaleString() : '0'}
                </span>
              </div>
            ))}
        </div>
      </div>
    );
  }
  return null;
};

// Simplified Country Tooltip for Map
const CountryTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="complisense-country-tooltip">
        <p className="complisense-country-tooltip-title">{label}</p>
        <p className="complisense-country-tooltip-value">
          Inspections: {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};
console.log('CountryTooltip', CountryTooltip);

// Mapping from backend field names to display names
const PROGRAM_AREA_NAME_MAPPING: { [key: string]: string } = {
  'drugs': 'Drugs',
  'food': 'Foods',
  'cosmetics': 'Cosmetics',
  'biologics': 'Biologics',
  'devices': 'Devices',
  'bioresearch_monitoring': 'Bioresearch Monitoring',
  'humantissue_for_transplantation': 'Human Tissue for Transplantation',
  'radiologic_health': 'Radiologic Health',
  'veterinary_medicine': 'Veterinary Medicine',
  'part11_compliance': 'Part 11 Compliance',
  'part1240andpart1250': 'Parts 1240 and 1250'
};
console.log('PROGRAM_AREA_NAME_MAPPING', PROGRAM_AREA_NAME_MAPPING);

// --- DUMMY DATA STORE ---
const DUMMY_DATA = {
  metrics: {
    totalObservations: 200000,
    totalCitesInspected: 130000
  },
  programAreaCounts: {
    'Drugs': 39733,
    'Foods': 149147,
    'Cosmetics': 0,
    'Biologics': 4653,
    'Devices': 4997,
    'Bioresearch Monitoring': 7361,
    'Human Tissue for Transplantation': 4540,
    'Radiologic Health': 585,
    'Veterinary Medicine': 10108,
    'Part 11 Compliance': 232,
    'Parts 1240 and 1250': 2777
  },
  inspectionClassifications: {
    NAI: 210857,
    VAI: 102812,
    OAI: 12533
  },
  countryCounts: [
    { name: 'United States', count: 25000 },
    { name: 'India', count: 12000 },
    { name: 'China', count: 8000 },
    { name: 'Germany', count: 5000 },
    { name: 'Italy', count: 4000 },
    { name: 'France', count: 3500 },
    { name: 'United Kingdom', count: 3000 },
    { name: 'Japan', count: 2500 },
    { name: 'Canada', count: 2000 },
    { name: 'Mexico', count: 1500 }
  ] as CountryCount[],
  trendData: [
    { year: 2022, observations: 2500, fda483s: 800 },
    { year: 2023, observations: 2800, fda483s: 900 },
    { year: 2024, observations: 2600, fda483s: 850 },
    { year: 2025, observations: 3000, fda483s: 1000 },
    { year: 2026, observations: 3200, fda483s: 1100 }
  ] as TrendData[],
  trendFilters: {
    systems: [
      'Facilities and Equipment System',
      'Laboratory Control System',
      'Materials System',
      'Packaging and Labeling System',
      'Production System',
      'Quality System'
    ],
    years: [
      2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 
      2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026
    ]
  },
  trendObservations: [
    {
      inspectionId: 1273712,
      feiNumber: '3001617666',
      LegalName: 'Apotex Inc.',
      inspectionEndDate: '2025-05-09T00:00:00',
      programArea: 'Drugs',
      ActCFRNumber: '21 CFR 211.42(c)(10)(vi)',
      system: 'Facilities and Equipment System',
      longDescription: 'Aseptic processing areas are deficient regarding systems for maintaining any equipment used to control the aseptic conditions.',
      warningLetter: {
        recordId: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/apotex-inc-714137-10312025',
        download: 'https://www.fda.gov/media/189935/download',
        url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/apotex-inc-714137-10312025',
        recordDate: '2025-05-09T00:00:00'
      }
    },
    {
      inspectionId: 1273712,
      feiNumber: '3001617666',
      LegalName: 'Apotex Inc.',
      inspectionEndDate: '2025-05-09T00:00:00',
      programArea: 'Drugs',
      ActCFRNumber: '21 CFR 211.67(a)',
      system: 'Facilities and Equipment System',
      longDescription: 'Equipment and utensils are not cleaned, maintained, and sanitized at appropriate intervals to prevent malfunctions and contamination that would alter the safety, identity, strength, quality, or purity of the drug product beyond the official or other established requirements.',
      warningLetter: {
        recordId: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/apotex-inc-714137-10312025',
        download: 'https://www.fda.gov/media/189935/download',
        url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/apotex-inc-714137-10312025',
        recordDate: '2025-05-09T00:00:00'
      }
    },
    {
      inspectionId: 1273713,
      feiNumber: '3003369660',
      LegalName: 'Lupin Limited',
      inspectionEndDate: '2025-05-08T00:00:00',
      programArea: 'Drugs',
      ActCFRNumber: '21 CFR 211.22(a)',
      system: 'Quality System',
      longDescription: 'There is a failure to thoroughly review any unexplained discrepancy whether or not the batch has been already distributed.',
      warningLetter: {
        recordId: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/lupin-limited-714246-10292025',
        download: 'https://www.fda.gov/media/189437/download',
        url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/lupin-limited-714246-10292025',
        recordDate: '2025-05-08T00:00:00'
      }
    },
    {
      inspectionId: 1273713,
      feiNumber: '3003369660',
      LegalName: 'Lupin Limited',
      inspectionEndDate: '2025-05-08T00:00:00',
      programArea: 'Drugs',
      ActCFRNumber: '21 CFR 211.160(b)',
      system: 'Laboratory Control System',
      longDescription: 'Laboratory controls do not include the establishment of scientifically sound and appropriate specifications, standards, sampling plans, and test procedures designed to assure that components, drug product containers, closures, in-process materials, labeling, and drug products conform to appropriate standards of identity, strength, quality, and purity.',
      warningLetter: {
        recordId: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/lupin-limited-714246-10292025',
        download: 'https://www.fda.gov/media/189437/download',
        url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/lupin-limited-714246-10292025',
        recordDate: '2025-05-08T00:00:00'
      }
    },
    {
      inspectionId: 1273714,
      feiNumber: '3002808386',
      LegalName: 'Zydus Lifesciences Limited',
      inspectionEndDate: '2025-04-25T00:00:00',
      programArea: 'Drugs',
      ActCFRNumber: '21 CFR 211.67(a)',
      system: 'Facilities and Equipment System',
      longDescription: 'Equipment and utensils are not cleaned, maintained, and sanitized at appropriate intervals to prevent malfunctions and contamination that would alter the safety, identity, strength, quality, or purity of the drug product beyond the official or other established requirements.',
      warningLetter: {
        recordId: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/zydus-lifesciences-limited-695325-10172025',
        download: 'https://www.fda.gov/media/187979/download',
        url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/zydus-lifesciences-limited-695325-10172025',
        recordDate: '2025-04-25T00:00:00'
      }
    },
    {
      inspectionId: 1273714,
      feiNumber: '3002808386',
      LegalName: 'Zydus Lifesciences Limited',
      inspectionEndDate: '2025-04-25T00:00:00',
      programArea: 'Drugs',
      ActCFRNumber: '21 CFR 211.192',
      system: 'Quality System',
      longDescription: 'There is a failure to thoroughly review any unexplained discrepancy whether or not the batch has been already distributed.',
      warningLetter: {
        recordId: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/zydus-lifesciences-limited-695325-10172025',
        download: 'https://www.fda.gov/media/187979/download',
        url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/zydus-lifesciences-limited-695325-10172025',
        recordDate: '2025-04-25T00:00:00'
      }
    },
    {
      inspectionId: 1273715,
      feiNumber: '3004018370',
      LegalName: 'Cipla Limited',
      inspectionEndDate: '2025-03-27T00:00:00',
      programArea: 'Drugs',
      ActCFRNumber: '21 CFR 211.113(b)',
      system: 'Production System',
      longDescription: 'Appropriate controls are not exercised over computer or related systems to assure that changes in master production and control records or other records are instituted only by authorized personnel.',
      warningLetter: {
        recordId: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/cipla-limited-695325-10172025',
        download: 'https://www.fda.gov/media/187978/download',
        url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/cipla-limited-695325-10172025',
        recordDate: '2025-03-27T00:00:00'
      }
    },
    {
      inspectionId: 1273715,
      feiNumber: '3004018370',
      LegalName: 'Cipla Limited',
      inspectionEndDate: '2025-03-27T00:00:00',
      programArea: 'Drugs',
      ActCFRNumber: '21 CFR 211.22(d)',
      system: 'Quality System',
      longDescription: 'The responsibilities and procedures applicable to the quality control unit are not in writing and fully followed.',
      warningLetter: {
        recordId: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/cipla-limited-695325-10172025',
        download: 'https://www.fda.gov/media/187978/download',
        url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/cipla-limited-695325-10172025',
        recordDate: '2025-03-27T00:00:00'
      }
    },
    {
      inspectionId: 1273716,
      feiNumber: '3007174665',
      LegalName: 'Alkem Laboratories Limited',
      inspectionEndDate: '2025-02-28T00:00:00',
      programArea: 'Drugs',
      ActCFRNumber: '21 CFR 211.192',
      system: 'Quality System',
      longDescription: 'There is a failure to thoroughly review any unexplained discrepancy whether or not the batch has been already distributed.',
      warningLetter: {
        recordId: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/alkem-laboratories-limited-695325-10172025',
        download: 'https://www.fda.gov/media/187980/download',
        url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/alkem-laboratories-limited-695325-10172025',
        recordDate: '2025-02-28T00:00:00'
      }
    },
    {
      inspectionId: 1273716,
      feiNumber: '3007174665',
      LegalName: 'Alkem Laboratories Limited',
      inspectionEndDate: '2025-02-28T00:00:00',
      programArea: 'Drugs',
      ActCFRNumber: '21 CFR 211.67(b)',
      system: 'Facilities and Equipment System',
      longDescription: 'Written procedures are not established and followed for cleaning and maintenance of equipment, including utensils, used in the manufacture, processing, packing or holding of a drug product.',
      warningLetter: {
        recordId: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/alkem-laboratories-limited-695325-10172025',
        download: 'https://www.fda.gov/media/187980/download',
        url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/alkem-laboratories-limited-695325-10172025',
        recordDate: '2025-02-28T00:00:00'
      }
    }
  ] as ObservationRecord[],
  investigators: {
    total: 2500,
    top: [
      { name: 'Sullan', total_inspections: 4282, countries_count: 1, inspected_countries: 'United States of America' },
      { name: 'Linda V Weyer', total_inspections: 4267, countries_count: 1, inspected_countries: 'United States of America' },
      { name: 'L Grant', total_inspections: 3633, countries_count: 2, inspected_countries: 'United States of America, Japan' },
      { name: 'Walsworth', total_inspections: 3206, countries_count: 1, inspected_countries: 'United States of America' },
      { name: 'Darrah', total_inspections: 3187, countries_count: 1, inspected_countries: 'United States of America' },
      { name: 'Pifer', total_inspections: 2300, countries_count: 1, inspected_countries: 'United States of America' },
      { name: 'Patricia A Maestas', total_inspections: 1652, countries_count: 1, inspected_countries: 'United States of America' },
      { name: 'Cathleen A Carr Sharpe', total_inspections: 1304, countries_count: 1, inspected_countries: 'United States of America' },
      { name: 'Glasgow Glasgow', total_inspections: 1233, countries_count: 1, inspected_countries: 'United States of America' },
      { name: 'Sonia E Ortiz', total_inspections: 1201, countries_count: 2, inspected_countries: 'United States of America, Costa Rica' },
      { name: 'Dennis R Downer', total_inspections: 1132, countries_count: 4, inspected_countries: 'United States of America, Italy, Taiwan, Sweden' },
      { name: 'Nianna C Burns', total_inspections: 949, countries_count: 16, inspected_countries: 'United States of America, Guam, Korea (Republic of), Ecuador, India, Panama, China, Japan, France, Brazil, Northern Mariana Islands, Taiwan, Malaysia, Germany, United Kingdom of Great Britain and Northern Ireland, Thailand' },
      { name: 'Diane T Reindl', total_inspections: 928, countries_count: 7, inspected_countries: 'United States of America, China, India, Peru, United Kingdom of Great Britain and Northern Ireland, Italy, Spain' },
      { name: 'Shererk', total_inspections: 904, countries_count: 1, inspected_countries: 'United States of America' },
      { name: 'Tania E Vizcaino', total_inspections: 886, countries_count: 16, inspected_countries: 'United States of America, China, Canada, Netherlands, Sweden, Germany, Switzerland, Costa Rica, Spain, Japan, Norway, United Kingdom of Great Britain and Northern Ireland, Italy, India, Mexico, Ireland, Denmark, Uruguay' },
      { name: 'Kathleen Chmura Shaffer', total_inspections: 871, countries_count: 2, inspected_countries: 'United States of America, Japan' },
      { name: 'Peggy A Stogner', total_inspections: 864, countries_count: 1, inspected_countries: 'United States of America' }
    ] as InvestigatorType[]
  },
  facilities: [
    {
      legal_name: 'Sun Pharmaceutical Medicare Limited [Halol / India]',
      industries: 'Human Drugs',
      tags: 'Human Drugs, API Manufacturer, Generics, FDF Manufacturer, Analytical Testing, Manufacturer, Sterile',
      last_inspection_date: '27 Feb 2024',
      fei_number: '3002957541',
      investigators: 'Christopher D Leach, Feiyan Jin, Debra I Love, Anastasia M Shields, Andrew Le, Tamil Arasu, PhD, Junho Pak, Anita Narula, PhD, Makini Cobourne Duval, PhD, Nicholas A Violand, Melkamu Getie Kebtie, PhD'
    },
    {
      legal_name: 'PHARMATHEN INTERNATIONAL S.A. [Sapes / Greece]',
      industries: 'Human Drugs',
      tags: 'Human Drugs, Generics, FDF Manufacturer, Analytical Testing, Packaging, Manufacturer, Contract Manufacture Organization, Generics Manufacturer',
      last_inspection_date: '09 Mar 2022',
      fei_number: '3009961173',
      investigators: 'Sena G Dissmeyer, Junho Pak, Mra Narulaa, Sachinkumar V Patel, Bijoy Panicker, Nicole E Knowlton, Saleem A Akhtar'
    },
    {
      legal_name: 'Delta Pharma, Inc. [Ripley / United States of America]',
      industries: 'Human Drugs',
      tags: 'Human Drugs, Contract Manufacture Organization, FDF Manufacturer, Non-Sterile, Sterile',
      last_inspection_date: '12 Apr 2024',
      fei_number: '3004034796',
      investigators: 'Zada L Giles, Jennifer Lalama, Steven D Dittert, George J Flynn, Marvin D Jones, Margaret M Annes, Lareese K Thomas, Wayne S Fortenberry, Sonya M Edmonds, Regan T Harp, Diane P Goyette, Brandon C Heitmeier'
    },
    {
      legal_name: 'UBI Pharma Inc. [Hukou Township / Taiwan]',
      industries: 'Human Drugs',
      tags: 'Human Drugs, FDF Manufacturer, Manufacturer, Analytical Testing, Packaging',
      last_inspection_date: '06 Jun 2023',
      fei_number: '3004713402',
      investigators: 'Xiaokuang Lai, PhD, Marcellinus D Dordunoo, Jose Acruz Gonzalez, David J Gomes, Kham Phommachanh, Thomas J Arista, Michele Perry Williams'
    },
    {
      legal_name: 'SCA Pharmaceuticals, Inc. [Little Rock / United States of America]',
      industries: 'Human Drugs',
      tags: 'Human Drugs, Contract Manufacture Organization',
      last_inspection_date: '17 May 2023',
      fei_number: '3010683157',
      investigators: 'Linda F Murphy, Claire M Minden, Megan T Ziegler, Zachary L Miller, Margaret M Annes, Nimmy Mathews, Lisa R Hilliar'
    },
    {
      legal_name: 'EMPOWER CLINIC SERVICES LLC [Houston / United States of America]',
      industries: 'Human Drugs, Food and Cosmetics',
      tags: 'Human Drugs, FDF Manufacturer, Sterile, Non-Sterile',
      last_inspection_date: '01 Dec 2023',
      fei_number: '3021758709',
      investigators: 'Camerson E Moore, Demario L Walls'
    },
    {
      legal_name: 'Catalent Indiana, LLC [Bloomington / United States of America]',
      industries: 'Human Drugs, Medical Devices, Biologics',
      tags: 'Human Drugs, Analytical Testing, FDF Manufacturer, Medical Devices, Biologics, Biologics: Vaccines, Packaging, Manufacturer, API Manufacturer, Contract Manufacture Organization, Label, Vaccines, Sterile, Biologics Manufacturer',
      last_inspection_date: '15 Nov 2023',
      fei_number: '3005949964',
      investigators: 'Michael Shanks, MS, Meisha Waters, Muna Algharibeh, Meisha R Sampson, Alan L Truong, Michele L Forster, PhD, Andrew J Barrowcliff, Timothy J Schmidt, Nicholas L Paulin, Eboni S Funderburk, Vaishali J Patel, Hyung Yul Lee, LCDR Sean Byrd, Robert Barbosa, Yuan Chia Kuo, Wendy G Tan, PhD, Joslyn K Brunelle, PhD, Yanming An, PhD, Diane L Raccasi, Logan T Williams, Jeffrey D Meng, Scott R Nichols, PhD, Jacob G Lutz, Sargum C Sood, Maria Cruz Fisher, Cristina Ausin Moreno, PhD, Sneha S Patel, Robert M Barbosa, James A Lane, Wayne E Seifert, Jon P Antoniou, Esther C Broner, PhD, Emilie E Kahn, Rabia Ballica, PhD, Edwin Jao, Sandra A Boyd, Charles Yuanchia Kuo, PhD, Michele Perry Williams, Rafeeq A Habeeb'
    },
    {
      legal_name: 'ProRx LLC [Exton / United States of America]',
      industries: 'Human Drugs',
      tags: '',
      last_inspection_date: '02 Aug 2024',
      fei_number: '3022250654',
      investigators: 'Karishma G Gopaul, Jazmine N Brown'
    }
  ]
} as const;

  const getDynamicTrendData = (programArea: string, system: string) => {
    // Generate deterministic dummy data based on strings
    let hash = 0;
    const str = programArea + system;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    const baseVal = Math.abs(hash) % 2000 + 1000;
    
    return [
      { year: 2022, observations: baseVal + (Math.abs(hash * 2) % 500), fda483s: baseVal - (Math.abs(hash * 3) % 400) },
      { year: 2023, observations: baseVal + (Math.abs(hash * 3) % 800), fda483s: baseVal - (Math.abs(hash * 2) % 300) },
      { year: 2024, observations: baseVal + (Math.abs(hash * 4) % 600), fda483s: baseVal - (Math.abs(hash * 5) % 200) },
      { year: 2025, observations: baseVal - (Math.abs(hash * 2) % 300), fda483s: baseVal - (Math.abs(hash * 4) % 500) },
      { year: 2026, observations: baseVal - (Math.abs(hash * 5) % 400), fda483s: baseVal - (Math.abs(hash * 3) % 600) }
    ].map(d => ({
        ...d,
        observations: Math.abs(d.observations),
        fda483s: Math.abs(d.fda483s)
    }));
  };

  const Dashboard = () => {
  const navigate = useNavigate();
  const [totalObservations, setTotalObservations] = useState<number | null>(null);
  const [totalCitesInspected, setTotalCitesInspected] = useState<number | null>(null);
  const [programAreaCounts, setProgramAreaCounts] = useState<ProgramAreaCounts | null>(null);
  const [inspectionClassifications, setInspectionClassifications] = useState<InspectionClassifications | null>(null);
  const [countrywiseCounts, setCountrywiseCounts] = useState<CountryCount[]>([]);
  const [trend483Data, setTrend483Data] = useState<TrendData[]>([]);
  const [trend483Observations, setTrend483Observations] = useState<ObservationRecord[]>([]);
  const [trend483Pagination, setTrend483Pagination] = useState({ total: 0, page: 1, page_size: 10, total_pages: 0 });
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [loadingObservations, setLoadingObservations] = useState(false);
  const [availableTrendSystems, setAvailableTrendSystems] = useState<string[]>([]);
  const [availableTrendYears, setAvailableTrendYears] = useState<number[]>([]);
  const [selectedTrendProgramArea, setSelectedTrendProgramArea] = useState('Drugs');
  
  // Facility Search State
  const [facilitySearchTerm, setFacilitySearchTerm] = useState('');
  const [facilityPage, setFacilityPage] = useState(1);
  const FACILITY_PAGE_SIZE = 10;
  const facilitySearchResults = [...DUMMY_DATA.facilities];
  const [loadingFacilitySearch] = useState(false);
  const [facilitySearchError] = useState<string | null>(null);
  const [hasSearchedFacility] = useState(false);
  const facilityDisplayList = facilitySearchResults.length > 0 
    ? facilitySearchResults.slice((facilityPage - 1) * FACILITY_PAGE_SIZE, facilityPage * FACILITY_PAGE_SIZE)
    : [];
  // Mock total records for facility search to enable pagination demo
  const MOCK_TOTAL_FACILITIES = 50;
  const [selectedTrendSystem, setSelectedTrendSystem] = useState('Production System');
  const [currentPage, setCurrentPage] = useState(1);

  // Investigator State
  const [totalInvestigators, setTotalInvestigators] = useState<number | null>(null);
  const [topInvestigators, setTopInvestigators] = useState<InvestigatorType[]>([]);
  const [investigatorSearchName, setInvestigatorSearchName] = useState<string>('');
  // const [investigatorSearchResults, setInvestigatorSearchResults] = useState<InvestigatorType[]>([]);
  const investigatorSearchResults: InvestigatorType[] = [];
  // const [loadingInvestigators, setLoadingInvestigators] = useState<boolean>(false);
  const loadingInvestigators = false;
  // const [investigatorError, setInvestigatorError] = useState<string | null>(null);
  const investigatorError = null;
  const [investigatorPage, setInvestigatorPage] = useState(1);
  const INVESTIGATOR_PAGE_SIZE = 10;

  // Fetch total investigators
  useEffect(() => {
    // const loadTotalInvestigators = async () => {
    //   try {
    //     // Use dummy data
    //     setTotalInvestigators(DUMMY_DATA.investigators.total);
    //   } catch (err) {
    //     console.error(err);
    //     // setInvestigatorError('Failed to fetch total investigators');
    //   }
    // };
    // loadTotalInvestigators();
    setTotalInvestigators(DUMMY_DATA.investigators.total);
  }, []);

  // Fetch top 10 investigators
  useEffect(() => {
    // const loadTopInvestigators = async () => {
    //   try {
    //     setTopInvestigators(DUMMY_DATA.investigators.top);
    //   } catch (err) {
    //     console.error(err);
    //     // setInvestigatorError('No investigator Found');
    //   }
    // };
    // loadTopInvestigators();
    setTopInvestigators(DUMMY_DATA.investigators.top);
  }, []);



  const fullInvestigatorList = investigatorSearchResults.length > 0 ? investigatorSearchResults : topInvestigators;
  const investigatorDisplayList = fullInvestigatorList.slice(0, INVESTIGATOR_PAGE_SIZE);
  
  // Calculate total pages - if searching, use actual results; otherwise mock based on total count
  const totalInvestigatorPages = investigatorSearchResults.length > 0 
    ? Math.ceil(investigatorSearchResults.length / INVESTIGATOR_PAGE_SIZE)
    : Math.ceil((totalInvestigators || 2500) / INVESTIGATOR_PAGE_SIZE);

  // Fetch total observations and total cites inspected from API
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoadingMetrics(true);
        // Use dummy data
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
        setTotalObservations(DUMMY_DATA.metrics.totalObservations);
        setTotalCitesInspected(DUMMY_DATA.metrics.totalCitesInspected);
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setTotalObservations(DUMMY_DATA.metrics.totalObservations);
        setTotalCitesInspected(DUMMY_DATA.metrics.totalCitesInspected);
      } finally {
        setLoadingMetrics(false);
      }
    };

    fetchMetrics();
  }, []);

  // Fetch program area counts from API
  useEffect(() => {
    const fetchProgramAreas = async () => {
      try {
        // Use dummy data
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
        setProgramAreaCounts(DUMMY_DATA.programAreaCounts);
      } catch (error) {
        console.error('Error fetching program area counts:', error);
        setProgramAreaCounts(DUMMY_DATA.programAreaCounts);
      }
    };

    fetchProgramAreas();
  }, []);

  // Fetch inspection classifications from API
  useEffect(() => {
    const fetchClassifications = async () => {
      try {
        // Use dummy data
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
        setInspectionClassifications(DUMMY_DATA.inspectionClassifications);
      } catch (error) {
        console.error('Error fetching inspection classifications:', error);
        setInspectionClassifications(DUMMY_DATA.inspectionClassifications);
      }
    };

    fetchClassifications();
  }, []);

  // Fetch country-wise counts from API
  useEffect(() => {
    const fetchCountrywise = async () => {
      try {
        // Use dummy data
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
        setCountrywiseCounts([...DUMMY_DATA.countryCounts]);
      } catch (error) {
        console.error('Error fetching country-wise counts:', error);
        setCountrywiseCounts([...DUMMY_DATA.countryCounts]);
      }
    };

    fetchCountrywise();
  }, []);

  // Fetch available filters for 483 trend (program areas, systems, years)
  useEffect(() => {
    const loadFilters = async () => {
      // Use dummy data for filters
      setAvailableTrendSystems([...DUMMY_DATA.trendFilters.systems]);
      setAvailableTrendYears([...DUMMY_DATA.trendFilters.years]);
    };

    loadFilters();
  }, []);

  // Fetch trend 483 data when filters change
  // Filters are applied in order: Program Area -> System -> Year (in backend)
  useEffect(() => {
    const fetchTrend = async () => {
      try {
        console.log('Fetching trend data with filters (applied in order: Program Area -> System):', {
          programArea: selectedTrendProgramArea,
          system: selectedTrendSystem,
          trendDirection: 'desc' // Use dummy variable to suppress unused warning
        });
        // Use dummy data
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
        setTrend483Data(getDynamicTrendData(selectedTrendProgramArea, selectedTrendSystem));
      } catch (error) {
        console.error('Error fetching trend 483 data:', error);
        setTrend483Data(getDynamicTrendData(selectedTrendProgramArea, selectedTrendSystem));
      }
    };

    fetchTrend();
  }, [selectedTrendProgramArea, selectedTrendSystem]);

  // Fetch trend 483 observations when filters or page change
  // Filters are applied in order: Program Area -> System -> Year (in backend)
  useEffect(() => {
    const fetchObservations = async () => {
      try {
        setLoadingObservations(true);
        const observationsData: ObservationRecord[] = [...DUMMY_DATA.trendObservations];
        // Fake total records to enable pagination and upsell demo
        const totalRecords = 50; 
        const pageSize = 10;
        const totalPages = Math.ceil(totalRecords / pageSize);
        const start = (currentPage - 1) * pageSize;
        const pagedData = observationsData.slice(start, start + pageSize);
        setTrend483Observations(pagedData);
        setTrend483Pagination({ total: totalRecords, page: currentPage, page_size: pageSize, total_pages: totalPages });
      } catch {
        setTrend483Observations([]);
        setTrend483Pagination({ total: 0, page: 1, page_size: 10, total_pages: 0 });
      } finally {
        setLoadingObservations(false);
      }
    };

    fetchObservations();
  }, [selectedTrendProgramArea, selectedTrendSystem, currentPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTrendProgramArea, selectedTrendSystem]);

  // Prepare program area chart data
  const programAreaData = programAreaCounts
    ? Object.entries(programAreaCounts)
        .filter(([, value]) => value > 0)
        .map(([name, value]) => ({
    name,
    value
        }))
        .sort((a, b) => b.value - a.value)
    : [];

  // Prepare inspection classification data
  const classificationData = inspectionClassifications
    ? [
        { name: 'NAI', value: inspectionClassifications.NAI || 0 },
        { name: 'VAI', value: inspectionClassifications.VAI || 0 },
        { name: 'OAI', value: inspectionClassifications.OAI || 0 }
      ]
    : [];

  // Prepare country data
  const countryData = countrywiseCounts || [];

  // Program Area + System + Year-wise 483/Observation data
  // Prefer backend-provided years; fall back to 2022–2026 if not available
  const DEFAULT_TREND_YEARS = [2022, 2023, 2024, 2025, 2026];
  const TREND_YEARS = availableTrendYears.length > 0 ? availableTrendYears : DEFAULT_TREND_YEARS;
  
  // Systems for trend filters – prefer backend-provided list
  const ALL_AVAILABLE_SYSTEMS_FALLBACK = [
    'Facilities and Equipment System',
    'Laboratory Control System',
    'Materials System',
    'Packaging and Labeling System',
    'Production System',
    'Quality System'
  ];

  const allSystems = availableTrendSystems.length > 0
    ? availableTrendSystems
    : ALL_AVAILABLE_SYSTEMS_FALLBACK;

  // Use trend data from API
  const trendChartData = trend483Data.length > 0 
    ? trend483Data 
    : TREND_YEARS.map(year => ({ year, observations: 0, fda483s: 0 }));

  // Use observations from API
  // Use trend483Observations directly - it's already an array from the API
  const mappedObservationRows = Array.isArray(trend483Observations) ? trend483Observations : [];

  // Facility Search Handler
  const handleFacilitySearch = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/complisense/request-demo');
  };

  // Show mock pagination for the initial view to encourage signup
  const totalFacilityPages = !hasSearchedFacility
    ? Math.ceil(MOCK_TOTAL_FACILITIES / FACILITY_PAGE_SIZE)
    : Math.ceil(facilitySearchResults.length / FACILITY_PAGE_SIZE);

  const handleInvestigatorSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/complisense/request-demo');
  };

  return (
    <div className="complisense-dashboard">
      {/* CompliSense Branding - Between Navbar and Content */}
      <div className="complisense-dashboard-header">
        <div className="complisense-branding-container">
          <span className="complisense-branding-title">
            CompliSense
          </span>
          <p className="complisense-branding-subtitle">cGMP Intelligence Platform</p>
        </div>
      </div>

      <div className="complisense-dashboard-content">
      <div className="complisense-dashboard-container complisense-max-w-7xl complisense-mx-auto complisense-px-4 complisense-sm-px-6 complisense-lg-px-8">
        {/* Header */}
        <div className="complisense-header-section">
          <div className="complisense-header-accent">
            <div className="complisense-header-line"></div>
            <div>
              <h1 className="complisense-header-title">FDA 483 Observations Trends</h1>
              <p className="complisense-header-subtitle">Comprehensive analysis of GMP inspection data (2007-2025)</p>
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="complisense-metrics-grid">
          <div className="complisense-metric-card">
            <div className="complisense-metric-card-inner">
              <div className="complisense-metric-header">
                <FileText className="w-8 h-8 text-blue-700" />
                <div className="complisense-metric-badge">
                  <span className="complisense-metric-badge-text">Total</span>
                </div>
              </div>
              <p className="complisense-metric-label">Total Observations</p>
              <p className="complisense-metric-value">
                {loadingMetrics ? (
                  <span className="complisense-loading-pulse">Loading...</span>
                ) : (
                  (totalObservations ?? 0).toLocaleString() + '+'
                )}
              </p>
              <div className="complisense-metric-meta">
                <span>📊</span>
                <span>From 2007 to 2025</span>
              </div>
            </div>
          </div>

          <div className="complisense-metric-card complisense-metric-card-teal">
            <div className="complisense-metric-card-inner">
              <div className="complisense-metric-header">
                <Building2 className="w-8 h-8 text-teal-700" />
                <div className="complisense-metric-badge">
                  <span className="complisense-metric-badge-text">Unique</span>
                </div>
              </div>
              <p className="complisense-metric-label">Total Sites/Facilities Inspected</p>
              <p className="complisense-metric-value">
                {loadingMetrics ? (
                  <span className="complisense-loading-pulse">Loading...</span>
                ) : (
                  (totalCitesInspected ?? 0).toLocaleString() + '+'
                )}
              </p>
              <div className="complisense-metric-meta">
                <span>🏢</span>
                <span>Unique facilities</span>
              </div>
            </div>
          </div>
        </div>

        <div className="complisense-charts-grid">
          {/* Program Area Distribution */}
          <div className="complisense-chart-card">
            <div className="complisense-chart-header">
              <div className="complisense-chart-title-group">
                <div className="complisense-chart-icon-container">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="complisense-chart-title">Observations by Program Area</h2>
                  <p className="complisense-chart-subtitle">Distribution across different regulatory areas</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="complisense-chart-container">
                <ResponsiveContainer width="100%" height={250} minWidth={300} aspect={1.2}>
                  <BarChart data={programAreaData} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="name" 
                      angle={-45} 
                      textAnchor="end" 
                      height={80}
                      tick={{ fill: '#6b7280', fontSize: 10 }}
                      interval={0}
                    />
                    <YAxis 
                      tick={{ fill: '#6b7280', fontSize: 10 }}
                      domain={[0, 'dataMax']}
                      allowDataOverflow={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]} strokeWidth={0}>
                      {programAreaData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* NAI/OAI/VAI Pharma Count */}
          <div className="complisense-chart-card">
            <div className="complisense-chart-header">
              <div className="complisense-chart-title-group">
                <div className="complisense-chart-icon-container complisense-chart-icon-container-purple">
                  <ClipboardCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="complisense-chart-title">Inspection Classifications</h2>
                  <p className="complisense-chart-subtitle">NAI, OAI, VAI counts for pharmaceutical inspections</p>
                </div>
              </div>
            </div>
            <div className="complisense-flex complisense-flex-col complisense-items-center">
              <div className="complisense-chart-container w-full h-[250px]">
                <ResponsiveContainer width="100%" height={250} minWidth={300} minHeight={250} aspect={1.2}>
                  <PieChart>
                    <Pie
                      data={classificationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent, value }) => `${name} ${((percent || 0) * 100).toFixed(0)}% (${(value || 0).toLocaleString()})`}
                      outerRadius={80}
                      innerRadius={35}
                      fill="#8884d8"
                      dataKey="value"
                      stroke="#fff"
                      strokeWidth={2}
                    >
                      {classificationData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <div className="complisense-legend-item">
                  <div className="complisense-legend-dot complisense-legend-nai"></div>
                  <span className="complisense-legend-text">NAI - No Action Indicated</span>
                </div>
                <div className="complisense-legend-item">
                  <div className="complisense-legend-dot complisense-legend-oai"></div>
                  <span className="complisense-legend-text">OAI - Official Action Indicated</span>
                </div>
                <div className="complisense-legend-item">
                  <div className="complisense-legend-dot complisense-legend-vai"></div>
                  <span className="complisense-legend-text">VAI - Voluntary Action Indicated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="complisense-grid complisense-grid-cols-1 complisense-lg-grid-cols-2 complisense-gap-3 complisense-mb-10">
          {/* Country-wise Observation Count */}
          <div className="country-wise-observations-card h-full">
            <div className="complisense-flex complisense-items-center complisense-justify-between complisense-mb-6">
              <div className="complisense-flex complisense-items-center complisense-space-x-3">
                <div className="complisense-w-10 complisense-h-10 complisense-bg-gradient-to-br complisense-from-green-400 complisense-to-green-500 complisense-rounded-xl complisense-flex complisense-items-center complisense-justify-center complisense-shadow-lg">
                  <Globe className="complisense-w-5 complisense-h-5 complisense-text-white complisense-flex complisense-items-center complisense-justify-center" />
                </div>
                <div>
                  <h2 className="complisense-text-xl complisense-font-bold complisense-text-gray-900">Country-wise Observations</h2>
                  <p className="complisense-text-gray-500 complisense-text-xs complisense-mt-1">Hover over dots on the map to see observation counts</p>
                </div>
              </div>
            </div>
            <div className="complisense-w-full complisense-h-full complisense-min-h-350">
              <MapChart countryData={countryData} colors={COLORS} />
            </div>
          </div>

          {/* Program Area / System Year-wise 483 Trend (2022-2026) */}
          <div className="complisense-trend-section">
            <div className="complisense-mb-6">
              <div className="complisense-trend-header">
                <div className="complisense-trend-title-container">
                  <div className="complisense-trend-icon">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="complisense-trend-title">483 Trend Analysis</h2>
                    <p className="complisense-trend-subtitle">
                      Select filters to view observations trend (2022-2026)
                    </p>
                  </div>
                </div>
              </div>
              {/* Filters below subtitle */}
              <div className="complisense-trend-filters">
                <select
                  value={selectedTrendProgramArea}
                  onChange={(e) => setSelectedTrendProgramArea(e.target.value)}
                  className="complisense-trend-select"
                >
                  {programAreaData.map((area) => (
                    <option key={area.name} value={area.name}>{area.name}</option>
                  ))}
                </select>
                <select
                  value={selectedTrendSystem}
                  onChange={(e) => setSelectedTrendSystem(e.target.value)}
                  className="complisense-trend-select"
                >
                  {allSystems.map((system) => (
                    <option key={system} value={system}>{system}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="complisense-trend-chart-container">
              <div className="complisense-trend-chart-container-specific">
                <ResponsiveContainer className="complisense-trend-responsive-container" aspect={1.2} height={350}>
                  <LineChart
                    data={trendChartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="year"
                      tick={{ fill: '#6b7280', fontSize: 10 }}
                      tickFormatter={(v) => v}
                    />
                    <YAxis 
                      tick={{ fill: '#6b7280', fontSize: 10 }}
                      domain={[0, 'dataMax']}
                      tickFormatter={(value) => value.toLocaleString()}
                    />
                    <Tooltip 
                      content={<CustomTooltip />} 
                      cursor={{ stroke: '#9CA3AF', strokeWidth: 1, strokeDasharray: '3 3' }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="observations"
                      name="Observations"
                      stroke={COLORS[0]}
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5, strokeWidth: 0 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="fda483s"
                      name="483's Issued"
                      stroke={COLORS[1]}
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5, strokeWidth: 0 }}
                      strokeDasharray="4 4"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Observations & 483 Warning Letters Mapped by FEI */}
        <div className="complisense-observations-section">
          <div className="complisense-observations-header">
            <div className="complisense-observations-title-container">
              <div className="complisense-observations-icon">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="complisense-observations-title">
                  Observations &amp; 483's,Warningletters (FEI Mapping)
                </h2>
                <p className="complisense-observations-subtitle">
                  Showing observations and their mapped 483 warning letters for the selected program area, system, and year (from the backend database).
                </p>
              </div>
            </div>
              </div>

          <div className="complisense-observations-table-container">
            <table className="complisense-observations-table">
              <thead>
                <tr>
                  <th className="fei-number">FEI Number</th>
                  <th className="legal-name">Legal Name</th>
                  <th className="inspection-date">Inspection End Date</th>
                  <th className="cfr-number">Act/CFR Number</th>
                  <th className="system">System</th>
                  <th className="description">Long Description</th>
                  <th className="fda-483s">483's</th>
                  <th className="warning-letters">Warning letters</th>
                </tr>
              </thead>
              <tbody>
                {loadingObservations && (
                  <tr>
                    <td colSpan={8} className="loading-cell">Loading...</td>
                  </tr>
                )}
                {!loadingObservations && mappedObservationRows.length === 0 && (
                  <tr>
                    <td colSpan={8} className="no-results-cell">No records found for the selected combination. Try a different year, program area, or system.</td>
                  </tr>
                )}
                {!loadingObservations && mappedObservationRows.map((row, index) => (
                  <tr key={`${row.inspectionId || row.feiNumber}-${index}`} className="hover:bg-blue-50/40 transition-colors">
                    <td className="fei-cell">{row.feiNumber || '—'}</td>
                    <td className="data-cell">{row.companyName || row.LegalName || '—'}</td>
                    <td className="data-cell">
                      {row.inspectionEndDate
                        ? new Date(row.inspectionEndDate).toLocaleDateString()
                        : '—'}
                    </td>
                    <td className="data-cell">{row.cfrNumber || row.ActCFRNumber || '—'}</td>
                    <td className="data-cell">{row.system || '—'}</td>
                    <td className="description-cell">
                      <div className="whitespace-normal">{row.longDescription || '—'}</div>
                    </td>
                    <td className="data-cell">
                      {row.warningLetter?.download ? (
                         <a
                          href={row.warningLetter.download}
                          target="_blank"
                          rel="noreferrer"
                          className="warning-link"
                        >
                          View
                        </a>
                     ) : (
                       '—'
                     )}
                   </td>
                   <td className="data-cell">
                      {row.warningLetter?.url ? (
                        <a
                          href={row.warningLetter.url}
                          target="_blank"
                          rel="noreferrer"
                          className="warning-link"
                        >
                          View
                        </a>
                       ) : (
                         row.warningLetter?.recordId || '—'
                       )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            {trend483Pagination.total_pages > 1 && (
              <div className="complisense-observations-pagination">
                <div className="complisense-observations-pagination-buttons">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1 || loadingObservations}
                    className={`complisense-observations-pagination-button ${
                      currentPage === 1 || loadingObservations
                        ? 'disabled'
                        : ''
                    }`}
                  >
                    Previous
                  </button>
                  
                  {/* Pagination count removed */}
                  
                  <button
                    onClick={() => {
                      // Any page navigation beyond page 1 redirects to demo request
                      navigate('/complisense/request-demo');
                    }}
                    disabled={currentPage === trend483Pagination.total_pages || loadingObservations}
                    className={`complisense-observations-pagination-button ${
                      currentPage === trend483Pagination.total_pages || loadingObservations
                        ? 'disabled'
                        : ''
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
        </div>



        </div>

        {/* Investigator Details Section */}
        <div className="complisense-investigator-section">
            <h1 className="complisense-investigator-title">Investigator Details</h1>

            <form onSubmit={handleInvestigatorSearch} className="complisense-investigator-form">
                <input
                type="text"
                value={investigatorSearchName}
                onChange={(e) => setInvestigatorSearchName(e.target.value)}
                placeholder="Search investigator by name"
                className="complisense-investigator-search-input"
                />
                <button
                type="submit"
                className="complisense-investigator-search-button"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1669a5')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1e82c9')}>
                Search
                </button>
            </form>

            {investigatorError && (
                <div className="complisense-investigator-error">{investigatorError}</div>
            )}

            <table className="complisense-investigator-table">
              <thead>
                <tr>
                    <th className="complisense-investigator-name">Investigator Name</th>
                    <th className="complisense-investigator-inspected-sites">Number of Inspected Sites</th>
                    <th className="complisense-investigator-countries-count">Countries Count</th>
                    <th className="complisense-investigator-countries-of-inspections">Countries of Inspections</th>
                </tr>
              </thead>
              <tbody>
                {investigatorDisplayList.length === 0 && (
                    <tr>
                    <td colSpan={4} className="complisense-investigator-loading-cell">
                        {loadingInvestigators ? 'Loading...' : 'No data available'}
                    </td>
                    </tr>
                )}
                {investigatorDisplayList.map((inv, index) => (
                    <tr key={`${inv.investigator_name || inv.name}-${index}`} className="complisense-investigator-border-b hover:bg-gray-50">
                    <td className="complisense-investigator-name-cell">{inv.investigator_name || inv.name}</td>
                    <td className="complisense-investigator-data-cell">{inv.total_inspections || inv.inspection_count}</td>
                    <td className="complisense-investigator-data-cell">{inv.countries_count}</td>
                    <td className="complisense-investigator-data-cell">{inv.inspected_countries}</td>
                    </tr>
                ))}
              </tbody>
            </table>

            {/* Investigator Pagination */}
            {totalInvestigatorPages > 1 && (
              <div className="complisense-investigator-pagination">
                <div className="complisense-investigator-pagination-buttons">
                  <button
                    onClick={() => setInvestigatorPage(prev => Math.max(1, prev - 1))}
                    disabled={investigatorPage === 1}
                    className={`complisense-investigator-pagination-button ${
                      investigatorPage === 1 ? 'disabled' : ''
                    }`}
                  >
                    Previous
                  </button>
                  
                  {/* Pagination count removed */}
                  
                  <button
                    onClick={() => {
                      // Any page navigation beyond page 1 redirects to demo request
                      navigate('/complisense/request-demo');
                    }}
                    className="complisense-investigator-pagination-button"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
        </div>



        {/* Facility Search Section */}
        <div className="facility-search-container">
            <h1 className="facility-search-title">FEI Search</h1>
            <p className="facility-search-subtitle">
                Search for facilities by FEI Number or Legal Name to view detailed information including inspections and investigators.
            </p>

            <form onSubmit={handleFacilitySearch} className="facility-search-form">
                <input
                type="text"
                value={facilitySearchTerm}
                onChange={(e) => setFacilitySearchTerm(e.target.value)}
                placeholder="Enter FEI Number or Site Name"
                className="facility-search-input"
                />
                <button
                type="submit"
                className="facility-search-button"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1669a5')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1e82c9')}>
                Search
                </button>
            </form>

            {facilitySearchError && (
                <div className="facility-search-error">{facilitySearchError}</div>
            )}

            {(hasSearchedFacility || facilitySearchResults.length > 0) && (
                <div className="facility-results-table">
                    <table className="w-full table-fixed divide-y divide-gray-200">
                        <thead className="bg-blue-100">
                        <tr>
                            <th className="company-name">Company Name</th>
                            <th className="industries">Industries</th>
                            <th className="tags">Tags</th>
                            <th className="last-inspection">Last Inspection Date</th>
                            <th className="fei">FEI</th>
                            <th className="investigators">Investigators</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {loadingFacilitySearch ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-4 text-center">Loading...</td>
                            </tr>
                        ) : facilitySearchResults.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">No facilities found matching your search.</td>
                            </tr>
                        ) : (
                            facilityDisplayList.map((facility, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 whitespace-normal break-words text-sm font-medium text-gray-900">{facility.legal_name}</td>
                                    <td className="px-4 py-4 whitespace-normal break-words text-sm text-gray-500">{facility.industries}</td>
                                    <td className="px-4 py-4 whitespace-normal break-words text-sm text-gray-500">{facility.tags}</td>
                                    <td className="px-4 py-4 whitespace-normal break-words text-sm text-gray-500">{facility.last_inspection_date}</td>
                                    <td className="px-4 py-4 whitespace-normal break-words text-sm text-gray-500">{facility.fei_number}</td>
                                    <td className="px-4 py-4 whitespace-normal break-words text-sm text-gray-500">
                                      {facility.investigators
                                        ? facility.investigators
                                            .split(',')
                                            .map(name => name.trim())
                                            .filter((name, index, self) => name && self.indexOf(name) === index)
                                            .slice(0, 3)
                                            .join(', ')
                                        : ''}
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>

                    {/* Facility Pagination */}
                    {totalFacilityPages > 1 && (
                      <div className="facility-pagination">
                        <div className="facility-pagination-buttons">
                          <button
                            onClick={() => setFacilityPage(prev => Math.max(1, prev - 1))}
                            disabled={facilityPage === 1}
                            className={`facility-pagination-button ${
                              facilityPage === 1
                                ? 'disabled'
                                : ''
                            }`}
                          >
                            Previous
                          </button>
                          
                          {/* Pagination count removed */}
                          
                          <button
                            onClick={() => {
                              // Any page navigation beyond page 1 redirects to demo request
                              navigate('/complisense/request-demo');
                            }}
                            className="facility-pagination-button"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
                </div>
            )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
