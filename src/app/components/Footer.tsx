"use client";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { PiPhoneCall } from "react-icons/pi";
import { IoChevronDown } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import Navlogo from './../../../public/images/ResoNex30.png';
import ScrollButtom from '@/app/components/ScrollButton';
import FooterBg from './../../../public/images/Footer-bg.png';
import {useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../services/Firebase';
import { serverTimestamp } from "firebase/firestore";

const Footer = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    
      const [formData, setFormData] = useState({
          fullName: "",
          email: "",
          countryCode: "+971", // default
          contactNumber: "",
          companyName: "",
          description: "",
          createdAt: serverTimestamp()
        });
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
    
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setIsSubmitting(true); // Disable the button
          console.log("Submitting formData:"); // Debug

          try {
            // Save form data to Firestore

            const { countryCode, contactNumber } = formData;
            // Final clean data
            const finalData = {
                ...formData,
                phone: `${countryCode} ${contactNumber}`, // merged phone
                createdAt: serverTimestamp(), 
            };

            // Fire and forget (don’t block UI reset)
            addDoc(collection(db, "submissions"), finalData)
            .then((docRef) => console.log("Doc written:", docRef.id))
            .catch((err) => console.error("Firestore error:", err));

            // await addDoc(collection(db, "contactform"), formData);
            // const docRef = await addDoc(collection(db, "contactform"), finalData);

            alert("Message submitted successfully!");
            setFormData({
            fullName: "",
            email: "",
            countryCode: "+971 ", // default
            contactNumber: "",
            companyName: "",
            description: "",
            createdAt: serverTimestamp()
            });
    
          } catch {
            //setIsSubmitting(false); // Disable the button
            alert("Failed to submit!");
          } finally {
                // ✅ Always re-enable button
                setIsSubmitting(false);
            }
        };
    
    return (
        <div className="overflow-x-hidden">
            
            <div id="contact" className='relative w-full h-max flex items-center justify-center'>
                <Image
                src={FooterBg}
                alt="KPI Background"
                className='absolute inset-0 w-full h-full object-fill'
                loading="lazy" />
                <div className='relative z-10'>
                    {/* <Footer/> */}
                    <ScrollButtom/>
                    <section className="container overflow-x-hidden mx-auto px-4 py-12 sm:px-8 ">
                        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 xl:gap-20 w-full sm:max-w-7xl sm:mx-auto">
                            {/* Left Content */}
                            <div className="w-full lg:w-1/2 min-w-0">
                                <div className="mb-8">
                                    <Link href={"/"}><Image loading="lazy" src={Navlogo} alt="ResoNex Logo" width={160} height={40} /></Link>
                                </div>
                                <h3 className="text-lg lg:text-xl semibold-text mb-2">
                                    Let’s Drive Transformation Together
                                </h3>
                                <p className="text-base mb-6">
                                    Ready to unlock powerful business insights or explore how advanced
                                    automation, cloud, or data solutions can accelerate your growth?
                                    Our team is here to provide answers, expert guidance, and the next
                                    steps to future-proof your enterprise.
                                </p>

                                {/* Contact Info */}
                                <div className="hidden sm:block">
                                    <h4 className="medium-text text-base lg:text-lg mb-4 xl:mb-5">
                                        Contact Us
                                    </h4>
                                    <div className="flex flex-col sm:flex-row gap-4 xl:gap-6 mb-2 xl:mb-3">
                                        <div className="flex items-center gap-3">
                                            <HiOutlineEnvelope className="text-[var(--foreground)] w-5 h-5 sm:w-6 sm:h-6" />
                                            <a href="mailto:business@resonextech.com">business@resonextech.com</a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <PiPhoneCall className="text-[var(--foreground)] w-5 h-5 sm:w-6 sm:h-6" />
                                            <a href="tel:+971502149342">+971502149342</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <HiOutlineLocationMarker className="text-[var(--foreground)] w-12 h-12 sm:w-6 sm:h-6 sm:mt-1" />
                                        <span className="xl:w-8/12">
                                        ResoNex Technologies L.L.C-FZ, Meydan Grandstand, 6th floor,
                                        Meydan Road, Nad Al Sheba, Dubai, U.A.E.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Form */}
                            <div className="w-full lg:w-1/2">
                                <div className="border border-[#EDEDED] sm:max-w-4xl bg-white rounded-2xl p-6 shadow-sm">
                                    <h4 className="mb-4 xl:mb-6 semibold-text text-base lg:text-xl w-fit tracking-tight bg-gradient-to-br from-[#303030] via-[#32006C] via-[50%] to-[#4D4D4D] bg-clip-text text-transparent">
                                    Feel free to get in touch
                                    </h4>
                                    <form className="space-y-4"  onSubmit={handleSubmit}>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            required
                                            type="text"
                                            maxLength={100}
                                            placeholder="Full Name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full  border border-[#D4D4D4] bg-[#F8F8F8] text-[var(--foreground)] placeholder-[#A2A2A2] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--buttoncolor)]"
                                        />
                                        <div className="flex gap-2">
                                            <div className="relative">
                                                {/* Accessible but visually hidden label */}
                                                <label htmlFor="countryCode" className="sr-only">
                                                Country Code
                                                </label>
                                                <select
                                                id="countryCode"
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleChange}
                                                className="appearance-none border border-[#D4D4D4] bg-[#F8F8F8] rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--buttoncolor)]">
                                                <option>+971</option>
                                                <option>+91</option>
                                                <option>+1</option>
                                                </select>
                                                {/* Custom Chevron */}
                                                <IoChevronDown
                                                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none hover:text-[var(--buttoncolor)]"
                                                size={18} aria-hidden="true"
                                                />
                                            </div>

                                            {/* Accessible but visually hidden label */}
                                            <label htmlFor="contactNumber" className="sr-only">
                                            Contact Number
                                            </label>
                                            <input
                                                id="contactNumber"
                                                name="contactNumber"
                                                required
                                                type="tel"
                                                placeholder="Contact Number"
                                                maxLength={10}
                                                title="Please enter a valid phone number (10 digits)"
                                                value={formData.contactNumber}
                                                onChange={handleChange}
                                                className="flex-1 border border-[#D4D4D4] bg-[#F8F8F8] text-[var(--foreground)] placeholder-[#A2A2A2] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--buttoncolor)]"
                                            />
                                        </div>
                                        <input
                                            id="companyName"
                                            name="companyName"
                                            required
                                            type="text"
                                            maxLength={100}
                                            placeholder="Company Name"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full border border-[#D4D4D4] bg-[#F8F8F8] text-[var(--foreground)] placeholder-[#A2A2A2] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--buttoncolor)]"
                                        />
                                        <input
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                            required
                                            type="email"
                                            maxLength={100}
                                            // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                            title="Please enter a valid email address (e.g., name@example.com)"
                                            placeholder="E-mail ID"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full border border-[#D4D4D4] bg-[#F8F8F8] text-[var(--foreground)] placeholder-[#A2A2A2] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--buttoncolor)]"
                                        />
                                        <textarea
                                            id="description"
                                            name="description"
                                            required
                                            placeholder="Description"
                                            maxLength={500}
                                            value={formData.description}
                                            onChange={handleChange}
                                            // rows="3"
                                            className="w-full border border-[#D4D4D4] bg-[#F8F8F8] text-[var(--foreground)] placeholder-[#A2A2A2] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--buttoncolor)]"
                                        ></textarea>
                                        <div className="mt-4 lg:mt-6 flex items-center justify-center">
                                            <button disabled={isSubmitting} type="submit" 
                                                className="bg-[var(--buttoncolor)] semibold-text text-base text-white rounded-lg md:rounded-xl py-2.5 px-8 ">
                                                {/* Submit */}
                                                <span className="relative px-8 py-2.5 btn-span-theme">
                                                {isSubmitting ? "Submitting..." : "Submit"}
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="block sm:hidden">
                                    <h4 className="medium-text text-base lg:text-lg mb-4 xl:mb-5">
                                        Contact Us
                                    </h4>
                                    <div className="flex flex-col sm:flex-row gap-4 xl:gap-6 mb-2 xl:mb-3">
                                        <div className="flex items-center gap-3">
                                            <HiOutlineEnvelope className="text-[var(--foreground)] w-5 h-5 sm:w-6 sm:h-6" />
                                            <a href="mailto:business@resonextech.com">business@resonextech.com</a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <PiPhoneCall className="text-[var(--foreground)] w-5 h-5 sm:w-6 sm:h-6" />
                                            <a href="tel:+971502149342">+971502149342</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <HiOutlineLocationMarker className="text-[var(--foreground)] w-12 h-12 sm:w-6 sm:h-6 sm:mt-1" />
                                        <span className="xl:w-8/12">
                                        ResoNex Technologies L.L.C-FZ, Meydan Grandstand, 6th floor,
                                        Meydan Road, Nad Al Sheba, Dubai, U.A.E.
                                        </span>
                                    </div>
                                </div>
                        </div>

                        <div className="text-center mt-8 lg:mt-12 xl:mt-16 text-base ">
                            © 2025 ResoNex. All rights reserved. |{" "}
                            <Link href="/privacypolicy.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Privacy Policy
                            </Link>{" "}
                            |{" "}
                            <Link href="/termsofuse.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Terms of Services
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;