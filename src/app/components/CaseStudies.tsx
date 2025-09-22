"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';
import RealEstate from './../../../public/images/Real-Estate.svg';
import Finance from './../../../public/images/Finance.svg';
import Healthcare from './../../../public/images/Healthcare.svg';
import Cloud from './../../../public/images/Cloud-data-migration.svg';
import Retail from './../../../public/images/Retail.svg';
import Hospitality from './../../../public/images/Hospitality.svg';
import Form from "@/app/components/CaseStudyForm";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const CaseStudy = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const caseStudies = [
    { category: "Real Estate", image: RealEstate, title: "Unified Data Hub", challenge: "Fragmented data from 85,000+ rental homes across 16 US markets led to slow reporting, poor maintenance tracking, and compliance hurdles.", impact: ["27+ data sources unified via Snowflake, with 150+ automated dashboards", "60% faster reporting cycles", "40% reduction in maintenance turnaround time", "100% regulatory compliance achieved"] },
    { category: "Finance", image: Cloud, title: "Cloud Data Migration", challenge: "Legacy Oracle system caused slow queries and high upgrade costs for huge customer data volumes.", impact: ["Migrated to Snowflake on AWS, enabling 40% faster query performance", "50% lower infrastructure costs with pay-as-you-go model", "100% data integrity during migration", "Instant, secure access for 5+ teams"] },
    { category: "Shipping & Logistics", image: Finance, title: "AI Container Optimization", challenge: "Manual container stacking led to high costs, excessive labor, and poor yard utilization.", impact: ["75% reduction in planning time", "30% fewer stacking operations", "Achieved 100% match with pre-planned layouts", "20% fewer yard violations"] },
    { category: "Hospitality", image: Hospitality, title: "AI Housekeeping Audit", challenge: "Manual hotel audits were slow, inconsistent, and labor-intensive.", impact: ["80% faster audit turnaround time", "Reduced audit effort by 60%", "Raised guest satisfaction scores by 20%", "Enabled real-time room status with automated photo checks"] },
    { category: "Healthcare", image: Healthcare, title: "Performance KPI Dashboard", challenge: "Manual tracking of doctor productivity, revenue, and patient flow restricted operational efficiency.", impact: ["70% faster access to financial and productivity data", "Enabled real-time tracking for 100+ doctors", "Grew service utilization by 25%", "Improved monthly revenue analysis"] },
    { category: "Retail & E-commerce", image: Retail, title: "Automated Order Intelligence", challenge: "Manual order entry and lack of real-time analytics slowed fulfillment and increased costs.", impact: ["Eliminated manual order entry, saving 30+ hours/week", "95% reduction in order errors", "99% on-time shipment rate achieved", "Boosted promotion-driven sales by 18%"] },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider arrows for desktop
  const Arrow = ({ onClick, isLeft }: { onClick?: () => void; isLeft?: boolean }) => (
    <button aria-label={isLeft ? "Previous slide" : "Next slide"}
      className={`hidden sm:flex absolute top-1/2 -translate-y-1/2 z-10 bg-[#EDEDED] text-[var(--foreground)] p-2 xl:p-3 rounded-full ${isLeft ? '-left-12' : '-right-12'}`}
      onClick={onClick}
    >
      {isLeft ? <FaChevronLeft aria-hidden="true" /> : <FaChevronRight aria-hidden="true" />}
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow isLeft />,
  };

  return (
    <div className="bg-white text-white py-12 lg:py-20 relative overflow-x-hidden">
      <div className="text-center mb-12 lg:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold xl:leading-24 tracking-tight bg-gradient-to-br sm:bg-gradient-to-r from-[#303030] via-[#32006C] via-[50%] to-[#4D4D4D] bg-clip-text text-transparent">
          Client Success Story
        </h2>
        <p className="mt-2 text-[var(--foreground)] medium-text mx-auto text-lg md:text-xl">
          Real results from our partnerships with leading Middle East companies.
        </p>
      </div>

      <div className="xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 relative">
        {isMobile ? (
            <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {caseStudies.map((study, index) => (
                <div
                    key={index}
                    className="bg-[#222222] rounded-2xl p-6 flex-shrink-0 w-11/12 snap-start"
                >
                    <div className="flex justify-between items-center mb-4">
                    <p className="text-sm uppercase text-white">{study.category}</p>
                    <Image src={study.image} alt="Category icon" width={64} height={64} />
                    </div>
                    <h3 className="text-xl xl:text-2xl text-white semibold-text tracking-tight mb-4">{study.title}</h3>
                    <p className="text-white text-lg medium-text mb-2">Challenge:</p>
                    <p className="text-base text-[#D4D4D4] mb-4">{study.challenge}</p>
                    <p className="text-white text-lg medium-text mb-2">Impact Delivered:</p>
                    <ul className="list-disc list-outside ms-4 text-base text-[#D4D4D4] space-y-1 mb-4">
                    {study.impact.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                    </ul>
                    <div className="flex justify-end">
                    <button
                        onClick={() => setModalOpen(true)}
                        className="px-4 py-1 rounded-full border border-white text-white text-sm cursor-pointer"
                    >
                        Download
                    </button>
                    </div>
                </div>
                ))}
            </div>
            ) : (
          // Slider for desktop/tablet
          <Slider {...settings} className="pb-10 [&_.slick-dots]:mt-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="h-full w-full px-2">
                <div className="bg-[#222222] rounded-2xl p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="justify-between flex flex-row items-center mb-1">
                      <p className="text-sm uppercase text-white">{study.category}</p>
                      <Image src={study.image} alt="Category icon" width={64} height={64} />
                    </div>
                    <h3 className="text-xl xl:text-2xl text-white semibold-text tracking-tight mb-4 xl:mb-8">{study.title}</h3>
                    <p className="text-white text-lg medium-text mb-1">Challenge:</p>
                    <p className="text-base text-[#D4D4D4] mb-4 xl:mb-8">{study.challenge}</p>
                    <p className="text-white text-lg medium-text mb-1">Impact Delivered:</p>
                    <ul className="list-disc list-outside ms-4 text-base text-[#D4D4D4] space-y-1 my-4 xl:mb-8">
                      {study.impact.map((point, i) => (<li key={i}>{point}</li>))}
                    </ul>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="px-4 py-1 rounded-full border border-white text-white text-sm cursor-pointer">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Modal Overlay */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="bg-white mx-2 rounded-xl max-w-lg w-full p-6 relative">
            <button
              className="absolute top-4 right-6 text-[var(--buttoncolor)] hover:text-black"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-xl semibold-text mb-4">Contact for more information</h3>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;