"use client";

import Navbar from './../components/Navbar'
import Footer from './../components/Footer';

const TermsOfUse = () => {

  return (
    <div>
        <div>
            <Navbar/>
        </div>
        
        <div className='mx-3 lg:mx-4 xl:mx-0 my-8'>
            <div className='lg:max-w-[1200px] 2xl:max-w-[1380px] m-auto bg-white'>

                <div className='mx-8 sm:mx-12'>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-[var(--foreground)] heading-font mb-8">
                        Terms Of Use
                    </h1>
                    <section>
                        <h2 className='font-bold my-2'>1. Form Submissions and Communications</h2>
                        <p>By submitting inquiries through our website forms, you:</p>
                        <ul>
                            <li>Confirm all provided information is accurate</li>
                            <li>Agree to receive communications related to your inquiry</li>
                            <li>Acknowledge that submissions don&apos;t create binding agreements</li>
                            <li>Accept that project details may be used for proposal preparation</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>2. Project Information</h2>
                        <p>When submitting project details, you:</p>
                        <ul>
                            <li>Grant us permission to evaluate your requirements</li>
                            <li>Understand that budget ranges are for estimation purposes</li>
                            <li>Agree that timeframes are subject to final project scope</li>
                            <li>Accept that service recommendations may vary based on assessment</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>3. Service Engagement</h2>
                        <p>Our service engagement process includes:</p>
                        <ul>
                            <li>Initial assessment of submitted requirements</li>
                            <li>Project scope definition</li>
                            <li>Resource allocation planning</li>
                            <li>Timeline and budget finalization</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>4. Intellectual Property</h2>
                        <h3 className=' my-2'>4.1 Your Content</h3>
                        <ul>
                            <li>You retain rights to information you submit</li>
                            <li>Grant us license to use for service delivery</li>
                            <li>Allow use for internal business purposes</li>
                        </ul>

                        <h3 className=' my-2'>4.2 Our Content</h3>
                        <p>We retain all rights to:</p>
                        <ul>
                            <li>Website content and design</li>
                            <li>Service descriptions and methodologies</li>
                            <li>Proprietary tools and processes</li>
                            <li>Marketing materials</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>5. Confidentiality</h2>
                        <p>We protect your information through:</p>
                        <ul>
                            <li>Strict confidentiality protocols</li>
                            <li>Secure data storage</li>
                            <li>Limited access controls</li>
                            <li>Non-disclosure agreements</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>6. Service Limitations</h2>
                        <p>Our services are:</p>
                        <ul>
                            <li>Subject to resource availability</li>
                            <li>Based on accurate project information</li>
                            <li>Dependent on mutual cooperation</li>
                            <li>Governed by separate service agreements</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>7. Geographic Scope</h2>
                        <p>With locations in Dubai, U.A.E.</p>
                        <p>We provide services globally while complying with local laws.</p>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>8. Changes to Terms</h2>
                        <p>We may update these terms:</p>
                        <ul>
                            <li>With notice on our website</li>
                            <li>Through email notifications</li>
                            <li>Maintaining previous versions</li>
                            <li>Preserving user rights</li>
                        </ul>
                    </section>

                    <section className="contact-info">
                        <h2 className='font-bold my-2'>9. Contact Information</h2>
                        <p>For terms-related inquiries:</p>
                        <p>Email: business@resonextech.com</p>
                        <p>Phone: +971502149342</p>
                    </section>

                    <section>
                        <h2 className='font-bold my-2'>10. Governing Law</h2>
                        <p>These terms are governed by applicable laws in our operating jurisdictions, with specific provisions for:</p>
                        <ul>
                            <li>U.A.E.</li>
                        </ul>
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

export default TermsOfUse