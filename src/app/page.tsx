import HeroSection from '@/app/components/HeroSection';
import Services from '@/app/components/Services';
import Expertise from '@/app/components/Expertise';
import WhyUs from '@/app/components/WhyUs';
import Kpi from '@/app/components/Kpi';
import Engagement from '@/app/components/Engagement';
import CtaSection  from '@/app/components/CtaSection';
import CaseStudy from './components/CaseStudies';
import Footer from '@/app/components/Footer';
import ScrollToTop from '@/app/components/ScrollToTop';

export const metadata = {
  title: "ResoNex | Data & AI Consulting, Automation & Cloud (UAE)",
  description: "Turn data into decisions with AI, analytics, automation and cloud. Explore 300+ KPIs with experts across AWS, Azure, GCP, Databricks & Power BI in Dubai.",
};

export default function Home() {
  return (
    <div>
      
      <ScrollToTop />
      
      {/* Navbar + Hero Section */}
      <div id="/"><HeroSection/></div>

      {/* Services */}
      <div id="services" ><Services/></div>

      {/* Expertise */}
      <div><Expertise/></div>

      {/* WhyUs */}
      <div id="why-us"><WhyUs/></div>

      {/* KPI section */}
      <div id="kpi-library"><Kpi/></div>

      {/* Engagement */}
      <div><Engagement/></div>

      {/* CtaSection */}
      <div><CtaSection/></div>

      {/* Case Studies */}
      <div id="case-studies"><CaseStudy /></div>

      {/* Footer */}
      <div id="contact"><Footer/></div>
        
      {/* main page ends */}
    </div>
  );
}
