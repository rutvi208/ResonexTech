"use client";
import { useState } from "react";
import Image from "next/image";
import KpiBg from './../../../public/images/Kpi-bg.png';
import KpiForm from "@/app/components/KpiForm";

const Kpi = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <div id="kpi-library" className='relative w-full h-max flex items-center justify-center'>
                <Image
                src={KpiBg}
                alt="KPI Background"
                className='absolute inset-0 w-full h-full object-fill'
                loading="lazy" />
                <div className='relative z-10'>
                    {/* <Kpi/> */}
                    <section className=" text-white py-8 sm:py-12 lg:py-20 px-6">
                        <div className="max-w-7xl mx-auto text-center">
                            {/* Heading */}
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                            KPIs tailored to your sector
                            </h2>
                            <p className="text-lg lg:text-xl text-white mb-8 lg:mb-20">
                            Unlock Benchmark Data to Make Confident, Data-Backed Decisions.
                            </p>

                            {/* Description */}
                            <p className="text-white text-lg lg:text-xl max-w-3xl xl:max-w-4xl mx-auto mb-10">
                            Access a curated library of over 300 industry-specific KPIs and operational benchmarks—
                            built for leaders who demand results. Compare your performance across regions, industries,
                            and business functions to spot opportunities, streamline costs, and drive growth.
                            </p>

                            {/* Cards */}
                            <div className="grid gap-6 md:grid-cols-3 mb-10 lg:mb-16">
                                <div className="bg-white text-[var(--foreground)] rounded-2xl lg:rounded-[1.25rem] p-6 lg:p-7">
                                    <h3 className="semibold-text text-left text-lg lg:text-2xl mb-2 lg:mb-4">Sector-Smart Insights:</h3>
                                    <p className="text-base lg:text-lg text-left">
                                    Instantly see key metrics like Cost per Delivery, Average Order Value, and Customer
                                    Acquisition Cost for your industry and geography.
                                    </p>
                                </div>
                                <div className="bg-white text-[var(--foreground)] rounded-2xl lg:rounded-[1.25rem] p-6 lg:p-7">
                                    <h3 className="semibold-text text-left text-lg lg:text-2xl mb-2 lg:mb-4">Global & Regional Benchmarks:</h3>
                                    <p className="text-base lg:text-lg text-left">
                                    Benchmark your business against high-performing peers both globally and locally —
                                    identify strengths and address gaps with precision.
                                    </p>
                                </div>
                                <div className="bg-white text-[var(--foreground)] rounded-2xl lg:rounded-[1.25rem] p-6 lg:p-7">
                                    <h3 className="semibold-text text-left text-lg lg:text-2xl mb-2 lg:mb-4">C-Suite Clarity:</h3>
                                    <div className="">
                                        <p className="text-base lg:text-lg text-left">
                                        Get the insights most relevant to CEOs, CFOs, CIOs, and CHROs for faster,
                                        smarter executive decisions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                                <span className="italic text-white medium-text text-lg lg:text-2xl">Unlock Your Competitive Edge</span>
                                <button onClick={() => setModalOpen(true)}
                                    className="font-semibold semibold-text text-base text-[var(--buttoncolor)] rounded-lg md:rounded-xl py-2.5 px-8 cursor-pointer bg-gradient-to-br from-[#dcf6ff] via-[#ffe0d4] to-[#ffffd1] hover:opacity-95 transition">
                                    Explore KPIs Now!
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
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
                    <KpiForm />
                </div>
                </div>
            )}
            
        </div>
    )
}

export default Kpi;