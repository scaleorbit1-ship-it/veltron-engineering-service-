import React, { useState, useEffect, useRef } from 'react';
import { CustomRepairInput } from './components/CustomRepairInput';

// SVG placeholder generator for missing image files
const getSvgPlaceholder = (title: string) => {
  const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#0b1a2e"/>
    <rect x="20" y="20" width="760" height="560" fill="none" stroke="#1d588f" stroke-width="2" stroke-dasharray="8 8" rx="12"/>
    <g transform="translate(400, 240)" text-anchor="middle">
      <rect x="-40" y="-40" width="80" height="80" rx="16" fill="#1d588f" />
      <circle cx="0" cy="0" r="24" fill="none" stroke="#38bdf8" stroke-width="4"/>
      <path d="M-12,0 L12,0 M0,-12 L0,12" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
    </g>
    <text x="400" y="350" font-family="'Archivo', sans-serif" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">${title.toUpperCase()}</text>
    <text x="400" y="380" font-family="'Archivo', sans-serif" font-size="13" font-weight="600" fill="#38bdf8" text-anchor="middle" letter-spacing="0.06em">VELTRON ENGINEERING SERVICE LIMITED — 100% MOBILE FIELD DISPATCH</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgStr)}`;
};

const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>, label: string) => {
  const target = e.currentTarget;
  target.onerror = null; // Prevent infinite loops
  target.src = getSvgPlaceholder(label);
};

import processImg2 from './assets/images/regenerated_image_1786487064372.webp';
import heroBg1 from './assets/images/hero-bg-1.webp';
import heroBg2 from './assets/images/hero-bg-2.webp';
import aboutImg1 from './assets/images/user_headshot_woman.jpg';
import aboutImg2 from './assets/images/user_headshot_man.jpg';
import turbineOverhaulImg from './assets/images/turbine_overhaul.png';
import processInspectionImg from './assets/images/process_inspection.png';
import processTestingImg from './assets/images/process_testing.png';
import brakeRepairImg from './assets/images/brake_system_repair.png';
import dieselWorkbenchImg from './assets/images/diesel_fuel_overhaul_workbench.png';
import hydraulicRepairImg from './assets/images/hydraulic_cylinder_repair.png';
import mechanicalGearboxImg from './assets/images/mechanical_gearbox_overhaul.png';
import pneumaticManifoldImg from './assets/images/pneumatic_valve_manifold.png';
import veltronLogo from './assets/images/veltron-logo.svg';
import veltronLogoLight from './assets/images/veltron-logo-light.svg';
import { 
  Settings, 
  Droplets, 
  Disc, 
  Fuel, 
  Wind, 
  Wrench, 
  Zap, 
  Clock, 
  Award, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Menu, 
  X, 
  ArrowRight, 
  ArrowDownRight,
  Truck,
  PhoneCall,
  MessageCircle,
  Users,
  UserCheck
} from 'lucide-react';

const featuredCapabilities = [
  {
    cat: 'On-Site Brake Repair',
    loc: 'Cheshire Client Site',
    type: '100% Mobile Service',
    name: 'Mobile On-Site Brake System Repair & Removal',
    desc: 'Our field engineers travel directly to your plant for precision caliper re-sealing, friction disc replacement, and pneumatic brake actuator overhaul.',
    bgImage: heroBg1
  },
  {
    cat: 'On-Site Hydraulic Overhaul',
    loc: 'Manchester Plant Facility',
    type: '100% Mobile Service',
    name: 'On-Site Hydraulic Cylinder & Pump Overhaul',
    desc: 'Mobile field dispatch with full teardown, seal renewal, valve body re-machining, and high-pressure testing performed directly at your facility.',
    bgImage: heroBg2
  },
  {
    cat: 'On-Site Fuel Servicing',
    loc: 'Lancashire Industrial Site',
    type: '100% Mobile Service',
    name: 'Mobile Diesel Fuel Injection & Rail Servicing',
    desc: 'We come to your site for injector calibration, fuel rail diagnostics, filter renewal, and high-pressure pump overhaul.',
    bgImage: heroBg1
  },
  {
    cat: 'On-Site Pneumatic Repair',
    loc: 'Altrincham Manufacturing Hub',
    type: '100% Mobile Service',
    name: 'On-Site Pneumatic Control Valve & Air Line Repair',
    desc: 'Field response team dispatches directly to your location for solenoid manifold overhaul, compressor servicing, and pressure regulator calibration.',
    bgImage: heroBg2
  },
  {
    cat: 'On-Site Mechanical Overhaul',
    loc: 'Cheshire Heavy Facility',
    type: '100% Mobile Service',
    name: 'Mobile Gearbox & Drive Shaft Removal & Overhaul',
    desc: 'On-site shaft alignment, bearing replacement, gear tooth re-machining, and complete machinery drive overhaul without transporting equipment off-site.',
    bgImage: heroBg1
  }
];

const mainServices = [
  {
    num: '01',
    ttl: 'Mechanical Systems',
    short: '100% Mobile on-site repair, removal, overhaul, and servicing of heavy mechanical equipment.',
    desc: 'We have no physical customer shop — when you call, our engineers come directly to your site. We specialise in the on-site repair, removal, overhaul, and servicing of mechanical systems including heavy industrial gearboxes, drive shafts, turbine rotors, couplings, and machinery power trains.',
    image: mechanicalGearboxImg,
    alt: 'Mobile on-site mechanical system repair and heavy gearbox overhaul'
  },
  {
    num: '02',
    ttl: 'Hydraulic Systems',
    short: '100% Mobile on-site repair, removal, overhaul, and servicing of high-pressure hydraulic plant.',
    desc: 'Our certified field engineers dispatch directly to your facility. We specialise in the on-site repair, removal, overhaul, and servicing of hydraulic systems. From high-pressure cylinder re-sealing and hydraulic pump rebuilding to valve manifold troubleshooting and hose replacement.',
    image: hydraulicRepairImg,
    alt: 'Mobile hydraulic system cylinder and pump overhaul'
  },
  {
    num: '03',
    ttl: 'Brake Systems',
    short: '100% Mobile on-site repair, removal, overhaul, and servicing of heavy industrial brake systems.',
    desc: 'No need to haul heavy equipment to a shop. We travel directly to your location for the repair, removal, overhaul, and servicing of brake systems for heavy machinery and industrial equipment, including pneumatic air brake actuators, hydraulic brake calipers, and retarders.',
    image: brakeRepairImg,
    alt: 'Mobile heavy industrial brake caliper and brake system repair'
  },
  {
    num: '04',
    ttl: 'Fuel Systems',
    short: '100% Mobile on-site repair, removal, overhaul, and servicing of diesel & industrial fuel systems.',
    desc: 'Our mobile field units come directly to your plant for the repair, removal, overhaul, and servicing of fuel systems. Handling diesel fuel injection pumps, common rail fuel systems, fuel filtration, injectors, and fuel tank line removal.',
    image: dieselWorkbenchImg,
    alt: 'Mobile industrial engine fuel system injection pump servicing'
  },
  {
    num: '05',
    ttl: 'Pneumatic Systems',
    short: '100% Mobile on-site repair, removal, overhaul, and servicing of automated air pressure systems.',
    desc: 'When your pneumatic line breaks down, we dispatch field specialists to your facility. We specialise in the on-site repair, removal, overhaul, and servicing of pneumatic systems, covering air compressors, control valves, solenoid manifolds, and air line maintenance.',
    image: pneumaticManifoldImg,
    alt: 'Mobile pneumatic system control valve manifold servicing'
  }
];

const engineeringShowcase = [
  {
    category: 'Brake',
    action: 'Repair & Overhaul',
    tags: ['Brake', 'Repair', 'Overhaul', 'Removal', 'Servicing'],
    title: 'Heavy Plant Pneumatic & Hydraulic Brake System Repair',
    location: 'Cheshire Facility Site',
    desc: 'Complete removal, caliper pad replacement, piston re-sealing, and high-pressure air & oil bench testing for heavy plant machinery brakes.',
    image: brakeRepairImg
  },
  {
    category: 'Hydraulic',
    action: 'Overhaul & Servicing',
    tags: ['Hydraulic', 'Overhaul', 'Servicing', 'Repair', 'Removal'],
    title: 'High-Pressure Hydraulic Cylinder & Pump Restoration',
    location: 'Manchester Industrial Hub',
    desc: 'Teardown, rod re-chroming, seal kit replacement, valve manifold overhaul, and dynamic pressure testing up to 350 bar.',
    image: hydraulicRepairImg
  },
  {
    category: 'Fuel',
    action: 'Servicing & Repair',
    tags: ['Fuel', 'Servicing', 'Repair', 'Removal', 'Overhaul'],
    title: 'Diesel Fuel Injection Pump & Common Rail Servicing',
    location: 'Altrincham Engineering Works',
    desc: 'High-precision fuel pump calibration, injector ultrasonic cleaning, pressure regulation, and fuel filter line removal & replacement.',
    image: dieselWorkbenchImg
  },
  {
    category: 'Pneumatic',
    action: 'Removal & Overhaul',
    tags: ['Pneumatic', 'Removal', 'Overhaul', 'Repair', 'Servicing'],
    title: 'Pneumatic Control Valve & Air Compressor System Overhaul',
    location: 'Lancashire Production Plant',
    desc: 'Solenoid manifold overhaul, pneumatic actuator seal renewal, compressor filter servicing, and air line safe removal.',
    image: pneumaticManifoldImg
  },
  {
    category: 'Mechanical',
    action: 'Repair & Servicing',
    tags: ['Mechanical', 'Repair', 'Servicing', 'Removal', 'Overhaul'],
    title: 'Heavy Duty Mechanical Drive Train & Gearbox Overhaul',
    location: 'Cheshire Industrial Site',
    desc: 'Bearing renewal, gear train precision laser alignment, vibration analysis, drive shaft removal, and comprehensive bench servicing.',
    image: mechanicalGearboxImg
  },
  {
    category: 'Mechanical',
    action: 'Removal & Overhaul',
    tags: ['Mechanical', 'Removal', 'Overhaul', 'Repair', 'Servicing'],
    title: 'Mobile On-Site Industrial Turbine & Heavy Shaft Overhaul',
    location: 'Ellesmere Port Plant',
    desc: 'Certified mobile field engineers dispatch directly to plant site for rigged extraction, shaft balancing, and complete component overhaul.',
    image: turbineOverhaulImg
  }
];

export default function App() {
  const [capIndex, setCapIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [activeNav, setActiveNav] = useState('#home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showcaseFilter, setShowcaseFilter] = useState('All');

  // Mobile Sliders State & Refs
  const valuesRef = useRef<HTMLDivElement>(null);
  const [valuesSlide, setValuesSlide] = useState(0);

  const whyRef = useRef<HTMLDivElement>(null);
  const [whySlide, setWhySlide] = useState(0);

  const handleValuesScroll = () => {
    if (valuesRef.current) {
      const { scrollLeft, clientWidth } = valuesRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.78));
      setValuesSlide(Math.min(Math.max(index, 0), 3));
    }
  };

  const handleWhyScroll = () => {
    if (whyRef.current) {
      const { scrollLeft, clientWidth } = whyRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.78));
      setWhySlide(Math.min(Math.max(index, 0), 5));
    }
  };

  const scrollToSlide = (ref: { current: HTMLDivElement | null }, index: number) => {
    if (ref.current) {
      const cardWidth = ref.current.clientWidth * 0.82;
      ref.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Calculator State
  const [serviceType, setServiceType] = useState('Repair');
  const [urgency, setUrgency] = useState('Scheduled');
  const [equipmentType, setEquipmentType] = useState('Heavy Machinery');

  // Form State
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [siteLocation, setSiteLocation] = useState('Mansion House, Manchester Road, Altrincham, Cheshire, England, WA14 4RW');
  const [customRepairText, setCustomRepairText] = useState('Mechanical Systems (Drive Train, Gearbox, Turbine & Heavy Shaft Overhaul)');

  useEffect(() => {
    // Preload hero background images for instant rendering and smooth slide switching
    [heroBg1, heroBg2].forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // Re-trigger observer for newly filtered showcase items
    const els = document.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [showcaseFilter]);

  const handlePrevCap = () => {
    setCapIndex((prev) => (prev - 1 + featuredCapabilities.length) % featuredCapabilities.length);
  };

  const handleNextCap = () => {
    setCapIndex((prev) => (prev + 1) % featuredCapabilities.length);
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  const currentCap = featuredCapabilities[capIndex];
  const activeImageIdx = openAccordion !== null ? openAccordion : 0;

  const handleNavClick = (hash: string) => {
    setActiveNav(hash);
    setMobileMenuOpen(false);
  };

  const filteredShowcase = showcaseFilter === 'All'
    ? engineeringShowcase
    : engineeringShowcase.filter((item) => {
        const q = showcaseFilter.toLowerCase();
        return (
          item.category.toLowerCase().includes(q) ||
          item.action.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase() === q) ||
          item.title.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q)
        );
      });

  const getEstimatedTimeline = () => {
    if (urgency === 'Emergency') return '24 - 48 Hours Rapid Dispatch & On-Site Repair';
    if (serviceType === 'Overhaul') return '3 - 7 Working Days (On-Site Component Disassembly & Complete Overhaul)';
    if (serviceType === 'Removal') return '1 - 2 Working Days (Certified Safe On-Site Removal & Tag-out)';
    if (serviceType === 'Repair') return '1 - 3 Working Days (On-Site Fault Isolation & Component Repair)';
    return '1 - 2 Working Days (Routine On-Site Preventive Servicing & Diagnostics)';
  };

  return (
    <div className="frame">
      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-head">
          <div className="logo-container">
            <img src={veltronLogoLight} alt="Veltron Engineering Service Limited" className="logo-img" />
          </div>
          <button
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="mobile-drawer-links">
          <a
            href="#home"
            className={activeNav === '#home' ? 'active' : ''}
            onClick={() => handleNavClick('#home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeNav === '#about' ? 'active' : ''}
            onClick={() => handleNavClick('#about')}
          >
            About Us
          </a>
          <a
            href="#services"
            className={activeNav === '#services' ? 'active' : ''}
            onClick={() => handleNavClick('#services')}
          >
            Services
          </a>
          <a
            href="#process"
            className={activeNav === '#process' ? 'active' : ''}
            onClick={() => handleNavClick('#process')}
          >
            Our Process
          </a>
          <a
            href="#showcase"
            className={activeNav === '#showcase' ? 'active' : ''}
            onClick={() => handleNavClick('#showcase')}
          >
            Showcase
          </a>
          <a
            href="#why"
            className={activeNav === '#why' ? 'active' : ''}
            onClick={() => handleNavClick('#why')}
          >
            Why Choose Us
          </a>
          <a
            href="#contact"
            className="btn-accent"
            style={{ width: 'fit-content', marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            onClick={() => handleNavClick('#contact')}
          >
            Request Service <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* FLOATING NAVBAR */}
      <nav className="nav">
        <div className="logo-container">
          <a href="#home" onClick={() => handleNavClick('#home')} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img src={veltronLogo} alt="Veltron Engineering Service Limited" className="logo-img" />
          </a>
        </div>
        <div className="nav-links">
          <a
            href="#home"
            className={activeNav === '#home' ? 'active' : ''}
            onClick={() => handleNavClick('#home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeNav === '#about' ? 'active' : ''}
            onClick={() => handleNavClick('#about')}
          >
            About
          </a>
          <a
            href="#services"
            className={activeNav === '#services' ? 'active' : ''}
            onClick={() => handleNavClick('#services')}
          >
            Services
          </a>
          <a
            href="#process"
            className={activeNav === '#process' ? 'active' : ''}
            onClick={() => handleNavClick('#process')}
          >
            Process
          </a>
          <a
            href="#showcase"
            className={activeNav === '#showcase' ? 'active' : ''}
            onClick={() => handleNavClick('#showcase')}
          >
            Showcase
          </a>
          <a
            href="#why"
            className={activeNav === '#why' ? 'active' : ''}
            onClick={() => handleNavClick('#why')}
          >
            Why Us
          </a>
          <a href="#contact" className="btn-dark">
            Contact Us
          </a>
        </div>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          MENU <Menu className="w-5 h-5" />
        </button>
      </nav>

      {/* HERO SECTION */}
      <header className="hero" id="home">
        <img
          key={currentCap.bgImage}
          className="hero-bg"
          src={currentCap.bgImage}
          alt={`Veltron Engineering - ${currentCap.name}`}
          loading="eager"
          decoding="sync"
          onError={(e) => handleImgError(e, currentCap.name)}
        />
        <div className="hero-overlay"></div>
        <div className="hero-copy">
          <span className="motto-badge">100% Mobile On-Site Service • Veltron Engineering Service Limited</span>
          <h1>
            Precision Engineering.<br />Delivered On-Site.
          </h1>
          <p>
            When you call, we deliver. We dispatch certified engineers directly to your facility for heavy industrial system repairs, removal, and complete overhauls. 
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-dark">
              Request On-Site Dispatch <span className="ar">↘</span>
            </a>
            <a href="#services" className="btn-accent">
              Explore On-Site Services <span className="ar">→</span>
            </a>
          </div>
        </div>

        {/* HERO FEATURE CARD */}
        <aside className="hero-card">
          <div className="hc-top">
            <div className="hc-meta">
              <span>{currentCap.cat}</span>
              <span>{currentCap.loc}</span>
            </div>
            <h3>{currentCap.name}</h3>
            <p className="hc-desc">{currentCap.desc}</p>
          </div>
          <div className="hc-bottom">
            <span className="idx">
              0{capIndex + 1} / 0{featuredCapabilities.length}
            </span>
            <div className="hc-arrows">
              <button
                className={capIndex === 0 ? 'dim' : ''}
                aria-label="Previous capability"
                onClick={handlePrevCap}
              >
                ←
              </button>
              <button
                aria-label="Next capability"
                onClick={handleNextCap}
              >
                →
              </button>
            </div>
          </div>
        </aside>
      </header>

      {/* ABOUT SECTION */}
      <section className="story" id="about">
        <span className="label">About Veltron Engineering Services</span>
        <p className="story-text reveal hidden md:block">
          At <strong>Veltron Engineering Service Limited</strong>, we operate as a <strong>100% mobile on-site field engineering service</strong> with no customer walk-in shop. When client machinery breaks down or requires routine maintenance, our certified field engineers travel directly to your plant, facility, or job site. Driven by our motto <strong>"Quality That Counts"</strong>, we provide rapid on-site troubleshooting, machinery removal, complete overhauls, and preventive servicing for:
        </p>
        <p className="story-text reveal block md:hidden">
          <strong>100% mobile field engineering service</strong> — no walk-in shop needed. When machinery breaks down, certified field engineers travel directly to your site for rapid troubleshooting, removal, and complete overhauls.
        </p>

        {/* 5 CORE SPECIALIZED SYSTEMS TAGS */}
        <div className="specialized-tags reveal">
          <div className="specialized-tag-item">
            <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0" /> <span>Mechanical Systems</span>
          </div>
          <div className="specialized-tag-item">
            <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0" /> <span>Hydraulic Systems</span>
          </div>
          <div className="specialized-tag-item">
            <Disc className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0" /> <span>Brake Systems</span>
          </div>
          <div className="specialized-tag-item">
            <Fuel className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0" /> <span>Fuel Systems</span>
          </div>
          <div className="specialized-tag-item">
            <Wind className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0" /> <span>Pneumatic Systems</span>
          </div>
        </div>

        {/* ABOUT FEATURE IMAGES SHOWCASE GRID */}
        <div className="about-images-grid reveal">
          <div className="about-banner-container">
            <img
              src={aboutImg1}
              alt="Veltron Engineering Human Resources & Workforce Management"
              onError={(e) => handleImgError(e, 'Human Resources & Operations')}
            />
            <div className="about-banner-overlay">
              <span className="about-banner-tag">
                <Users className="w-4 h-4 text-sky-400" /> Human Resources & Operations Support
              </span>
            </div>
          </div>
          <div className="about-banner-container">
            <img
              src={aboutImg2}
              alt="Veltron Engineering On-Site Lead Field Engineer Running Operations"
              onError={(e) => handleImgError(e, 'Lead Field Engineer')}
            />
            <div className="about-banner-overlay">
              <span className="about-banner-tag">
                <UserCheck className="w-4 h-4 text-sky-400" /> Lead Field Engineer — Task & Operations Lead
              </span>
            </div>
          </div>
        </div>

        {/* CORE VALUES - MOBILE SLIDER & DESKTOP GRID */}
        <div>
          <div
            className="values-grid reveal"
            ref={valuesRef}
            onScroll={handleValuesScroll}
          >
            <div className="value-card">
              <h4>Mobile On-Site Dispatch</h4>
              <p>No shop drop-off required. We come directly to your plant, dock, or site equipped with diagnostic tools and rigging equipment.</p>
            </div>
            <div className="value-card">
              <h4>Zero Transport Downtime</h4>
              <p>Save massive transport costs and downtime by having our technical team perform repairs directly on your equipment.</p>
            </div>
            <div className="value-card">
              <h4>Certified Field Engineers</h4>
              <p>Skilled technical specialists experienced in heavy industrial machinery, high-pressure hydraulics, and drive systems.</p>
            </div>
            <div className="value-card">
              <h4>Quality That Counts</h4>
              <p>Every on-site repair and overhaul strictly complies with international technical tolerances and quality standards.</p>
            </div>
          </div>
          {/* Mobile Slide Pagination Dots */}
          <div className="mobile-slider-dots md:hidden">
            {[0, 1, 2, 3].map((idx) => (
              <button
                key={idx}
                className={`dot ${valuesSlide === idx ? 'active' : ''}`}
                onClick={() => scrollToSlide(valuesRef, idx)}
                aria-label={`Go to value slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="expertise" id="services">
        <div className="exp-left">
          <span className="label" style={{ color: '#93c5fd' }}>Our Mobile Field Services</span>
          <h2>
            Mobile On-Site Industrial<br />Engineering Solutions
          </h2>
          <div className="acc" id="acc">
            {mainServices.map((item, idx) => (
              <div
                key={item.num}
                className={`acc-item ${openAccordion === idx ? 'open' : ''}`}
              >
                <button
                  className="acc-head"
                  onClick={() => toggleAccordion(idx)}
                >
                  <span className="num">{item.num}</span>
                  <span className="ttl">{item.ttl}</span>
                  <span className="ico">+</span>
                </button>
                <div className="acc-body">
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="exp-right">
          {mainServices.map((item, idx) => (
            <img
              key={item.num}
              src={item.image}
              alt={item.alt}
              onError={(e) => handleImgError(e, item.ttl)}
              style={{
                opacity: activeImageIdx === idx ? 1 : 0,
                transform: activeImageIdx === idx ? 'scale(1)' : 'scale(1.04)',
                pointerEvents: activeImageIdx === idx ? 'auto' : 'none'
              }}
            />
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process" id="process">
        <div className="process-thumbs reveal">
          <img
            className="th"
            src={processInspectionImg}
            alt="On-site inspection & diagnosis"
            onError={(e) => handleImgError(e, 'Inspection & Diagnosis')}
            loading="lazy"
            decoding="async"
          />
          <img
            className="th ci"
            src={processImg2}
            alt="On-site mechanical overhaul"
            onError={(e) => handleImgError(e, 'On-Site Overhaul')}
            loading="lazy"
            decoding="async"
          />
          <img
            className="th ro"
            src={processTestingImg}
            alt="On-site quality testing"
            onError={(e) => handleImgError(e, 'Quality Testing')}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="steps reveal">
          <span className="label">Mobile Field Workflow</span>
          <h2 style={{ fontSize: 'clamp(28px,3.2vw,42px)', fontWeight: 700, color: '#0b1a2e', marginBottom: '20px' }}>
            How Our Mobile Service Works
          </h2>
          <div className="step">
            <span className="step-label">Step 01</span>
            <div>
              <h4>1. Call & Mobile Dispatch</h4>
              <p className="hidden md:block">When you call our technical desk, our certified field engineers dispatch directly to your plant or facility location.</p>
              <p className="block md:hidden">Call our desk for direct field engineer dispatch to your site.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-label">Step 02</span>
            <div>
              <h4>2. On-Site Inspection & Diagnosis</h4>
              <p className="hidden md:block">Root cause failure analysis, wear tolerance measurement, and diagnostic troubleshooting performed right on your equipment.</p>
              <p className="block md:hidden">Root cause analysis and wear measurement performed right on your machinery.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-label">Step 03</span>
            <div>
              <h4>3. On-Site Repair & Overhaul</h4>
              <p className="hidden md:block">Precision component replacement, safe system removal, seal renewal, gear balancing, and mechanical overhaul on-site.</p>
              <p className="block md:hidden">Component replacement, seal renewal, and overhauls conducted on-site.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-label">Step 04</span>
            <div>
              <h4>4. On-Site Testing</h4>
              <p className="hidden md:block">Rigorous pressure, thermal, vibration, and dynamic load testing conducted on-site to verify complete operational integrity.</p>
              <p className="block md:hidden">Pressure, thermal, and dynamic load testing conducted on-site.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-label">Step 05</span>
            <div>
              <h4>5. On-Site Re-Commissioning</h4>
              <p className="hidden md:block">System sign-off, technical report handover, and immediate production line restart with preventive maintenance guidance.</p>
              <p className="block md:hidden">System sign-off and immediate production restart.</p>
            </div>
          </div>
          <a href="#contact" className="btn-dark">
            Request Field Engineer Dispatch <span className="ar">↘</span>
          </a>
        </div>
      </section>

      {/* WHY CHOOSE VELTRON */}
      <section className="why-section" id="why">
        <span className="label">The Veltron Advantage</span>
        <h2 style={{ fontSize: 'clamp(28px,3.2vw,44px)', fontWeight: 700, color: '#0b1a2e' }}>
          Why Clients Trust Our Mobile Service
        </h2>

        {/* WHY GRID - MOBILE SLIDER & DESKTOP GRID */}
        <div>
          <div
            className="why-grid reveal"
            ref={whyRef}
            onScroll={handleWhyScroll}
          >
            <div className="why-card">
              <span className="icon"><Truck className="w-8 h-8 text-sky-800" /></span>
              <h4>100% Mobile Field Service</h4>
              <p>No customer shop needed. When you call, our fully equipped mobile service units travel directly to your site.</p>
            </div>
            <div className="why-card">
              <span className="icon"><PhoneCall className="w-8 h-8 text-sky-800" /></span>
              <h4>Rapid Response On Call</h4>
              <p>Direct technical desk hotline for fast dispatch when unexpected breakdowns threaten production schedules.</p>
            </div>
            <div className="why-card">
              <span className="icon"><Clock className="w-8 h-8 text-sky-800" /></span>
              <h4>Minimal Plant Downtime</h4>
              <p>Performing repairs directly on your site eliminates machinery transport delays and gets equipment running faster.</p>
            </div>
            <div className="why-card">
              <span className="icon"><Wrench className="w-8 h-8 text-sky-800" /></span>
              <h4>On-Site Heavy Overhaul</h4>
              <p>Certified field engineers equipped for heavy disassembly, hydraulic re-sealing, gearbox overhaul, and valve alignment.</p>
            </div>
            <div className="why-card">
              <span className="icon"><Award className="w-8 h-8 text-sky-800" /></span>
              <h4>Turnkey On-Site Service</h4>
              <p>From initial emergency call to final on-site re-commissioning, we manage the complete repair lifecycle at your location.</p>
            </div>
            <div className="why-card">
              <span className="icon"><ShieldCheck className="w-8 h-8 text-sky-800" /></span>
              <h4>Quality That Counts</h4>
              <p>Our commitment to engineering excellence means dependable on-site performance you can measure and rely on.</p>
            </div>
          </div>
          {/* Mobile Slide Pagination Dots */}
          <div className="mobile-slider-dots md:hidden">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <button
                key={idx}
                className={`dot ${whySlide === idx ? 'active' : ''}`}
                onClick={() => scrollToSlide(whyRef, idx)}
                aria-label={`Go to why slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* WHY FEATURE IMAGE BANNER */}
        <div className="why-banner-container reveal">
          <img
            src={hydraulicRepairImg}
            alt="Veltron Field Service Engineers on-site at industrial machinery plant"
            onError={(e) => handleImgError(e, 'On-Site Mobile Dispatch')}
            loading="lazy"
            decoding="async"
          />
          <div className="why-banner-overlay">
            <div className="why-banner-content">
              <h3>100% Mobile On-Site Service — We Come Directly To You</h3>
              <p>
                <CheckCircle2 className="w-5 h-5 text-sky-400" /> Certified Field Engineers Dispatched Directly to Your Plant or Facility Upon Call
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING SHOWCASE SECTION */}
      <section className="works" id="showcase">
        <div className="works-head reveal">
          <div>
            <span className="label">Capabilities In Action</span>
            <h2>Engineering Showcase</h2>
          </div>
          <a href="#contact" className="btn-dark">
            Inquire About Your Project <span className="ar">↘</span>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs reveal">
          {['All', 'Mechanical', 'Hydraulic', 'Brake', 'Fuel', 'Pneumatic', 'Repair', 'Removal', 'Overhaul', 'Servicing'].map((tab) => (
            <button
              key={tab}
              className={`filter-tab ${showcaseFilter === tab ? 'active' : ''}`}
              onClick={() => setShowcaseFilter(tab)}
            >
              {tab === 'All' ? 'All Capabilities' : tab}
            </button>
          ))}
        </div>

        <div className="works-grid">
          {filteredShowcase.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', padding: '48px 24px', textAlign: 'center', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
              <p style={{ color: '#0b1a2e', fontSize: '16px', fontWeight: 600 }}>No engineering showcase projects found matching "{showcaseFilter}".</p>
              <button className="btn-dark" style={{ marginTop: '16px' }} onClick={() => setShowcaseFilter('All')}>
                View All Capabilities
              </button>
            </div>
          ) : (
            filteredShowcase.map((item, idx) => (
              <article key={item.title} className={`work ${idx % 2 === 1 ? 'dark' : ''} reveal in`}>
                <div className="work-info">
                  <div className="work-meta">
                    <span className="category-badge">{item.category} • {item.action}</span>
                    <span className="location-tag">{item.location}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="work-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => handleImgError(e, item.title)}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      {/* INTERACTIVE QUOTE & TIMELINE ESTIMATOR */}
      <section className="quote-estimator">
        <div className="quote-container reveal">
          <div className="quote-info">
            <span className="label" style={{ color: '#93c5fd' }}>Mobile Dispatch Estimator</span>
            <h2>Estimate Your On-Site Response Timeline</h2>
            <p className="hidden md:block">
              We bring our mobile engineering unit straight to your location. Select your system category and service requirements below to view an estimated on-site response roadmap, or submit a custom request for immediate technical dispatch.
            </p>
            <p className="block md:hidden">
              Select your system category below to view an estimated timeline for direct on-site field dispatch.
            </p>
            <div className="tech-desk-card">
              <div className="cd-icon">
                <CheckCircle2 className="w-5 h-5 text-sky-400" />
              </div>
              <div className="cd-text">
                <div className="lbl">Direct Field Dispatch Desk</div>
                <div className="val">samuelugwulebo@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="quote-box">
            <h3>Mobile Service Configuration</h3>
            <div className="form-group" style={{ marginBottom: '16px' }}>
              <label htmlFor="estService" style={{ color: '#cbd5e1' }}>On-Site Service Operation</label>
              <select
                id="estService"
                className="est-select"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
              >
                <option value="Repair">On-Site Emergency Repair</option>
                <option value="Removal">Safe On-Site System Removal</option>
                <option value="Overhaul">On-Site Component Overhaul</option>
                <option value="Servicing">On-Site Preventive Servicing & Diagnostics</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: '16px' }}>
              <label htmlFor="estEq" style={{ color: '#cbd5e1' }}>Specialised System Category</label>
              <select
                id="estEq"
                className="est-select"
                value={equipmentType}
                onChange={(e) => setEquipmentType(e.target.value)}
              >
                <option value="Mechanical Systems">Mechanical Systems (Gearboxes, Drives, Turbines)</option>
                <option value="Hydraulic Systems">Hydraulic Systems (Cylinders, Pumps, Valves)</option>
                <option value="Brake Systems">Brake Systems (Pneumatic & Hydraulic Calipers)</option>
                <option value="Fuel Systems">Fuel Systems (Diesel Pumps, Rails & Injectors)</option>
                <option value="Pneumatic Systems">Pneumatic Systems (Compressors, Solenoid Valves)</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: '16px' }}>
              <label htmlFor="estUrg" style={{ color: '#cbd5e1' }}>Dispatch Urgency</label>
              <select
                id="estUrg"
                className="est-select"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
              >
                <option value="Scheduled">Scheduled Site Visit / Planned Maintenance</option>
                <option value="Emergency">Emergency Breakdown (Rapid On-Site Dispatch)</option>
              </select>
            </div>

            <div className="estimate-result">
              <div className="title">Estimated Response & On-Site Timeline</div>
              <div className="value">{getEstimatedTimeline()}</div>
              <div className="sub">Mobile Dispatch for: {equipmentType} — {serviceType}</div>
            </div>

            <a
              href="#contact"
              className="btn-accent"
              style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }}
            >
              Request Field Engineer On-Site ↗
            </a>
          </div>
        </div>
      </section>

      {/* STATS & IMPACT SECTION */}
      <section className="stats-section">
        <span className="label" style={{ color: '#93c5fd' }}>100% Mobile Operational Reach</span>
        <h2 style={{ fontSize: 'clamp(28px,3.2vw,44px)', fontWeight: 700, maxWidth: '820px', lineHeight: 1.2 }}>
          Dependable on-site engineering service with zero shop transport hassle.
        </h2>
        <div className="stats-grid reveal">
          <div className="stat-item">
            <div className="num">100%</div>
            <div className="lbl">Mobile field service — we come directly to your plant or facility</div>
          </div>
          <div className="stat-item">
            <div className="num">5</div>
            <div className="lbl">Core specialized systems serviced on-site: Mechanical, Hydraulic, Brake, Fuel & Pneumatic</div>
          </div>
          <div className="stat-item">
            <div className="num">24/7</div>
            <div className="lbl">On-call emergency breakdown response for industrial client sites</div>
          </div>
          <div className="stat-item">
            <div className="num">0</div>
            <div className="lbl">Customer drop-off shop delays — Quality That Counts directly at your site</div>
          </div>
        </div>
      </section>

      {/* CONTACT & ENQUIRY SECTION */}
      <section className="enquiry-section" id="contact">
        <div className="enquiry-container reveal">
          <div className="enquiry-info">
            <span className="label">Call For On-Site Service</span>
            <h2>Request Field Engineer Dispatch</h2>
            <p className="hidden md:block">
              We have no customer drop-off shop — when you call or enquire, our technical team prepares mobile units and dispatches certified field engineers directly to your plant, dock, or industrial facility.
            </p>
            <p className="block md:hidden">
              100% mobile dispatch — certified field engineers travel directly to your facility upon request.
            </p>

            <div className="contact-details">
              <div className="cd-item">
                <div className="cd-icon" style={{ background: '#e8f7ed' }}>
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="cd-text">
                  <div className="lbl">Instant WhatsApp Technical Desk</div>
                  <div className="val">
                    <a
                      href="https://wa.me/447497147545?text=Hello%20Veltron%20Engineering%20Service%20Limited,%20I%20would%20like%20to%20enquire%20about%20on-site%20engineering%20dispatch."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#16a34a', fontWeight: 700 }}
                    >
                      Chat with Field Engineer Desk ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="cd-item">
                <div className="cd-icon">
                  <Mail className="w-5 h-5 text-sky-800" />
                </div>
                <div className="cd-text">
                  <div className="lbl">Direct Field Service Email</div>
                  <div className="val">
                    <a href="mailto:samuelugwulebo@gmail.com" style={{ color: '#1d588f' }}>
                      samuelugwulebo@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="cd-item">
                <div className="cd-icon">
                  <MapPin className="w-5 h-5 text-sky-800" />
                </div>
                <div className="cd-text">
                  <div className="lbl">Registered Office Address</div>
                  <div className="val">
                    Mansion House, Manchester Road, Altrincham, Cheshire, England, WA14 4RW
                  </div>
                </div>
              </div>

              <div className="cd-item">
                <div className="cd-icon">
                  <Truck className="w-5 h-5 text-sky-800" />
                </div>
                <div className="cd-text">
                  <div className="lbl">Service Delivery Model</div>
                  <div className="val" style={{ color: '#1d588f', fontWeight: 700 }}>
                    100% Mobile On-Site Dispatch
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <a
                href="https://wa.me/447497147545?text=Hello%20Veltron%20Engineering%20Service%20Limited,%20I%20would%20like%20to%20enquire%20about%20on-site%20engineering%20dispatch."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: '#25D366',
                  color: '#ffffff',
                  padding: '14px 24px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                  width: '100%',
                  transition: 'transform 0.2s ease, background-color 0.2s ease'
                }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Message on WhatsApp</span>
                <span style={{ fontSize: '16px' }}>↗</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div style={{ width: '100%' }}>
            {enquirySubmitted ? (
              <div style={{ background: '#e2edfd', border: '1px solid #1d588f', padding: '32px', textAlign: 'center', borderRadius: '8px' }}>
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" style={{ margin: '0 auto 12px auto' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0b1a2e', marginTop: '12px' }}>
                  Dispatch Request Received
                </h3>
                <p style={{ fontSize: '14px', color: '#475569', marginTop: '8px', lineHeight: 1.6 }}>
                  Thank you for contacting <strong>Veltron Engineering Service Limited</strong>. Our mobile field engineering desk will review your facility details and reply to your email immediately to confirm dispatch details.
                </p>
                <button
                  className="btn-dark"
                  style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}
                  onClick={() => setEnquirySubmitted(false)}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form
                className="enquiry-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setEnquirySubmitted(true);
                }}
              >
                <div className="form-group">
                  <label htmlFor="companyName">Company / Contact Person Name</label>
                  <input id="companyName" type="text" placeholder="e.g. Plant Manager / Site Engineer" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="client@company.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="siteLocation">Site / Plant Facility Location</label>
                  <input id="siteLocation" type="text" placeholder="e.g. Manchester Dockland Facility / Plant Site 4" required />
                </div>
                <div className="form-group">
                  <label htmlFor="serviceCategory">System & Operation Required</label>
                  <CustomRepairInput
                    value={customRepairText}
                    onChange={(newRequirement) => setCustomRepairText(newRequirement)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Equipment Details & Fault Description</label>
                  <textarea
                    id="message"
                    placeholder="Describe your heavy machinery type, breakdown symptoms, or servicing scope needed on-site..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-dark form-submit-btn">
                  Request Mobile Engineer Dispatch <span className="ar">↗</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact-footer">
        <div className="foot-top">
          <h2>Reliable Mechanical Engineering Solutions — Quality That Counts.</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              className="btn-light"
              href="https://wa.me/447497147545?text=Hello%20Veltron%20Engineering%20Service%20Limited,%20I%20would%20like%20to%20enquire%20about%20on-site%20engineering%20dispatch."
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#25D366', color: '#ffffff', borderColor: '#25D366' }}
            >
              <MessageCircle className="w-4 h-4" /> Message on WhatsApp ↗
            </a>
            <a className="btn-light" href="mailto:samuelugwulebo@gmail.com">
              samuelugwulebo@gmail.com ↗
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="logo-container">
            <img src={veltronLogoLight} alt="Veltron Engineering Service Limited" className="logo-img" />
          </div>
          <span>© {new Date().getFullYear()} Veltron Engineering Service Limited. All rights reserved.</span>
          <div className="foot-social">
            <a href="#services">Mechanical Repair</a>
            <a href="#services">System Overhaul</a>
            <a href="#services">Preventive Servicing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
