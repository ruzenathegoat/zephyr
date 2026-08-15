import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { ArrowLeft, Search, FileText, CheckCircle2, ShieldCheck, Download, ExternalLink } from 'lucide-react';

interface DocSection {
  id: string;
  category: string;
  title: string;
  summary: string;
  specs: { label: string; value: string; unit?: string }[];
  content: string[];
}

const docSections: DocSection[] = [
  {
    id: 'z-class-architecture',
    category: '01. Platform Engineering',
    title: 'Z-Class 15 MW Direct-Drive Architecture',
    summary: 'Comprehensive electromechanical specifications for the Z-Class 15 MW offshore direct-drive platform engineered for extreme marine environments.',
    specs: [
      { label: 'Rated Power', value: '15.0', unit: 'MW' },
      { label: 'Rotor Diameter', value: '236', unit: 'Meters' },
      { label: 'Hub Height', value: '148', unit: 'Meters' },
      { label: 'Generator Type', value: 'Permanent Magnet Synchronous (PMSG)' },
      { label: 'Drive Topology', value: 'Gearless Direct-Drive' },
      { label: 'Design Lifetime', value: '35', unit: 'Years' },
      { label: 'Cut-in Wind Speed', value: '3.0', unit: 'm/s' },
      { label: 'Rated Wind Speed', value: '11.8', unit: 'm/s' },
      { label: 'Cut-out Wind Speed', value: '31.0', unit: 'm/s (High-Wind Ride-Through)' },
    ],
    content: [
      'The Zephyr Z-Class platform replaces traditional multi-stage mechanical planetary gearboxes with a low-speed, high-torque permanent magnet synchronous generator (PMSG). By eliminating over 300 rotating wear parts, the platform drastically cuts unplanned offshore service interventions and reduces levelized lifecycle expenditure.',
      'Rotor blades are aerodynamically tuned with bio-composite carbon-glass laminates and serrated trailing edge inserts, achieving an industry-leading Betz coefficient efficiency of 58.2% across offshore IEC Class 1A wind regimes.',
      'Active yaw steering and individual blade pitch controllers dynamically mitigate fatigue loads during asymmetric turbulence and extreme 100-year marine storm gusts.',
    ],
  },
  {
    id: 'grid-synchronization',
    category: '02. Telemetry & Grid Dispatch',
    title: 'Synthetic Inertia & HVDC Grid Interconnection',
    summary: 'Operating protocols, high-voltage direct current (HVDC) transmission architectures, and synthetic inertia injection parameters.',
    specs: [
      { label: 'Grid Voltage Standard', value: '±525', unit: 'kV Subsea HVDC' },
      { label: 'Frequency Regulation', value: '< 12', unit: 'ms Latency' },
      { label: 'Short-Circuit Ratio', value: '1.25 Stable at Weak Grid Nodes' },
      { label: 'Active Telemetry Nodes', value: '850+', unit: 'Sensors / Nacelle' },
      { label: 'Data Bus Protocol', value: 'IEC 61850 / Subsea Fiber' },
      { label: 'Sampling Frequency', value: '10', unit: 'kHz Continuous' },
    ],
    content: [
      'All Zephyr offshore installations feature co-located modular battery energy storage systems (BESS) integrated directly into the offshore collector substation. This architecture enables millisecond synthetic inertia injection, damping regional grid oscillations caused by sudden transmission line trips.',
      'High-speed optical SCADA edge processors continuously reconcile active and reactive power feeds against transmission system operator (TSO) dispatch targets, fully conforming to ENTSO-E Network Code Requirements for Generators (NC RfG).',
    ],
  },
  {
    id: 'governance-methodology',
    category: '03. Governance & Audit Standards',
    title: 'Compliance, Audit Trails & GHG Methodology',
    summary: 'Third-party certification standards, environmental product declarations (EPD), and empirical avoided-emissions accounting methods.',
    specs: [
      { label: 'Primary Safety Standard', value: 'DNV-ST-0145 (Offshore Substation)' },
      { label: 'Turbine Safety Standard', value: 'IEC 61400-1 / IEC 61400-22' },
      { label: 'GHG Accounting Standard', value: 'ISO 14064-2 / Scope 1—3 Verified' },
      { label: 'Circularity Baseline', value: '95.4% Recyclable BOM' },
      { label: 'Audit Cadence', value: 'Annual Third-Party Comprehensive' },
    ],
    content: [
      'Zephyr mandates open verification of all public claims. Operating fleet capacity is reconciled annually by Det Norske Veritas (DNV) against certified revenue-grade subsea metering data.',
      'Avoided carbon accounting calculates real-time displacement using regional marginal grid emission factors rather than national averages, preventing greenwashing and ensuring audit-grade ESG reporting for institutional investors.',
      'All rotor blades utilize recyclable thermoplastic matrix resins, enabling closed-loop material recovery at asset decommissioning.',
    ],
  },
  {
    id: 'marine-operations',
    category: '04. Marine Operations & O&M',
    title: 'Offshore Deployment & Preventive Maintenance Manual',
    summary: 'Deepwater foundation driving standards, DP-2 heavy lift protocols, and autonomous subsea drone inspection schedules.',
    specs: [
      { label: 'Foundation Types', value: 'Monopile, Suction Bucket, Floating Semi-Sub' },
      { label: 'Max Installation Depth', value: '110', unit: 'Meters' },
      { label: 'Scheduled Service Cycle', value: '5', unit: 'Years' },
      { label: 'Unplanned Downtime', value: '< 1.2%', unit: 'Fleet Average' },
      { label: 'Inspection Protocol', value: 'Autonomous Subsea ROV + Drone LiDAR' },
    ],
    content: [
      'Offshore marine logistics rely on specialized Dynamic Positioning (DP-2) heavy-lift jack-up vessels. Foundation monopiles are installed with vibratory driving technology and acoustic bubble curtains to safeguard marine mammals.',
      'Preventive maintenance is orchestrated via predictive SCADA vibration analytics, alerting onshore maintenance teams 90 days before bearing or converter fatigue exceeds operational safety limits.',
    ],
  },
  {
    id: 'corporate-governance',
    category: '05. Corporate Register',
    title: 'Corporate Governance & Entity Register',
    summary: 'Legal incorporation, executive engineering leadership, patents, and regional operating licensing entities.',
    specs: [
      { label: 'Legal Name', value: 'Zephyr Energy Systems AS' },
      { label: 'Registration Number', value: 'NO 921 482 104 MVA (Brønnøysund)' },
      { label: 'Headquarters', value: 'Karenslyst Allé 49, 0279 Oslo, Norway' },
      { label: 'Auditor', value: 'PricewaterhouseCoopers (PwC) Norway' },
      { label: 'Registered Patents', value: '42 Active International Patents' },
    ],
    content: [
      'Zephyr Energy Systems AS is incorporated under the laws of the Kingdom of Norway. The company operates as a specialized offshore renewable engineering holding entity with regional operating subsidiaries in Germany (Zephyr GmbH), the United States (Zephyr Offshore US LLC), and Taiwan.',
      'Governance is overseen by an independent board comprising senior marine engineering executives, grid infrastructure specialists, and energy economists.',
    ],
  },
];

interface DocumentationPageProps {
  onBackToLanding: () => void;
}

export function DocumentationPage({ onBackToLanding }: DocumentationPageProps) {
  const [selectedDocId, setSelectedDocId] = useState(docSections[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = docSections.filter((sec) =>
    sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeDoc = docSections.find((s) => s.id === selectedDocId) || docSections[0];

  return (
    <div className="min-h-screen bg-white text-black">
      
      {/* Top Documentation Header */}
      <header className="sticky top-0 z-40 border-b border-border-strong bg-white">
        <Container>
          <div className="flex h-16 items-center justify-between gap-4">
            <button
              onClick={onBackToLanding}
              className="btn-tactile flex items-center gap-2 font-mono text-[0.75rem] font-bold uppercase tracking-wider text-black hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Company Profile</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-primary" />
              <span className="font-display text-[1rem] font-bold uppercase tracking-tight text-black">
                Zephyr Technical Dossier & Documentation
              </span>
              <span className="hidden font-mono text-[0.625rem] uppercase text-text-secondary sm:inline-block">
                Rev. 2026.4
              </span>
            </div>
          </div>
        </Container>
      </header>

      <Container className="py-10 tablet:py-14 desktop:py-16">
        <div className="grid grid-cols-1 gap-10 desktop:grid-cols-12 desktop:gap-12">
          
          {/* Left Sidebar: Navigation & Search (4 cols) */}
          <aside className="desktop:col-span-4">
            
            {/* Search Input */}
            <div className="relative mb-6">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
              <input
                type="text"
                placeholder="Search technical specifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-border bg-surface-soft py-2.5 pl-10 pr-4 font-sans text-[0.8125rem] text-black placeholder:text-text-secondary focus:border-primary focus:outline-none"
              />
            </div>

            {/* Section Links */}
            <div className="border border-border-strong divide-y divide-border bg-white">
              {filteredSections.map((sec) => {
                const isActive = sec.id === activeDoc.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setSelectedDocId(sec.id)}
                    className={`btn-tactile w-full p-4 text-left transition-colors ${
                      isActive ? 'bg-black text-white' : 'hover:bg-surface-soft'
                    }`}
                  >
                    <span className={`block font-mono text-[0.5625rem] font-bold uppercase ${isActive ? 'text-primary' : 'text-text-secondary'}`}>
                      {sec.category}
                    </span>
                    <span className="mt-1 block font-display text-[0.9375rem] font-medium uppercase tracking-tight leading-snug">
                      {sec.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Dossier Download Box */}
            <div className="mt-8 border border-border bg-surface-soft p-5">
              <span className="font-mono text-[0.625rem] font-bold uppercase text-black">Official Compliance Registry</span>
              <p className="mt-1 font-sans text-[0.8125rem] text-text-secondary">
                Download verified DNV certification dossiers, EPD lifecycle reports, and subsea CAD baselines.
              </p>
              <a
                href="mailto:compliance@zephyr-energy.com?subject=Dossier%20Download%20Request"
                className="btn-tactile mt-4 inline-flex items-center gap-2 bg-primary px-4 py-2 font-sans text-[0.6875rem] font-semibold uppercase tracking-wider text-white hover:bg-primary-hover"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Request Signed PDF Dossier</span>
              </a>
            </div>
          </aside>

          {/* Right Main Content: Document Reader (8 cols) */}
          <main className="desktop:col-span-8">
            <div className="border border-border-strong bg-white p-8 tablet:p-12">
              
              {/* Document Header */}
              <div className="border-b border-border pb-6">
                <span className="font-mono text-[0.6875rem] font-bold uppercase tracking-widest text-primary">
                  {activeDoc.category}
                </span>
                <h1 className="mt-2 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium uppercase leading-[1] tracking-[-0.03em] text-black">
                  {activeDoc.title}
                </h1>
                <p className="mt-4 font-sans text-[1rem] leading-[1.65] text-text-secondary">
                  {activeDoc.summary}
                </p>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="mt-8">
                <h2 className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-black">
                  Technical Specifications Matrix
                </h2>
                <div className="mt-4 grid grid-cols-1 border border-border sm:grid-cols-2 divide-y divide-border sm:divide-y-0 sm:divide-x">
                  <div className="divide-y divide-border">
                    {activeDoc.specs.slice(0, Math.ceil(activeDoc.specs.length / 2)).map((s) => (
                      <div key={s.label} className="flex items-baseline justify-between p-3 text-[0.75rem]">
                        <span className="font-mono text-text-secondary">{s.label}</span>
                        <span className="font-mono font-bold text-black text-right">
                          {s.value} {s.unit && <span className="font-normal text-text-secondary">{s.unit}</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="divide-y divide-border">
                    {activeDoc.specs.slice(Math.ceil(activeDoc.specs.length / 2)).map((s) => (
                      <div key={s.label} className="flex items-baseline justify-between p-3 text-[0.75rem]">
                        <span className="font-mono text-text-secondary">{s.label}</span>
                        <span className="font-mono font-bold text-black text-right">
                          {s.value} {s.unit && <span className="font-normal text-text-secondary">{s.unit}</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Detailed Narrative Sections */}
              <div className="mt-10 border-t border-border pt-8 space-y-5">
                <h2 className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-black">
                  Engineering Breakdown & Empirical Basis
                </h2>
                {activeDoc.content.map((p, idx) => (
                  <p key={idx} className="font-sans text-[0.9375rem] leading-[1.75] text-text-secondary">
                    {p}
                  </p>
                ))}
              </div>

              {/* Regulatory Verification Footer */}
              <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border-strong bg-surface-soft p-4 font-mono text-[0.625rem] uppercase">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span className="font-bold text-black">Independently Audited & Certified</span>
                </div>
                <span className="text-text-secondary">DNV · IEC · ISO 14064 · ENTSO-E</span>
              </div>

            </div>
          </main>

        </div>
      </Container>
    </div>
  );
}
