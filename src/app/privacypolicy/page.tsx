"use client";

import Navbar from './../components/Navbar'
import Footer from './../components/Footer';

const PrivacyPolicy = () => {

  return (
    <div>
        <div>
            <Navbar/>
        </div>
    
        <div className='mx-3 lg:mx-4 xl:mx-0 my-8 lg:mt-16'>
            <div className='lg:max-w-[1200px] 2xl:max-w-[1380px] m-auto bg-white text-base'>
                

                <div className='mx-8 sm:mx-12'>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-[var(--foreground)] heading-font">
                        Privacy Policy
                    </h1>
                    <section className='my-8'>
                        <h2 className='font-bold my-2'>1. Information We Collect</h2>

                        <h3 className='my-2'>1.1 Information You Provide Through Forms</h3>
                        <p>We collect the following information when you submit inquiries through our website:</p>
                        <ul>
                            <li>Full Name</li>
                            <li>Business Email Address</li>
                            <li>Phone Number</li>
                            <li>Company Name</li>
                            <li>Service of Interest</li>
                            <li>Project Description</li>
                            <li>Estimated Budget</li>
                            <li>Project Timeframe/Deadline</li>
                        </ul>

                        <h3 className=' my-2'>1.2 Automatically Collected Information</h3>
                        <p>We automatically collect:</p>
                        <ul>
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Device information</li>
                            <li>Pages visited on our website</li>
                            <li>Time and date of visits</li>
                            <li>Referring website addresses</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>2. How We Use Your Information</h2>

                        <h3 className=' my-2'>2.1 Business Communications</h3>
                        <p>We use your contact information to:</p>
                        <ul>
                            <li>Respond to your inquiries</li>
                            <li>Provide information about requested services</li>
                            <li>Send project-related communications</li>
                            <li>Share relevant business updates</li>
                        </ul>

                        <h3 className=' my-2'>2.2 Project Assessment</h3>
                        <p>We use project-related information to:</p>
                        <ul>
                            <li>Evaluate project requirements</li>
                            <li>Prepare customized solutions</li>
                            <li>Estimate timelines and resources</li>
                            <li>Create project proposals</li>
                        </ul>

                        <h3 className='my-2'>2.3 Business Development</h3>
                        <p>We use collected information to:</p>
                        <ul>
                            <li>Improve our services</li>
                            <li>Customize solutions for different industries</li>
                            <li>Analyze service preferences</li>
                            <li>Enhance user experience</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>3. Information Sharing</h2>
                        <p>We may share your information with:</p>
                        <ul>
                            <li>Team members involved in project delivery</li>
                            <li>Technology partners (when necessary for service delivery)</li>
                            <li>Legal authorities (when required by law)</li>
                            <li>Professional service providers</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>4. Data Protection and Security</h2>
                        <p>We implement security measures including:</p>
                        <ul>
                            <li>Secure SSL encryption for form submissions</li>
                            <li>Access controls for client information</li>
                            <li>Regular security audits</li>
                            <li>Employee data handling training</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Request data portability</li>
                            <li>Lodge complaints with supervisory authorities</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>6. Cookies and Tracking</h2>
                        <p>We use cookies to:</p>
                        <ul>
                            <li>Improve website functionality</li>
                            <li>Analyze user behavior</li>
                            <li>Remember your preferences</li>
                            <li>Enhance security</li>
                            <li>Provide better user experience</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>7. International Data Transfers</h2>
                        <p>With office in Dubai we may transfer your data internationally. We ensure appropriate safeguards through:</p>
                        <ul>
                            <li>Standard contractual clauses</li>
                            <li>Data processing agreements</li>
                            <li>Privacy Shield compliance (where applicable)</li>
                        </ul>
                    </section>

                    <section className="contact-info">
                        <h2 className='font-bold my-2'>8. Contact Us</h2>
                        <p>For privacy-related inquiries:</p>
                        <p>Email: business@resonextech.com</p>
                        <p>Phone: +971502149342</p>
                    </section>
                </div>

            </div>
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default PrivacyPolicy