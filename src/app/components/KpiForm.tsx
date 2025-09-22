"use client";

import {useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../services/Firebase';
import { serverTimestamp } from "firebase/firestore";
import { IoChevronDown } from "react-icons/io5";

const KpiForm = () => {
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
        addDoc(collection(db, "kpiform"), finalData)
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
        <div>
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
    );
}

export default KpiForm;